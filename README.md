# OpenCut, arreglado

[![Bun CI](https://github.com/wimapro11/Arreglo-para-keim-/actions/workflows/bun-ci.yml/badge.svg)](https://github.com/wimapro11/Arreglo-para-keim-/actions/workflows/bun-ci.yml)

Copia del código fuente de OpenCut
([OpenCut-app/OpenCut](https://github.com/OpenCut-app/OpenCut)) tomada en el
commit `e668010`, con los fallos que traía corregidos. Licencia MIT, la misma que
el original. **No es un fork oficial ni está afiliada al proyecto.**

| Commit | Contenido |
| --- | --- |
| `Import OpenCut at e668010` | El árbol de upstream, sin tocar |
| `OpenCut, fixed` | Los 102 archivos de arreglos. [Ver el diff completo](https://github.com/wimapro11/Arreglo-para-keim-/compare/fd9ccfd4...5cadd48f) |
| `docs:` | Este documento |

---

## Qué se arregló

### CI: nunca había pasado, en ninguna de sus 222 ejecuciones

Dos causas apiladas, una detrás de la otra.

**1. `moon` comparaba contra una rama `master` que no existe.**
`.moon/workspace.yml` no definía `vcs.defaultBranch`, y `moon` asume `master`
cuando no se le dice otra cosa. La rama del proyecto es `main`, así que
`moon ci` moría **al segundo**, antes de ejecutar una sola tarea:

```
Loading changed files
Base revision: N/A
Affected by changes: all
Error: process::failed
  Process git failed: exit code 128
  fatal: ambiguous argument 'master': unknown revision or path not in the working tree.
```

El arreglo es una línea:

```yaml
vcs:
  defaultBranch: 'main'
```

**2. Las tareas `deploy` se ejecutaban en CI.** Con lo anterior resuelto, el
pipeline por fin llegaba a las tareas y fallaba en las dos últimas:

```
web:deploy | ERROR In a non-interactive environment, it's necessary to set a
             CLOUDFLARE_API_TOKEN environment variable for wrangler to work.
api:deploy | (lo mismo)
Tasks: 9 completed, 2 failed
```

Desplegar a Cloudflare no es una comprobación de CI. `runInCI: false` en ambas,
igual que ya hacían las tareas `dev`.

**Y tres cosas más que impedían que el CI fuese útil:**

- `desktop:check` en el runner de Ubuntu necesita paquetes que no vienen
  instalados: `build-essential`, `cmake`, `pkg-config`, `libvulkan-dev`,
  `libwayland-dev`, `libx11-xcb-dev`, `libxkbcommon-x11-dev`,
  `libfontconfig-dev`. `apps/desktop/README.md` los lista como requisito del
  desarrollador; el workflow nunca los instalaba.
- `desktop:check` compila GPUI desde fuente: 30-60 minutos por sistema con caché
  frío. Con `Swatinem/rust-cache` baja a ~1 min 15 s.
- `paths-ignore: "*.md"` solo cubría la raíz del repositorio; ahora es
  `"**/*.md"`. Y se añadió `workflow_dispatch`, porque con `paths-ignore` un push
  que solo cambia markdown no dispara nada y no había forma de pedir un run a
  mano.

Las acciones estaban referenciadas por tags mutables; ahora van pinneadas por
SHA. `media-deps.yml` declaraba `contents: write` para todo el workflow, cuando
solo el job que publica el release lo necesita.

**Resultado: verde en las tres plataformas en unos cuatro minutos.**

### Las instalaciones no eran reproducibles

No había lockfile en ninguna parte, así que cada máquina y cada ejecución de CI
resolvían un árbol de dependencias distinto. Y varias dependencias estaban
pinneadas a la cadena literal `"latest"`, que es un rango irresoluble por
definición. Ahora hay un `bun.lock` commiteado y una raíz de workspace, lo que
además hace que `bunfig.toml` se lea de verdad: Bun solo lee el `bunfig.toml` que
está junto al `package.json` para el que instala, y el guard de versiones llevaba
sin aplicarse desde siempre.

### Nada se comprobaba tipos, porque `tsc` no se podía ni ejecutar

Ni lockfile, ni `tsconfig` en la API, ni forma de invocarlo. Tres errores reales
llevaban ahí sin que nadie los viera:

- `calendar.tsx` pasaba un `className` con la clave `table`, que react-day-picker
  eliminó en la v9. Ahora es `month_grid`. El estilo de la tabla **llevaba desde
  entonces sin aplicarse en absoluto**.
- `spinner.tsx` chocaba con su propio spread de props sobre `strokeWidth`.
- `scroll-area.tsx` importaba React sin usarlo.

### Los tests estaban instalados pero sin conectar

`vitest` y `jsdom` eran dependencias, con script de `test`, sin configuración y
sin un solo archivo de test. `vite.config.ts` importaba `defineConfig` de `vite`,
así que jsdom ni se activaba. Hay `vitest.config.ts`, un archivo de setup con el
`matchMedia` que jsdom no trae, y tres tests reales.

### El modo oscuro era inalcanzable

El bloque `.dark` de `styles.css`, los variants `dark:` de los componentes y la
dependencia `next-themes` existían, pero **nunca se montó ningún
`ThemeProvider`**, así que la clase no se aplicaba jamás. Añadido el provider,
un interruptor para llegar a él, y un test que comprueba que la clase aterriza en
el documento.

### Bugs concretos

- **Los dos tooltips de `chart.tsx`** usaban el índice del array como `key`, tres
  líneas por debajo de la `key` estable que ya habían calculado.
- **`styles.css`** tenía un `@apply` sin punto y coma. Error de sintaxis real.
- **`public/manifest.json`** seguía siendo el de la plantilla de TanStack:
  nombraba la app `"Create TanStack App Sample"` y apuntaba a dos iconos que no
  existen. Además no estaba enlazado desde el `<head>`.
- **`sidebar.tsx`** declaraba de más en dos arrays de dependencias de hooks.
- **`pagination.tsx`** ponía `role="navigation"` en un `<nav>`, que ya lo es.
- **`setup.ts`** (media) tenía cuatro `!` de non-null porque un booleano no
  estrecha el tipo. Modelado como fuente-o-prebuilt, el compilador lo arrastra
  solo. Y la búsqueda del directorio de fuentes ahora falla con un mensaje en
  lugar de unir una ruta llamada `undefined`.

### Los cuatro prebuilts de FFmpeg daban 404

Los cuatro pines de `ffmpeg.json` apuntaban a un tag de BtbN que ya no existe y
a nombres de archivo que **nunca** existieron: los reales llevan un sufijo de
commit (`ffmpeg-n8.1.3-18-g46d899d7a0-win64-lgpl-shared-8.1.zip`). O sea que
`moon run media:setup` fallaba en **todas** las plataformas, no solo donde no hay
pin. Re-pinneados a un tag vigente, con los SHA-256 tomados del
`checksums.sha256` publicado y **verificados descargando un archivo y
hasheándolo**.

`ffmpeg.json` no tiene entradas para macOS, y no es un olvido: BtbN no publica
builds de macOS (lo comprobé listando sus releases), así que la única fuente es
el workflow propio del repositorio. `setup.ts` lo explica ahora.

En Windows el prebuilt es la **única** vía posible: un build desde fuente
requiere cross-compilar desde Linux con llvm-mingw, y el script se niega.

### No existían avisos de licencias

En un proyecto que distribuye fuentes con licencia OFL y binarios de FFmpeg con
LGPL. `THIRD-PARTY-NOTICES.md` se genera desde los lockfiles con
`scripts/third-party-notices.ts`, así que regenerarlo es un comando. Resultado
actual: 1321 dependencias, **cero sin licencia declarada**, y los candidatos a
copyleft son todos dev-only, de build-time o dual-licensed con opción permisiva.

### Peso muerto

Cuatro dependencias directas y **47 paquetes** existían por un solo componente:
`form.tsx` era el único consumidor de `radix-ui` y `react-hook-form`, nada
importaba `form.tsx`, y `@hookform/resolvers` y `zod` no los importaba nadie.
También sobraba `lucide-react`, con cero usos (el sistema de iconos es
Hugeicons).

### Formato y arnés de verificación

El repositorio documentaba Biome sin traer configuración, mientras `.vscode`
apuntaba a Prettier y a Biome a la vez. Ahora hay `biome.jsonc`, `.editorconfig`,
`rustfmt.toml` y `.gitattributes` — este último porque en Windows, con
`core.autocrlf` activo, `git status` reportaba **todo** el árbol como modificado.

Se añadieron las tareas que faltaban: `typecheck` en raíz, web y api,
`desktop:fmt`, y `notices`. Y las exenciones de accesibilidad quedaron acotadas a
`apps/web/src/components/ui` en lugar de globales, de modo que el resto del código
sigue teniendo esas reglas como errores.

---

## Estado actual del proyecto

Esto **no es un editor de vídeo**, y no lo era antes de estos arreglos: es la
reescritura en curso. Arrancarlo da esto y nada más:

| Dónde | Qué hay |
| --- | --- |
| La web, en `/` | «OpenCut» y *«The rewrite is under construction»* |
| La web, en `/editor` | «Editor» y *«Coming soon»* |
| La app de escritorio | Una ventana con cuatro recuadros: *Browser*, *Preview*, *Inspector*, *Timeline* |
| La API | Tres direcciones: `/`, `/health` y `/echo` |

No se puede importar un vídeo, cortarlo ni exportarlo. La versión funcional del
editor es la anterior, **https://opencut.app**, y es la que el proyecto
recomienda mientras esta reescritura avanza.

## Cómo se ejecuta

```powershell
proto use        # instala moon, bun y Rust en las versiones de .prototools
bun install      # 620 paquetes, ~600 MB
moon run web:dev # localhost:5173
```

| Comando | Qué hace |
| --- | --- |
| `moon run web:dev` | La web, en localhost:5173 |
| `moon run api:dev` | La API, en localhost:8787 |
| `moon run desktop:dev` | La app de escritorio (necesita Rust y las MSVC Build Tools) |
| `moon run lint` / `format` | Biome, comprobar / aplicar |
| `moon run typecheck` | `tsc` de los scripts y del crate de media |
| `moon run web:test` | Vitest |
| `moon run media:setup` | Descarga FFmpeg y verifica su SHA-256 |
| `moon run notices` | Regenera `THIRD-PARTY-NOTICES.md` |

En Windows, el detalle completo —incluido lo que hace falta para compilar el
escritorio, que son las MSVC Build Tools— está en **`SETUP-WINDOWS.md`**.

## Si algo falla

| Síntoma | Causa |
| --- | --- |
| `linker 'link.exe' not found` | Faltan las MSVC Build Tools |
| `git status` marca todos los archivos | `core.autocrlf` está activado |
| `No default project has been configured` | Usa el target con scope: `moon run web:test` |
| `moon run lint` se queja del formato | `moon run format` |
| `download failed: 404` en `media:setup` | Un pin de FFmpeg caducó; el error lo dice |
| `error: ambiguous argument 'master'` | Falta `vcs.defaultBranch` (ya está) |

## Documentación

| Archivo | Qué es |
| --- | --- |
| `SETUP-WINDOWS.md` | Instalación en Windows, en detalle |
| `THIRD-PARTY-NOTICES.md` | Todas las dependencias y sus licencias, generado |
| `README.upstream.md` | El README original de OpenCut, sin tocar |
| `LICENSE` | Licencia MIT |
| `changelog/` | Notas de versión de OpenCut |

## Pendiente

- **El pin de macOS en FFmpeg.** No tiene arreglo de terceros: nadie publica
  builds compartidos LGPL para Mac. Se cierra ejecutando `media-deps.yml` una vez
  y luego `bun run crates/media/setup/pin.ts <tag>`, que rellena las seis
  plataformas.
- **Los 13 warnings de lint restantes** son inherentes a los primitivos vendored
  de shadcn (roles no semánticos, `key` por índice en listas de longitud fija).
  Están acotados y documentados en `biome.jsonc`.
- **La app de escritorio no tiene funciones.** Es un esqueleto, y ningún arreglo
  de los de arriba cambia eso.
