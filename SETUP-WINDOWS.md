# Windows setup

Everything a fresh Windows checkout needs, in order. Verified on Windows 11
with PowerShell. If you read only one line: you need **Git**, then **proto**
(which brings moon, bun and Rust), and nothing else unless you are working on
the desktop app.

## 1. Git

Any recent version. Two settings matter:

```powershell
# node_modules nests deeper than the old 260 character limit.
git config --system core.longpaths true
```

**Do not set `core.autocrlf=true`.** The repository ships a `.gitattributes`
that normalizes line endings for everyone. If you had it enabled, files in your
working tree will be CRLF while the repository stores LF — that is expected,
produces no diff, and Git handles it. If `git status` reports the whole tree as
modified, that setting is why.

## 2. proto: moon, bun and Rust, all pinned

`.prototools` pins the exact versions (moon 2.3.3, bun 1.3.11, rust 1.97.0) so
every machine and CI agree.

```powershell
irm https://moonrepo.dev/install/proto.ps1 | iex
```

Open a new shell, then:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned   # only if shims are blocked
proto use
```

Confirm: `moon --version` and `bun --version`.

<details>
<summary>Without proto</summary>

Anything that puts the same versions on `PATH` works:

```powershell
npm install -g bun@1.3.11 @moonrepo/cli@2.3.3
```
</details>

## 3. Dependencies

```powershell
bun install
```

Reads the committed `bun.lock` and installs ~660 packages. `node_modules` is
about 700 MB, and it is safe to delete and reinstall — the lockfile is what
makes that true.

## 4. Running things

| Task | What it does |
| --- | --- |
| `moon run web:dev` | the web app on localhost:5173 |
| `moon run api:dev` | the API on localhost:8787 (Cloudflare Workers) |
| `moon run lint` | Biome over the whole repository |
| `moon run format` | `biome format --write`, then commit |
| `moon run typecheck` | `tsc` for `scripts/` and `crates/media/setup/` |
| `moon run web:test` | Vitest |
| `moon run web:typecheck` | `tsc` for the web app |
| `moon run notices` | regenerates `THIRD-PARTY-NOTICES.md` |
| `moon run desktop:dev` | the desktop app — needs section 5 |

An unscoped `moon run <task>` resolves to the root project. Anything project
specific needs its scope, as above. A bare `moon run lint` works because the
workspace sets a `defaultProject`.

## 5. Rust and the desktop app (optional)

Only for `moon run desktop:*`. This needs **two** things, and the second is the
one people miss.

1. Rust itself — `proto use` installs the pinned 1.97.0, or
   `rustup toolchain install 1.97.0`.
2. **MSVC Build Tools.** The `x86_64-pc-windows-msvc` target links with
   `link.exe`, and GPUI's build scripts use `embed-resource`, which needs
   `rc.exe` from the Windows SDK. Neither ships with Windows.

```powershell
winget install --id Microsoft.VisualStudio.2022.BuildTools `
  --accept-package-agreements --accept-source-agreements `
  --override "--quiet --wait --add Microsoft.VisualStudio.Workload.VCTools --includeRecommended"
```

Budget 2–6 GB for that, and several more for the first build: GPUI compiles
from source, so the first `moon run desktop:check` takes 30–60 minutes. If you
only want to check formatting you can skip all of it — `rustfmt` installs
without a linker:

```powershell
rustup toolchain install 1.97.0 --profile minimal --component rustfmt
moon run desktop:fmt
```

## 6. FFmpeg (only for the media crate)

```powershell
moon run media:setup
```

Downloads the pinned prebuilt into `.cache/media/` and verifies its SHA-256. On
Windows this is the only path that works: building from source requires
cross-compiling from Linux with llvm-mingw, and the script refuses otherwise.

Two things worth knowing about `crates/media/setup/ffmpeg.json`:

- The Linux and Windows pins currently point at BtbN's autobuilds, and BtbN
  prunes old tags. If a download 404s, that is why — re-pin it, or ask for a
  source build on Linux.
- There are **no macOS entries**, and that is not an oversight: nobody
  publishes shared LGPL macOS builds. macOS can only be pinned from this
  repository's own `media-deps.yml` run. Run that workflow once, then
  `bun run crates/media/setup/pin.ts <tag>`, and all six platforms get pinned.

## 7. When something fails

| Symptom | Cause |
| --- | --- |
| `linker 'link.exe' not found` | MSVC Build Tools missing — section 5 |
| `No default project has been configured` | use a scoped target, e.g. `moon run web:test` |
| `git status` shows every file modified | `core.autocrlf` is on — section 1 |
| `moon run lint` reports formatting | `moon run format` |
| `download failed: 404` from `media:setup` | the FFmpeg pin was pruned — section 6 |
| Vitest finds no tests | you are not in `apps/web`, or the `src/**/*.test.tsx` glob is gone |
