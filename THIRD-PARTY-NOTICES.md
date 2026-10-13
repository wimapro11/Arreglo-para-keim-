# Third-party notices

Generated, not written by hand. To regenerate it:

```sh
bun run scripts/third-party-notices.ts
```

Sources: the packages installed in `node_modules` and `cargo metadata` for
the Rust workspace. This audits the licence each package **declares**, not
the text of every file it ships.

- JS/TS: 618 packages
- Rust: 703 crates
- Without a declared licence: 0

## Licences present

| Licence | Packages |
| --- | --- |
| MIT | 1168 |
| Apache-2.0 | 514 |
| ISC | 43 |
| BSD-3-Clause | 24 |
| Zlib | 21 |
| Unicode-3.0 | 19 |
| BSD-2-Clause | 13 |
| Unlicense | 10 |
| Apache-2.0 WITH LLVM-exception | 8 |
| CC0-1.0 | 7 |
| MPL-2.0 | 7 |
| MIT-0 | 3 |
| BlueOak-1.0.0 | 3 |
| 0BSD | 2 |
| LGPL-2.1-or-later | 2 |
| OFL-1.1 | 1 |
| LGPL-3.0-or-later | 1 |
| Python-2.0 | 1 |
| CC-BY-4.0 | 1 |
| NCSA | 1 |
| BSL-1.0 | 1 |
| GPL-2.0-only | 1 |

## Distribution obligations

- **Inter (OFL-1.1)** ships inside the build: the `.woff2` files are emitted
  into `dist`. The full OFL text is at the end of this document.
- **FFmpeg (LGPL-2.1-or-later)**: see below. Dynamically linked, and built
  without `libx264`.
- **MPL-2.0** (`dwrote`, `option-ext`, `cbindgen` in Rust; `lightningcss` in
  JS): file-level copyleft. It is satisfied by being able to point at the
  source of those crates, and since they are unmodified that means citing
  crates.io.
- **CC-BY-4.0** (`caniuse-lite`): attribution. Build-time data.

## JS/TS

| Package | Licence | Copyright notice |
| --- | --- | --- |
| `@acemir/cssom@0.9.31` | MIT | Copyright (c) Nikita Vasilyev |
| `@asamuzakjp/css-color@5.1.11` | MIT | Copyright (c) 2024 asamuzaK (Kazz) |
| `@asamuzakjp/dom-selector@6.8.1` | MIT | Copyright (c) 2023 asamuzaK (Kazz) |
| `@asamuzakjp/generational-cache@1.0.1` | MIT | Copyright (c) 2026 asamuzaK (Kazz) |
| `@asamuzakjp/nwsapi@2.3.9` | MIT | Copyright (c) 2007-2019 Diego Perini (http://www.iport.it/) |
| `@babel/code-frame@7.29.7` | MIT | Copyright (c) 2014-present Sebastian McKenzie and other contributors |
| `@babel/compat-data@7.29.7` | MIT | Copyright (c) 2014-present Sebastian McKenzie and other contributors |
| `@babel/core@7.29.7` | MIT | Copyright (c) 2014-present Sebastian McKenzie and other contributors |
| `@babel/generator@7.29.8` | MIT | Copyright (c) 2014-present Sebastian McKenzie and other contributors |
| `@babel/helper-annotate-as-pure@7.29.7` | MIT | Copyright (c) 2014-present Sebastian McKenzie and other contributors |
| `@babel/helper-compilation-targets@7.29.7` | MIT | Copyright (c) 2014-present Sebastian McKenzie and other contributors |
| `@babel/helper-create-class-features-plugin@7.29.7` | MIT | Copyright (c) 2014-present Sebastian McKenzie and other contributors |
| `@babel/helper-globals@7.29.7` | MIT | Copyright (c) 2014-present Sebastian McKenzie and other contributors |
| `@babel/helper-member-expression-to-functions@7.29.7` | MIT | Copyright (c) 2014-present Sebastian McKenzie and other contributors |
| `@babel/helper-module-imports@7.29.7` | MIT | Copyright (c) 2014-present Sebastian McKenzie and other contributors |
| `@babel/helper-module-transforms@7.29.7` | MIT | Copyright (c) 2014-present Sebastian McKenzie and other contributors |
| `@babel/helper-optimise-call-expression@7.29.7` | MIT | Copyright (c) 2014-present Sebastian McKenzie and other contributors |
| `@babel/helper-plugin-utils@7.29.7` | MIT | Copyright (c) 2014-present Sebastian McKenzie and other contributors |
| `@babel/helper-replace-supers@7.29.7` | MIT | Copyright (c) 2014-present Sebastian McKenzie and other contributors |
| `@babel/helper-skip-transparent-expression-wrappers@7.29.7` | MIT | Copyright (c) 2014-present Sebastian McKenzie and other contributors |
| `@babel/helper-string-parser@7.29.7` | MIT | Copyright (c) 2014-present Sebastian McKenzie and other contributors |
| `@babel/helper-validator-identifier@7.29.7` | MIT | Copyright (c) 2014-present Sebastian McKenzie and other contributors |
| `@babel/helper-validator-option@7.29.7` | MIT | Copyright (c) 2014-present Sebastian McKenzie and other contributors |
| `@babel/helpers@7.29.7` | MIT | Copyright (c) 2014-present Sebastian McKenzie and other contributors |
| `@babel/parser@7.29.9` | MIT | Copyright (C) 2012-2014 by various contributors (see AUTHORS) |
| `@babel/plugin-syntax-jsx@7.29.7` | MIT | Copyright (c) 2014-present Sebastian McKenzie and other contributors |
| `@babel/plugin-syntax-typescript@7.29.7` | MIT | Copyright (c) 2014-present Sebastian McKenzie and other contributors |
| `@babel/plugin-transform-modules-commonjs@7.29.7` | MIT | Copyright (c) 2014-present Sebastian McKenzie and other contributors |
| `@babel/plugin-transform-typescript@7.29.9` | MIT | Copyright (c) 2014-present Sebastian McKenzie and other contributors |
| `@babel/preset-typescript@7.29.7` | MIT | Copyright (c) 2014-present Sebastian McKenzie and other contributors |
| `@babel/runtime@7.29.7` | MIT | Copyright (c) 2014-present Sebastian McKenzie and other contributors |
| `@babel/template@7.29.7` | MIT | Copyright (c) 2014-present Sebastian McKenzie and other contributors |
| `@babel/traverse@7.29.8` | MIT | Copyright (c) 2014-present Sebastian McKenzie and other contributors |
| `@babel/types@7.29.8` | MIT | Copyright (c) 2014-present Sebastian McKenzie and other contributors |
| `@base-ui/react@1.8.0` | MIT | Copyright (c) 2019 Material-UI SAS |
| `@base-ui/utils@0.4.0` | MIT | Copyright (c) 2019 Material-UI SAS |
| `@biomejs/biome@2.5.15` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `@biomejs/cli-win32-x64@2.5.15` | MIT OR Apache-2.0 | - |
| `@borewit/text-codec@0.2.2` | MIT | Copyright © 2025 Borewit |
| `@bramus/specificity@2.4.3` | MIT | Copyright (c) 2022 Bramus Van Damme - https://www.bram.us |
| `@cloudflare/kv-asset-handler@0.5.0` | MIT OR Apache-2.0 | - |
| `@cloudflare/unenv-preset@2.16.2` | MIT OR Apache-2.0 | - |
| `@cloudflare/vite-plugin@1.63.0` | MIT | - |
| `@cloudflare/workerd-windows-64@1.20261006.1` | Apache-2.0 | - |
| `@cloudflare/workers-types@5.20261006.1` | MIT OR Apache-2.0 | - |
| `@cspotcode/source-map-support@0.8.1` | MIT | Copyright (c) 2014 Evan Wallace |
| `@csstools/color-helpers@6.1.2` | MIT-0 | Copyright © CSSTools Contributors |
| `@csstools/css-calc@3.4.3` | MIT | Copyright 2022 Romain Menke, Antonio Laguna <antonio@laguna.es> |
| `@csstools/css-color-parser@4.2.6` | MIT | Copyright 2022 Romain Menke, Antonio Laguna <antonio@laguna.es> |
| `@csstools/css-parser-algorithms@4.0.2` | MIT | Copyright 2022 Romain Menke, Antonio Laguna <antonio@laguna.es> |
| `@csstools/css-syntax-patches-for-csstree@1.1.15` | MIT-0 | Copyright © CSSTools Contributors |
| `@csstools/css-tokenizer@4.0.2` | MIT | Copyright 2022 Romain Menke, Antonio Laguna <antonio@laguna.es> |
| `@date-fns/tz@1.5.0` | MIT | Copyright © 2024 Sasha Koss |
| `@dotenvx/dotenvx@1.75.1` | BSD-3-Clause | Copyright (c) 2024, Scott Motte |
| `@dotenvx/primitives@0.8.0` | BSD-3-Clause | Copyright (c) 2024, Scott Motte |
| `@esbuild/win32-x64@0.28.1` | MIT | - |
| `@exodus/bytes@1.16.0` | MIT | Copyright (c) 2024-2025 Exodus Movement |
| `@floating-ui/core@1.8.0` | MIT | Copyright (c) 2021-present Floating UI contributors |
| `@floating-ui/dom@1.8.0` | MIT | Copyright (c) 2021-present Floating UI contributors |
| `@floating-ui/react-dom@2.1.9` | MIT | Copyright (c) 2021-present Floating UI contributors |
| `@floating-ui/utils@0.2.12` | MIT | Copyright (c) 2021-present Floating UI contributors |
| `@fontsource-variable/inter@5.3.0` | OFL-1.1 | Copyright 2016 The Inter Project Authors (https://github.com/rsms/inter) Inter-Italic[opsz,wght].ttf: Copyright 2016 The Inter ... |
| `@hono/node-server@2.1.3` | MIT | Copyright (c) 2022 - present, Yusuke Wada and Hono contributors |
| `@hugeicons/core-free-icons@4.3.5` | MIT | Copyright (c) 2025 Hugeicons |
| `@hugeicons/react@1.1.10` | MIT | Copyright (c) 2025 Hugeicons |
| `@img/colour@1.1.0` | MIT | Copyright (c) 2012 Heather Arthur |
| `@img/sharp-win32-x64@0.35.4` | Apache-2.0 AND LGPL-3.0-or-later | "Licensor" shall mean the copyright owner or entity authorized by the copyright |
| `@jridgewell/gen-mapping@0.3.13` | MIT | Copyright 2024 Justin Ridgewell <justin@ridgewell.name> |
| `@jridgewell/remapping@2.3.5` | MIT | Copyright 2024 Justin Ridgewell <justin@ridgewell.name> |
| `@jridgewell/resolve-uri@3.1.2` | MIT | Copyright 2019 Justin Ridgewell <jridgewell@google.com> |
| `@jridgewell/sourcemap-codec@1.6.0` | MIT | Copyright 2024 Justin Ridgewell <justin@ridgewell.name> |
| `@jridgewell/trace-mapping@0.3.31` | MIT | Copyright 2024 Justin Ridgewell <justin@ridgewell.name> |
| `@jridgewell/trace-mapping@0.3.9` | MIT | Copyright 2022 Justin Ridgewell <justin@ridgewell.name> |
| `@modelcontextprotocol/sdk@1.32.1` | MIT | Copyright (c) 2024 Anthropic, PBC |
| `@neodrag/core@3.0.0-next.11` | MIT | Copyright (c) 2021-2022 Puru Vijay |
| `@neodrag/solid@3.0.0-next.11` | MIT | Copyright (c) 2021-2022 Puru Vijay |
| `@nodelib/fs.scandir@2.1.5` | MIT | Copyright (c) Denis Malinochkin |
| `@nodelib/fs.stat@2.0.5` | MIT | Copyright (c) Denis Malinochkin |
| `@nodelib/fs.walk@1.2.8` | MIT | Copyright (c) Denis Malinochkin |
| `@oozcitak/dom@2.0.2` | MIT | Copyright (c) 2019 Ozgur Ozcitak |
| `@oozcitak/infra@2.0.2` | MIT | Copyright (c) 2019 Ozgur Ozcitak |
| `@oozcitak/url@3.0.0` | MIT | Copyright (c) 2019 Ozgur Ozcitak |
| `@oozcitak/util@10.0.0` | MIT | Copyright (c) 2019 Ozgur Ozcitak |
| `@oxc-parser/binding-win32-x64-msvc@0.120.0` | MIT | - |
| `@oxc-project/types@0.120.0` | MIT | Copyright (c) 2024-present VoidZero Inc. & Contributors |
| `@oxc-project/types@0.152.0` | MIT | Copyright (c) 2024-present VoidZero Inc. & Contributors |
| `@poppinss/colors@4.1.6` | MIT | Copyright 2021 Harminder Virk, contributors |
| `@poppinss/dumper@0.6.5` | MIT | Copyright (c) 2023 |
| `@poppinss/exception@1.2.3` | MIT | Copyright (c) 2023 |
| `@radix-ui/primitive@1.1.7` | MIT | Copyright (c) 2022 WorkOS |
| `@radix-ui/react-compose-refs@1.1.5` | MIT | Copyright (c) 2022 WorkOS |
| `@radix-ui/react-context@1.2.2` | MIT | Copyright (c) 2022 WorkOS |
| `@radix-ui/react-dialog@1.2.0` | MIT | Copyright (c) 2022 WorkOS |
| `@radix-ui/react-dismissable-layer@1.1.20` | MIT | Copyright (c) 2022 WorkOS |
| `@radix-ui/react-focus-guards@1.1.6` | MIT | Copyright (c) 2022 WorkOS |
| `@radix-ui/react-focus-scope@1.2.0` | MIT | Copyright (c) 2022 WorkOS |
| `@radix-ui/react-id@1.1.4` | MIT | Copyright (c) 2022 WorkOS |
| `@radix-ui/react-portal@1.1.18` | MIT | Copyright (c) 2022 WorkOS |
| `@radix-ui/react-presence@1.1.11` | MIT | Copyright (c) 2022 WorkOS |
| `@radix-ui/react-primitive@2.1.11` | MIT | Copyright (c) 2022 WorkOS |
| `@radix-ui/react-slot@1.4.0` | MIT | Copyright (c) 2022 WorkOS |
| `@radix-ui/react-use-callback-ref@1.1.4` | MIT | Copyright (c) 2022 WorkOS |
| `@radix-ui/react-use-controllable-state@1.2.6` | MIT | Copyright (c) 2022 WorkOS |
| `@radix-ui/react-use-effect-event@0.0.5` | MIT | Copyright (c) 2022 WorkOS |
| `@radix-ui/react-use-layout-effect@1.1.4` | MIT | Copyright (c) 2022 WorkOS |
| `@reduxjs/toolkit@2.13.0` | MIT | Copyright (c) 2018 Mark Erikson |
| `@rolldown/binding-win32-x64-msvc@1.2.12` | MIT | - |
| `@rolldown/pluginutils@1.0.1` | MIT | Copyright (c) 2026-present, rolldown/plugins repository contributors |
| `@sec-ant/readable-stream@0.4.1` | MIT | Copyright (c) 2022 Ze-Zheng Wu |
| `@shadcn/registry@0.1.2` | MIT | Copyright (c) 2023 shadcn |
| `@sinclair/typebox@0.34.52` | MIT | Copyright (c) 2017-2026 Haydn Paterson |
| `@sindresorhus/is@7.2.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `@sindresorhus/merge-streams@4.0.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `@solid-primitives/event-listener@2.4.6` | MIT | Copyright (c) 2021 Solid Primitives Working Group |
| `@solid-primitives/keyboard@1.3.7` | MIT | Copyright (c) 2021 Solid Primitives Working Group |
| `@solid-primitives/resize-observer@2.2.0` | MIT | Copyright (c) 2021 Solid Primitives Working Group |
| `@solid-primitives/rootless@1.5.4` | MIT | Copyright (c) 2021 Solid Primitives Working Group |
| `@solid-primitives/static-store@0.1.4` | MIT | Copyright (c) 2021 Solid Primitives Working Group |
| `@solid-primitives/utils@6.4.1` | MIT | Copyright (c) 2021 Solid Primitives Working Group |
| `@speed-highlight/core@1.2.24` | CC0-1.0 | exclusive Copyright and Related Rights (defined below) upon the creator |
| `@standard-schema/spec@1.1.0` | MIT | Copyright (c) 2024 Colin McDonnell |
| `@standard-schema/utils@0.3.0` | MIT | Copyright (c) 2024 Fabian Hiller |
| `@tailwindcss/node@4.3.3` | MIT | Copyright (c) Tailwind Labs, Inc. |
| `@tailwindcss/oxide@4.3.3` | MIT | Copyright (c) Tailwind Labs, Inc. |
| `@tailwindcss/oxide-win32-x64-msvc@4.3.3` | MIT | Copyright (c) Tailwind Labs, Inc. |
| `@tailwindcss/typography@0.5.20` | MIT | Copyright (c) Tailwind Labs, Inc. |
| `@tailwindcss/vite@4.3.3` | MIT | Copyright (c) Tailwind Labs, Inc. |
| `@tanstack/devtools@0.15.0` | MIT | Copyright (c) 2025 TanStack |
| `@tanstack/devtools-bundler-core@0.1.3` | MIT | Copyright (c) 2025 TanStack |
| `@tanstack/devtools-client@0.0.8` | MIT | Copyright (c) 2025 TanStack |
| `@tanstack/devtools-event-bus@0.4.3` | MIT | Copyright (c) 2025 TanStack |
| `@tanstack/devtools-event-client@0.5.0` | MIT | Copyright (c) 2025 TanStack |
| `@tanstack/devtools-ui@0.7.1` | MIT | Copyright (c) 2025 TanStack |
| `@tanstack/devtools-vite@0.8.5` | MIT | Copyright (c) 2025 TanStack |
| `@tanstack/history@1.162.4` | MIT | Copyright (c) 2021-present Tanner Linsley |
| `@tanstack/query-core@5.104.1` | MIT | Copyright (c) 2021-present Tanner Linsley |
| `@tanstack/react-devtools@0.10.13` | MIT | Copyright (c) 2025 TanStack |
| `@tanstack/react-query@5.104.1` | MIT | Copyright (c) 2021-present Tanner Linsley |
| `@tanstack/react-router@1.170.41` | MIT | Copyright (c) 2021-present Tanner Linsley |
| `@tanstack/react-router-devtools@1.167.2` | MIT | Copyright (c) 2021-present Tanner Linsley |
| `@tanstack/react-router-ssr-query@1.167.3` | MIT | Copyright (c) 2021-present Tanner Linsley |
| `@tanstack/react-start@1.168.60` | MIT | Copyright (c) 2021-present Tanner Linsley |
| `@tanstack/react-start-client@1.168.39` | MIT | Copyright (c) 2021-present Tanner Linsley |
| `@tanstack/react-start-rsc@0.1.59` | MIT | Copyright (c) 2021-present Tanner Linsley |
| `@tanstack/react-start-server@1.167.46` | MIT | Copyright (c) 2021-present Tanner Linsley |
| `@tanstack/react-store@0.11.2` | MIT | Copyright (c) 2021 Tanner Linsley |
| `@tanstack/router-core@1.171.34` | MIT | Copyright (c) 2021-present Tanner Linsley |
| `@tanstack/router-devtools-core@1.168.2` | MIT | Copyright (c) 2021-present Tanner Linsley |
| `@tanstack/router-generator@1.167.40` | MIT | Copyright (c) 2021-present Tanner Linsley |
| `@tanstack/router-plugin@1.168.42` | MIT | Copyright (c) 2021-present Tanner Linsley |
| `@tanstack/router-ssr-query-core@1.169.3` | MIT | Copyright (c) 2021-present Tanner Linsley |
| `@tanstack/router-utils@1.162.3` | MIT | Copyright (c) 2021-present Tanner Linsley |
| `@tanstack/start-client-core@1.170.34` | MIT | Copyright (c) 2021-present Tanner Linsley |
| `@tanstack/start-fn-stubs@1.162.0` | MIT | Copyright (c) 2021-present Tanner Linsley |
| `@tanstack/start-plugin-core@1.171.49` | MIT | Copyright (c) 2021-present Tanner Linsley |
| `@tanstack/start-server-core@1.169.39` | MIT | Copyright (c) 2021-present Tanner Linsley |
| `@tanstack/start-storage-context@1.167.36` | MIT | Copyright (c) 2021-present Tanner Linsley |
| `@tanstack/store@0.11.2` | MIT | Copyright (c) 2021 Tanner Linsley |
| `@tanstack/virtual-file-routes@1.162.0` | MIT | Copyright (c) 2021-present Tanner Linsley |
| `@testing-library/dom@10.4.2` | MIT | Copyright (c) 2017 Kent C. Dodds |
| `@testing-library/react@16.3.3` | MIT | Copyright (c) 2017-Present Kent C. Dodds |
| `@tokenizer/inflate@0.4.1` | MIT | Copyright (c) 2024, Borewit |
| `@tokenizer/token@0.3.0` | MIT | - |
| `@ts-morph/common@0.27.0` | MIT | Copyright (c) 2017 David Sherret |
| `@types/aria-query@5.0.4` | MIT | Copyright (c) Microsoft Corporation. |
| `@types/bun@1.4.2` | MIT | Copyright (c) Microsoft Corporation. |
| `@types/chai@5.2.3` | MIT | Copyright (c) Microsoft Corporation. |
| `@types/d3-array@3.2.2` | MIT | Copyright (c) Microsoft Corporation. |
| `@types/d3-color@3.1.3` | MIT | Copyright (c) Microsoft Corporation. |
| `@types/d3-ease@3.0.2` | MIT | Copyright (c) Microsoft Corporation. |
| `@types/d3-interpolate@3.0.4` | MIT | Copyright (c) Microsoft Corporation. |
| `@types/d3-path@3.1.1` | MIT | Copyright (c) Microsoft Corporation. |
| `@types/d3-scale@4.0.9` | MIT | Copyright (c) Microsoft Corporation. |
| `@types/d3-shape@3.2.0` | MIT | Copyright (c) Microsoft Corporation. |
| `@types/d3-time@3.0.4` | MIT | Copyright (c) Microsoft Corporation. |
| `@types/d3-timer@3.0.2` | MIT | Copyright (c) Microsoft Corporation. |
| `@types/deep-eql@4.0.2` | MIT | Copyright (c) Microsoft Corporation. |
| `@types/estree@1.0.9` | MIT | Copyright (c) Microsoft Corporation. |
| `@types/node@22.20.5` | MIT | Copyright (c) Microsoft Corporation. |
| `@types/react@19.3.0` | MIT | Copyright (c) Microsoft Corporation. |
| `@types/react-dom@19.3.0` | MIT | Copyright (c) Microsoft Corporation. |
| `@types/use-sync-external-store@0.0.6` | MIT | Copyright (c) Microsoft Corporation. |
| `@types/validate-npm-package-name@4.0.2` | MIT | Copyright (c) Microsoft Corporation. |
| `@vitejs/plugin-react@6.1.2` | MIT | Copyright (c) 2019-present, Yuxi (Evan) You and Vite contributors |
| `@vitest/expect@4.1.11` | MIT | Copyright (c) 2021-Present VoidZero Inc. and Vitest contributors |
| `@vitest/mocker@4.1.11` | MIT | Copyright (c) 2021-Present VoidZero Inc. and Vitest contributors |
| `@vitest/pretty-format@4.1.11` | MIT | Copyright (c) 2021-Present VoidZero Inc. and Vitest contributors |
| `@vitest/runner@4.1.11` | MIT | Copyright (c) 2021-Present VoidZero Inc. and Vitest contributors |
| `@vitest/snapshot@4.1.11` | MIT | Copyright (c) 2021-Present VoidZero Inc. and Vitest contributors |
| `@vitest/spy@4.1.11` | MIT | Copyright (c) 2021-Present VoidZero Inc. and Vitest contributors |
| `@vitest/utils@4.1.11` | MIT | Copyright (c) 2021-Present VoidZero Inc. and Vitest contributors |
| `accepts@2.0.0` | MIT | Copyright (c) 2014 Jonathan Ong <me@jongleberry.com> |
| `agent-base@7.1.4` | MIT | Copyright (c) 2013 Nathan Rajlich <nathan@tootallnate.net> |
| `ajv@8.20.0` | MIT | Copyright (c) 2015-2021 Evgeny Poberezkin |
| `ajv-formats@2.1.1` | MIT | Copyright (c) 2020 Evgeny Poberezkin |
| `ajv-formats@3.0.1` | MIT | Copyright (c) 2020 Evgeny Poberezkin |
| `ansi-colors@4.1.3` | MIT | Copyright (c) 2015-present, Brian Woodward. |
| `ansi-regex@5.0.1` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com) |
| `ansi-regex@6.4.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `ansi-styles@5.2.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com) |
| `ansis@4.4.0` | ISC | Copyright (c) 2026, webdiscus |
| `argparse@2.0.1` | Python-2.0 | provided, however, that PSF's License Agreement and PSF's notice of copyright, |
| `aria-hidden@1.2.6` | MIT | Copyright (c) 2017 Anton Korzunov |
| `aria-query@5.3.0` | Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `assertion-error@2.0.1` | MIT | Copyright (c) 2013 Jake Luer jake@qualiancy.com (http://qualiancy.com) |
| `ast-types@0.16.3` | MIT | Copyright (c) 2013 Ben Newman <bn@cs.stanford.edu> |
| `atomically@1.7.0` | MIT | Copyright (c) 2020-present Fabio Spampinato |
| `babel-dead-code-elimination@1.0.12` | MIT | Copyright (c) 2024 Pedro Cattori |
| `balanced-match@4.0.4` | MIT | Original code Copyright Julian Gruber <julian@juliangruber.com> |
| `baseline-browser-mapping@2.11.27` | Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `bidi-js@1.1.0` | MIT | Copyright (c) 2021 Jason Johnston |
| `blake3-wasm@2.1.5` | MIT | Copyright (c) 2019 Connor Peet |
| `body-parser@2.3.0` | MIT | Copyright (c) 2014 Jonathan Ong <me@jongleberry.com> |
| `brace-expansion@5.0.12` | MIT | Copyright Julian Gruber <julian@juliangruber.com> |
| `braces@3.0.3` | MIT | Copyright (c) 2014-present, Jon Schlinkert. |
| `browserslist@4.29.3` | MIT | Copyright 2014 Andrey Sitnik <andrey@sitnik.es> and other contributors |
| `bun-types@1.4.2` | MIT | - |
| `bundle-name@4.1.1` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `bytes@3.1.2` | MIT | Copyright (c) 2012-2014 TJ Holowaychuk <tj@vision-media.ca> |
| `call-bind-apply-helpers@1.0.2` | MIT | Copyright (c) 2024 Jordan Harband |
| `call-bound@1.0.4` | MIT | Copyright (c) 2024 Jordan Harband |
| `caniuse-lite@1.0.30001814` | CC-BY-4.0 | original works of authorship and other material subject to copyright |
| `chai@6.3.0` | MIT | Copyright (c) 2017 Chai.js Assertion Library |
| `chalk@5.6.2` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `chokidar@5.0.0` | MIT | Copyright (c) 2012 Paul Miller (https://paulmillr.com), Elan Shanker |
| `class-variance-authority@0.7.1` | Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `cli-cursor@5.0.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `cli-spinners@2.9.2` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `clsx@2.1.1` | MIT | Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com) |
| `cmdk@1.1.1` | MIT | Copyright (c) 2022 Paco Coursey |
| `cn@0.2.6` | MIT | Copyright (c) 2026 shadcn |
| `code-block-writer@13.0.3` | MIT | Copyright (c) 2015-2024 David Sherret |
| `commander@11.1.0` | MIT | Copyright (c) 2011 TJ Holowaychuk <tj@vision-media.ca> |
| `commander@14.0.3` | MIT | Copyright (c) 2011 TJ Holowaychuk <tj@vision-media.ca> |
| `conf@10.2.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `content-disposition@1.1.0` | MIT | Copyright (c) 2014-2017 Douglas Christopher Wilson |
| `content-type@1.0.5` | MIT | Copyright (c) 2015 Douglas Christopher Wilson |
| `content-type@2.1.0` | MIT | Copyright (c) 2015 Douglas Christopher Wilson |
| `convert-source-map@2.0.0` | MIT | Copyright 2013 Thorsten Lorenz. |
| `cookie@0.7.2` | MIT | Copyright (c) 2012-2014 Roman Shtylman <shtylman@gmail.com> |
| `cookie@1.1.1` | MIT | Copyright (c) 2012-2014 Roman Shtylman <shtylman@gmail.com> |
| `cookie-es@3.1.1` | MIT | Cookie-es copyright (c) Pooya Parsa <pooya@pi0.io> |
| `cookie-signature@1.2.2` | MIT | Copyright (c) 2012–2024 LearnBoost <tj@learnboost.com> and other contributors; |
| `cors@2.8.6` | MIT | Copyright (c) 2013 Troy Goode <troygoode@gmail.com> |
| `cross-spawn@7.0.6` | MIT | Copyright (c) 2018 Made With MOXY Lda <hello@moxy.studio> |
| `css-tree@3.2.1` | MIT | Copyright (C) 2016-2026 by Roman Dvornov |
| `cssesc@3.0.0` | MIT | Copyright Mathias Bynens <https://mathiasbynens.be/> |
| `cssstyle@6.2.0` | MIT | Copyright (c) Chad Walker |
| `csstype@3.2.3` | MIT | Copyright (c) 2017-2018 Fredrik Nicol |
| `d3-array@3.2.4` | ISC | Copyright 2010-2023 Mike Bostock |
| `d3-color@3.1.0` | ISC | Copyright 2010-2022 Mike Bostock |
| `d3-ease@3.0.1` | BSD-3-Clause | Copyright 2010-2021 Mike Bostock |
| `d3-format@3.1.2` | ISC | Copyright 2010-2026 Mike Bostock |
| `d3-interpolate@3.0.1` | ISC | Copyright 2010-2021 Mike Bostock |
| `d3-path@3.1.0` | ISC | Copyright 2015-2022 Mike Bostock |
| `d3-scale@4.0.2` | ISC | Copyright 2010-2021 Mike Bostock |
| `d3-shape@3.2.0` | ISC | Copyright 2010-2022 Mike Bostock |
| `d3-time@3.1.0` | ISC | Copyright 2010-2022 Mike Bostock |
| `d3-time-format@4.1.0` | ISC | Copyright 2010-2021 Mike Bostock |
| `d3-timer@3.0.1` | ISC | Copyright 2010-2021 Mike Bostock |
| `data-urls@7.0.0` | MIT | Copyright © Domenic Denicola <d@domenic.me> |
| `date-fns@4.4.0` | MIT | Copyright (c) 2021 Sasha Koss and Lesha Koss https://kossnocorp.mit-license.org |
| `dayjs@1.11.23` | MIT | Copyright (c) 2018-present, iamkun |
| `debounce-fn@4.0.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `debug@4.4.3` | MIT | Copyright (c) 2014-2017 TJ Holowaychuk <tj@vision-media.ca> |
| `decimal.js@10.6.0` | MIT | Copyright (c) 2025 Michael Mclaughlin |
| `decimal.js-light@2.5.1` | MIT | Copyright (c) 2020 Michael Mclaughlin |
| `dedent@1.7.2` | MIT | The above copyright notice and this permission notice shall be |
| `deepmerge@4.3.1` | MIT | Copyright (c) 2012 James Halliday, Josh Duff, and other contributors |
| `default-browser@5.5.1` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `default-browser-id@5.0.1` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `define-lazy-prop@2.0.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com) |
| `define-lazy-prop@3.0.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `depd@2.0.0` | MIT | Copyright (c) 2014-2018 Douglas Christopher Wilson |
| `dequal@2.0.3` | MIT | Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com) |
| `detect-libc@2.1.2` | Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `detect-node-es@1.1.0` | MIT | Copyright (c) 2017 Ilya Kantor |
| `diff@8.0.4` | BSD-3-Clause | Copyright (c) 2009-2015, Kevin Decker <kpdecker@gmail.com> |
| `dom-accessibility-api@0.5.16` | MIT | Copyright (c) 2020 Sebastian Silbermann |
| `dot-prop@6.0.1` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `dotenv@17.4.2` | BSD-2-Clause | Copyright (c) 2015, Scott Motte |
| `dunder-proto@1.0.1` | MIT | Copyright (c) 2024 ECMAScript Shims |
| `ee-first@1.1.1` | MIT | Copyright (c) 2014 Jonathan Ong me@jongleberry.com |
| `electron-to-chromium@1.5.447` | ISC | Copyright 2018 Kilian Valkhof |
| `elysia@1.4.30` | MIT | Copyright 2022 saltyAom |
| `embla-carousel@8.6.0` | MIT | - |
| `embla-carousel-react@8.6.0` | MIT | - |
| `embla-carousel-reactive-utils@8.6.0` | MIT | - |
| `emoji-regex@10.6.0` | MIT | Copyright Mathias Bynens <https://mathiasbynens.be/> |
| `encodeurl@2.0.0` | MIT | Copyright (c) 2016 Douglas Christopher Wilson |
| `enhanced-resolve@5.26.0` | MIT | Copyright JS Foundation and other contributors |
| `enquirer@2.4.1` | MIT | Copyright (c) 2016-present, Jon Schlinkert. |
| `entities@8.1.0` | BSD-2-Clause | Copyright (c) Felix Böhm |
| `env-paths@2.2.1` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com) |
| `error-stack-parser-es@1.0.5` | MIT | Copyright (c) 2023-PRESENT Anthony Fu <https://github.com/antfu> |
| `es-define-property@1.0.1` | MIT | Copyright (c) 2024 Jordan Harband |
| `es-errors@1.3.0` | MIT | Copyright (c) 2024 Jordan Harband |
| `es-module-lexer@2.3.2` | MIT | Copyright (C) 2018-2022 Guy Bedford |
| `es-object-atoms@1.1.2` | MIT | Copyright (c) 2024 Jordan Harband |
| `es-toolkit@1.52.0` | MIT | Copyright (c) 2024 Viva Republica, Inc. |
| `esbuild@0.28.1` | MIT | Copyright (c) 2020 Evan Wallace |
| `escalade@3.2.0` | MIT | Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com) |
| `escape-html@1.0.3` | MIT | Copyright (c) 2012-2013 TJ Holowaychuk |
| `esprima@4.0.1` | BSD-2-Clause | Copyright JS Foundation and other contributors, https://js.foundation |
| `estree-walker@3.0.3` | MIT | Copyright (c) 2015-20 [these people](https://github.com/Rich-Harris/estree-walker/graphs/contributors) |
| `etag@1.8.1` | MIT | Copyright (c) 2014-2016 Douglas Christopher Wilson |
| `eventemitter3@5.0.4` | MIT | Copyright (c) 2014 Arnout Kazemier |
| `eventsource@3.0.7` | MIT | Copyright (c) EventSource GitHub organisation |
| `eventsource-parser@3.1.1` | MIT | Copyright (c) 2026 Espen Hovlandsdal <espen@hovlandsdal.com> |
| `exact-mirror@0.2.7` | MIT | Copyright 2022 saltyAom |
| `execa@5.1.1` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `execa@9.6.1` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `expect-type@1.4.0` | Apache-2.0 | Copyright 2024 Misha Kaletsky |
| `express@5.2.1` | MIT | Copyright (c) 2009-2014 TJ Holowaychuk <tj@vision-media.ca> |
| `express-rate-limit@8.7.1` | MIT | Copyright 2023 Nathan Friedly, Vedant K |
| `exsolve@1.1.3` | MIT | Copyright (c) Pooya Parsa <pooya@pi0.io> |
| `fast-decode-uri-component@1.0.1` | MIT | Copyright (c) 2018 Tomas Della Vedova |
| `fast-deep-equal@3.1.3` | MIT | Copyright (c) 2017 Evgeny Poberezkin |
| `fast-glob@3.3.3` | MIT | Copyright (c) Denis Malinochkin |
| `fast-uri@3.1.8` | BSD-3-Clause | Copyright (c) 2011-2021, Gary Court until https://github.com/garycourt/uri-js/commit/a1acf730b4bba3f1097c9f52e7d9d3aba8cdcaae |
| `fastq@1.20.3` | ISC | Copyright (c) 2015-2020, Matteo Collina <matteo.collina@gmail.com> |
| `fdir@6.5.0` | MIT | Copyright 2023 Abdullah Atta |
| `fetchdts@0.1.7` | MIT | Copyright (c) 2024 Daniel Roe |
| `figures@6.1.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `file-type@22.1.1` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `fill-range@7.1.1` | MIT | Copyright (c) 2014-present, Jon Schlinkert. |
| `finalhandler@2.1.1` | MIT | Copyright (c) 2014-2022 Douglas Christopher Wilson <doug@somethingdoug.com> |
| `find-up@3.0.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com) |
| `forwarded@0.2.0` | MIT | Copyright (c) 2014-2017 Douglas Christopher Wilson |
| `fresh@2.0.0` | MIT | Copyright (c) 2012 TJ Holowaychuk <tj@vision-media.ca> |
| `fs-extra@11.4.1` | MIT | Copyright (c) 2011-2024 JP Richardson |
| `function-bind@1.1.2` | MIT | Copyright (c) 2013 Raynos. |
| `fuzzysort@3.1.0` | MIT | Copyright (c) 2018 Stephen Kamenar |
| `gensync@1.0.0-beta.2` | MIT | Copyright 2018 Logan Smyth <loganfsmyth@gmail.com> |
| `get-east-asian-width@1.7.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `get-intrinsic@1.3.0` | MIT | Copyright (c) 2020 Jordan Harband |
| `get-nonce@1.0.1` | MIT | Copyright (c) 2020 Anton Korzunov |
| `get-own-enumerable-keys@1.0.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `get-proto@1.0.1` | MIT | Copyright (c) 2025 Jordan Harband |
| `get-stream@6.0.1` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `get-stream@9.0.1` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `glob-parent@5.1.2` | ISC | Copyright (c) 2015, 2019 Elan Shanker |
| `goober@2.1.19` | MIT | Copyright (c) 2019 Cristian Bote |
| `gopd@1.2.0` | MIT | Copyright (c) 2022 Jordan Harband |
| `graceful-fs@4.2.11` | ISC | Copyright (c) 2011-2022 Isaac Z. Schlueter, Ben Noordhuis, and Contributors |
| `h3@2.0.1-rc.20` | MIT | Copyright (c) Pooya Parsa <pooya@pi0.io> |
| `has-symbols@1.1.0` | MIT | Copyright (c) 2016 Jordan Harband |
| `hasown@2.0.4` | MIT | Copyright (c) Jordan Harband and contributors |
| `hono@4.13.13` | MIT | Copyright (c) 2021 - present, Yusuke Wada and Hono contributors |
| `html-encoding-sniffer@6.0.0` | MIT | Copyright © Domenic Denicola <d@domenic.me> |
| `http-errors@2.0.1` | MIT | Copyright (c) 2014 Jonathan Ong me@jongleberry.com |
| `http-proxy-agent@7.0.2` | MIT | Copyright (c) 2013 Nathan Rajlich <nathan@tootallnate.net> |
| `https-proxy-agent@7.0.6` | MIT | Copyright (c) 2013 Nathan Rajlich <nathan@tootallnate.net> |
| `human-signals@2.1.0` | Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `human-signals@8.0.1` | Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `iconv-lite@0.7.3` | MIT | Copyright (c) 2011 Alexander Shtuchkin |
| `ieee754@1.2.1` | BSD-3-Clause | Copyright 2008 Fair Oaks Labs, Inc. |
| `ignore@5.3.2` | MIT | Copyright (c) 2013 Kael Zhang <i@kael.me>, contributors |
| `immer@10.2.0` | MIT | Copyright (c) 2017 Michel Weststrate |
| `immer@11.1.21` | MIT | Copyright (c) 2017 Michel Weststrate |
| `inherits@2.0.4` | ISC | Copyright (c) Isaac Z. Schlueter |
| `input-otp@1.5.0` | MIT | Copyright (c) 2024 Guilherme Rodz |
| `internmap@2.0.3` | ISC | Copyright 2021 Mike Bostock |
| `ip-address@10.7.3` | MIT | Copyright (C) 2011 by Beau Gunderson |
| `ipaddr.js@1.9.1` | MIT | Copyright (C) 2011-2017 whitequark <whitequark@whitequark.org> |
| `is-docker@2.2.1` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `is-docker@3.0.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `is-extglob@2.1.1` | MIT | Copyright (c) 2014-2016, Jon Schlinkert |
| `is-glob@4.0.3` | MIT | Copyright (c) 2014-2017, Jon Schlinkert. |
| `is-in-ssh@1.0.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `is-inside-container@1.0.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `is-interactive@2.0.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `is-number@7.0.0` | MIT | Copyright (c) 2014-present, Jon Schlinkert. |
| `is-obj@2.0.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com) |
| `is-obj@3.0.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `is-plain-obj@4.1.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `is-potential-custom-element-name@1.0.1` | MIT | Copyright Mathias Bynens <https://mathiasbynens.be/> |
| `is-promise@4.0.0` | MIT | Copyright (c) 2014 Forbes Lindesay |
| `is-regexp@3.1.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `is-stream@2.0.1` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `is-stream@4.0.1` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `is-unicode-supported@1.3.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `is-unicode-supported@2.1.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `is-wsl@2.2.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com) |
| `is-wsl@3.1.1` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `isbot@5.2.2` | Unlicense | In jurisdictions that recognize copyright laws, the author or authors |
| `isexe@2.0.0` | ISC | Copyright (c) Isaac Z. Schlueter and Contributors |
| `isexe@3.1.5` | BlueOak-1.0.0 | Copyright |
| `jiti@2.7.0` | MIT | Copyright (c) Pooya Parsa <pooya@pi0.io> |
| `jose@6.2.12` | MIT | Copyright (c) 2018 Filip Skokan |
| `js-tokens@4.0.0` | MIT | Copyright (c) 2014, 2015, 2016, 2017, 2018 Simon Lydell |
| `js-yaml@4.3.2` | MIT | Copyright (C) 2011-2015 by Vitaly Puzrin |
| `jsdom@28.1.0` | MIT | Copyright (c) 2010 Elijah Insua |
| `jsesc@3.1.0` | MIT | Copyright Mathias Bynens <https://mathiasbynens.be/> |
| `json-schema-traverse@1.0.0` | MIT | Copyright (c) 2017 Evgeny Poberezkin |
| `json-schema-typed@7.0.3` | BSD-2-Clause | Copyright (c) 2018 IETF Trust, Austin Wright, Henry Andrews, Geraint Luff, |
| `json-schema-typed@8.0.2` | BSD-2-Clause | Original source code is copyright (c) 2019-2025 Remy Rylan |
| `json5@2.2.3` | MIT | Copyright (c) 2012-2018 Aseem Kishore, and [others]. |
| `jsonfile@6.2.1` | MIT | Copyright (c) 2012-2015, JP Richardson <jprichardson@gmail.com> |
| `kleur@3.0.3` | MIT | Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com) |
| `kleur@4.1.5` | MIT | Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com) |
| `launch-editor@2.14.2` | MIT | Copyright (c) 2017-present, Yuxi (Evan) You |
| `lightningcss@1.32.0` | MPL-2.0 | applicable copyright doctrines of fair use, fair dealing, or other |
| `lightningcss@1.33.0` | MPL-2.0 | applicable copyright doctrines of fair use, fair dealing, or other |
| `lightningcss-win32-x64-msvc@1.32.0` | MPL-2.0 | applicable copyright doctrines of fair use, fair dealing, or other |
| `lightningcss-win32-x64-msvc@1.33.0` | MPL-2.0 | applicable copyright doctrines of fair use, fair dealing, or other |
| `locate-path@3.0.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com) |
| `log-symbols@6.0.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `lru-cache@11.5.3` | BlueOak-1.0.0 | Copyright |
| `lru-cache@5.1.1` | ISC | Copyright (c) Isaac Z. Schlueter and Contributors |
| `lz-string@1.5.0` | MIT | Copyright (c) 2013 pieroxy |
| `magic-string@0.30.21` | MIT | Copyright 2018 Rich Harris |
| `math-intrinsics@1.1.0` | MIT | Copyright (c) 2024 ECMAScript Shims |
| `mdn-data@2.27.1` | CC0-1.0 | exclusive Copyright and Related Rights (defined below) upon the creator and |
| `media-typer@1.1.1` | MIT | Copyright (c) 2014-2017 Douglas Christopher Wilson |
| `memoirist@0.4.0` | MIT | Copyright 2023 saltyAom |
| `merge-descriptors@2.0.0` | MIT | Copyright (c) Jonathan Ong <me@jongleberry.com> |
| `merge-stream@2.0.0` | MIT | Copyright (c) Stephen Sugden <me@stephensugden.com> (stephensugden.com) |
| `merge2@1.4.1` | MIT | Copyright (c) 2014-2020 Teambition |
| `micromatch@4.0.8` | MIT | Copyright (c) 2014-present, Jon Schlinkert. |
| `mime-db@1.54.0` | MIT | Copyright (c) 2014 Jonathan Ong <me@jongleberry.com> |
| `mime-types@3.0.2` | MIT | Copyright (c) 2014 Jonathan Ong <me@jongleberry.com> |
| `mimic-fn@2.1.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com) |
| `mimic-fn@3.1.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com) |
| `mimic-function@5.0.1` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `miniflare@5.20261006.0-alpha` | MIT | - |
| `minimatch@10.2.6` | BlueOak-1.0.0 | Copyright |
| `minimist@1.2.8` | MIT | The above copyright notice and this permission notice shall be included in all |
| `ms@2.1.3` | MIT | Copyright (c) 2020 Vercel, Inc. |
| `nanoid@3.3.20` | MIT | Copyright 2017 Andrey Sitnik <andrey@sitnik.ru> |
| `negotiator@1.1.0` | MIT | Copyright (c) 2012-2014 Federico Romero |
| `next-themes@0.4.6` | MIT | Copyright (c) 2022 Paco Coursey |
| `node-releases@2.0.57` | MIT | Copyright (c) 2017 Sergey Rubanov (https://github.com/chicoxyzzy) |
| `npm-run-path@4.0.1` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com) |
| `npm-run-path@6.0.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `object-assign@4.1.1` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com) |
| `object-inspect@1.13.4` | MIT | Copyright (c) 2013 James Halliday |
| `object-treeify@1.1.33` | MIT | Copyright (c) 2019 Lukas Siemon |
| `obug@2.2.1` | MIT | Copyright © 2025-PRESENT Kevin Deng (https://github.com/sxzz) |
| `on-finished@2.4.1` | MIT | Copyright (c) 2013 Jonathan Ong <me@jongleberry.com> |
| `once@1.4.0` | ISC | Copyright (c) Isaac Z. Schlueter and Contributors |
| `onetime@5.1.2` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `onetime@7.0.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `open@11.0.4` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `open@8.4.2` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `openapi-types@12.1.3` | MIT | Copyright (c) 2018 Kogo Softare LLC |
| `ora@8.2.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `oxc-parser@0.120.0` | MIT | Copyright (c) 2024-present VoidZero Inc. & Contributors |
| `p-limit@2.3.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com) |
| `p-locate@3.0.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com) |
| `p-try@2.2.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com) |
| `parse-ms@4.0.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `parse5@8.0.1` | MIT | Copyright (c) 2013-2019 Ivan Nikulin (ifaaan@gmail.com, https://github.com/inikulin) |
| `parseurl@1.3.3` | MIT | Copyright (c) 2014 Jonathan Ong <me@jongleberry.com> |
| `path-browserify@1.0.1` | MIT | Copyright (c) 2013 James Halliday |
| `path-exists@3.0.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com) |
| `path-key@3.1.1` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com) |
| `path-key@4.0.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `path-to-regexp@6.3.0` | MIT | Copyright (c) 2014 Blake Embrey (hello@blakeembrey.com) |
| `path-to-regexp@8.4.2` | MIT | Copyright (c) 2014 Blake Embrey (hello@blakeembrey.com) |
| `pathe@2.0.3` | MIT | Copyright (c) Pooya Parsa <pooya@pi0.io> - Daniel Roe <daniel@roe.dev> |
| `picocolors@1.1.1` | ISC | Copyright (c) 2021-2024 Oleksii Raspopov, Kostiantyn Denysov, Anton Verinov |
| `picomatch@2.3.2` | MIT | Copyright (c) 2017-present, Jon Schlinkert. |
| `picomatch@4.0.7` | MIT | Copyright (c) 2017-present, Jon Schlinkert. |
| `pkce-challenge@5.0.1` | MIT | Copyright (c) 2019 |
| `pkg-up@3.1.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com) |
| `postcss@8.5.29` | MIT | Copyright 2013 Andrey Sitnik <andrey@sitnik.es> |
| `postcss-selector-parser@6.0.10` | MIT | Copyright (c) Ben Briggs <beneb.info@gmail.com> (http://beneb.info) |
| `postcss-selector-parser@7.1.6` | MIT | Copyright (c) Ben Briggs <beneb.info@gmail.com> (http://beneb.info) |
| `powershell-utils@0.2.1` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `prettier@3.9.9` | MIT | Copyright © James Long and contributors |
| `pretty-format@27.5.1` | MIT | Copyright (c) Facebook, Inc. and its affiliates. |
| `pretty-ms@9.3.1` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `prompts@2.4.2` | MIT | Copyright (c) 2018 Terkel Gjervig Nielsen |
| `proxy-addr@2.0.8` | MIT | Copyright (c) 2014-2016 Douglas Christopher Wilson |
| `punycode@2.3.1` | MIT | Copyright Mathias Bynens <https://mathiasbynens.be/> |
| `qs@6.16.0` | BSD-3-Clause | Copyright (c) 2014, Nathan LaFreniere and other [contributors](https://github.com/ljharb/qs/graphs/contributors) |
| `queue-microtask@1.2.3` | MIT | Copyright (c) Feross Aboukhadijeh |
| `range-parser@1.3.0` | MIT | Copyright (c) 2012-2014 TJ Holowaychuk <tj@vision-media.ca> |
| `raw-body@3.0.2` | MIT | Copyright (c) 2013-2014 Jonathan Ong <me@jongleberry.com> |
| `react@19.3.0` | MIT | Copyright (c) Meta Platforms, Inc. and affiliates. |
| `react-day-picker@10.0.2` | MIT | Copyright (c) 2014-2026 Giampaolo Bellavite <io@gpbl.dev> and contributors |
| `react-dom@19.3.0` | MIT | Copyright (c) Meta Platforms, Inc. and affiliates. |
| `react-is@17.0.2` | MIT | Copyright (c) Facebook, Inc. and its affiliates. |
| `react-redux@9.3.0` | MIT | Copyright (c) 2015-present Dan Abramov |
| `react-remove-scroll@2.7.2` | MIT | Copyright (c) 2017 Anton Korzunov |
| `react-remove-scroll-bar@2.3.8` | MIT | - |
| `react-resizable-panels@4.14.2` | MIT | Copyright (c) 2018 Brian Vaughn |
| `react-style-singleton@2.2.3` | MIT | Copyright (c) 2017 Anton Korzunov |
| `readdirp@5.1.1` | MIT | Copyright (c) 2012-2019 Thorsten Lorenz, Paul Miller (https://paulmillr.com) |
| `recast@0.23.21` | MIT | Copyright (c) 2012 Ben Newman <bn@cs.stanford.edu> |
| `recharts@3.8.0` | MIT | Copyright (c) 2015-present recharts |
| `redux@5.0.1` | MIT | Copyright (c) 2015-present Dan Abramov |
| `redux-thunk@3.1.0` | MIT | Copyright (c) 2015-present Dan Abramov |
| `require-from-string@2.0.2` | MIT | Copyright (c) Vsevolod Strukchinsky <floatdrop@gmail.com> (github.com/floatdrop) |
| `reselect@5.1.1` | MIT | Copyright (c) 2015-2018 Reselect Contributors |
| `reselect@5.3.0` | MIT | Copyright (c) 2015-2018 Reselect Contributors |
| `restore-cursor@5.1.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `reusify@1.1.0` | MIT | Copyright (c) 2015-2024 Matteo Collina |
| `rolldown@1.2.12` | MIT | Copyright (c) 2024-present VoidZero Inc. & Contributors |
| `rou3@0.8.1` | MIT | Copyright (c) Pooya Parsa <pooya@pi0.io> |
| `router@2.2.0` | MIT | Copyright (c) 2013 Roman Shtylman |
| `run-applescript@7.1.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `run-parallel@1.2.0` | MIT | Copyright (c) Feross Aboukhadijeh |
| `safer-buffer@2.1.2` | MIT | Copyright (c) 2018 Nikita Skovoroda <chalkerx@gmail.com> |
| `saxes@6.0.0` | ISC | - |
| `scheduler@0.28.0` | MIT | Copyright (c) Meta Platforms, Inc. and affiliates. |
| `semver@6.3.1` | ISC | Copyright (c) Isaac Z. Schlueter and Contributors |
| `semver@7.8.5` | ISC | Copyright (c) Isaac Z. Schlueter and Contributors |
| `send@1.2.1` | MIT | Copyright (c) 2012 TJ Holowaychuk |
| `seroval@1.6.8` | MIT | MIT License Copyright (c) 2025 Alexis Munsayac <alexis.munsayac@gmail.com> |
| `seroval-plugins@1.6.8` | MIT | MIT License Copyright (c) 2025 Alexis Munsayac <alexis.munsayac@gmail.com> |
| `serve-static@2.2.1` | MIT | Copyright (c) 2010 Sencha Inc. |
| `setprototypeof@1.2.0` | ISC | Copyright (c) 2015, Wes Todd |
| `shadcn@4.21.3` | MIT | Copyright (c) 2023 shadcn |
| `sharp@0.35.4` | Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by the copyright |
| `shebang-command@2.0.0` | MIT | Copyright (c) Kevin Mårtensson <kevinmartensson@gmail.com> (github.com/kevva) |
| `shebang-regex@3.0.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com) |
| `shell-quote@1.12.0` | MIT | Copyright (c) 2013 James Halliday (mail@substack.net) |
| `side-channel@1.1.1` | MIT | Copyright (c) 2019 Jordan Harband |
| `side-channel-list@1.0.1` | MIT | Copyright (c) 2024 Jordan Harband |
| `side-channel-map@1.0.1` | MIT | Copyright (c) 2024 Jordan Harband |
| `side-channel-weakmap@1.0.2` | MIT | Copyright (c) 2019 Jordan Harband |
| `siginfo@2.0.0` | ISC | Copyright (c) 2017, Emil Bay <github@tixz.dk> |
| `signal-exit@3.0.7` | ISC | Copyright (c) 2015, Contributors |
| `signal-exit@4.1.0` | ISC | Copyright (c) 2015-2023 Benjamin Coe, Isaac Z. Schlueter, and Contributors |
| `sisteransi@1.0.5` | MIT | Copyright (c) 2018 Terkel Gjervig Nielsen |
| `smart-buffer@4.2.0` | MIT | Copyright (c) 2013-2017 Josh Glazebrook |
| `socks@2.8.10` | MIT | Copyright (c) 2013 Josh Glazebrook |
| `solid-js@1.9.16` | MIT | Copyright (c) 2016-2025 Ryan Carniato |
| `sonner@2.0.8` | MIT | Copyright (c) 2023 Emil Kowalski |
| `source-map@0.6.1` | BSD-3-Clause | Copyright (c) 2009-2011, Mozilla Foundation and contributors |
| `source-map@0.7.6` | BSD-3-Clause | Copyright (c) 2009-2011, Mozilla Foundation and contributors |
| `source-map-js@1.2.2` | BSD-3-Clause | Copyright (c) 2009-2011, Mozilla Foundation and contributors |
| `srvx@0.11.22` | MIT | Copyright (c) Pooya Parsa <pooya@pi0.io> |
| `stackback@0.0.2` | MIT | - |
| `statuses@2.0.2` | MIT | Copyright (c) 2014 Jonathan Ong <me@jongleberry.com> |
| `std-env@4.3.0` | MIT | Copyright (c) Pooya Parsa <pooya@pi0.io> |
| `stdin-discarder@0.2.2` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `string-width@7.2.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `stringify-object@5.0.0` | BSD-2-Clause | Copyright (c) 2015, Yeoman team |
| `strip-ansi@6.0.1` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com) |
| `strip-ansi@7.2.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `strip-bom@3.0.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com) |
| `strip-final-newline@2.0.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com) |
| `strip-final-newline@4.0.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `strtok3@10.3.5` | MIT | Copyright © 2026 Borewit |
| `supports-color@10.2.2` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `symbol-tree@3.2.4` | MIT | Copyright (c) 2015 Joris van der Wel |
| `systeminformation@5.33.15` | MIT | Copyright (c) 2014-2026 Sebastian Hildebrandt |
| `tailwind-merge@3.7.0` | MIT | Copyright (c) 2021 Dany Castillo |
| `tailwindcss@4.3.3` | MIT | Copyright (c) Tailwind Labs, Inc. |
| `tapable@2.3.3` | MIT | Copyright JS Foundation and other contributors |
| `tiny-invariant@1.3.3` | MIT | Copyright (c) 2019 Alexander Reardon |
| `tinybench@2.9.0` | MIT | Copyright (c) 2022 Tinylibs |
| `tinyexec@1.3.1` | MIT | Copyright (c) 2024 Tinylibs |
| `tinyglobby@0.2.17` | MIT | Copyright (c) 2024 Madeline Gurriarán |
| `tinyrainbow@3.2.0` | MIT | Copyright (c) 2022 Tinylibs |
| `tldts@7.4.16` | MIT | Copyright (c) 2017 Thomas Parisot, 2018 Rémi Berson |
| `tldts-core@7.4.16` | MIT | Copyright (c) 2017 Thomas Parisot, 2018 Rémi Berson |
| `to-regex-range@5.0.1` | MIT | Copyright (c) 2015-present, Jon Schlinkert. |
| `toidentifier@1.0.1` | MIT | Copyright (c) 2016 Douglas Christopher Wilson <doug@somethingdoug.com> |
| `token-types@6.1.2` | MIT | Copyright © 2026 Borewit |
| `tough-cookie@6.0.2` | BSD-3-Clause | Copyright (c) 2015, Salesforce.com, Inc. |
| `tr46@6.0.0` | MIT | Copyright (c) Sebastian Mayr |
| `ts-morph@26.0.0` | MIT | Copyright (c) 2017 David Sherret |
| `tsconfig-paths@4.2.0` | MIT | Copyright (c) 2016 Jonas Kello |
| `tslib@2.8.1` | 0BSD | Copyright (c) Microsoft Corporation. |
| `tw-animate-css@1.4.0` | MIT | Copyright (c) 2025 Wombosvideo |
| `type-fest@4.41.0` | (MIT OR CC0-1.0) | exclusive Copyright and Related Rights (defined below) upon the creator |
| `type-is@2.1.0` | MIT | Copyright (c) 2014 Jonathan Ong <me@jongleberry.com> |
| `typescript@6.0.3` | Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License. |
| `ufo@1.6.4` | MIT | Copyright (c) Pooya Parsa <pooya@pi0.io> |
| `uint8array-extras@1.6.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `undici@7.29.1` | MIT | Copyright (c) Matteo Collina and Undici contributors |
| `undici@7.30.0` | MIT | Copyright (c) Matteo Collina and Undici contributors |
| `undici-types@6.21.0` | MIT | Copyright (c) Matteo Collina and Undici contributors |
| `unenv@2.0.0-rc.24` | MIT | Copyright (c) Pooya Parsa <pooya@pi0.io> |
| `unicorn-magic@0.3.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `universalify@2.0.1` | MIT | Copyright (c) 2017, Ryan Zimmerman <opensrc@ryanzim.com> |
| `unpipe@1.0.0` | MIT | Copyright (c) 2015 Douglas Christopher Wilson <doug@somethingdoug.com> |
| `unplugin@3.4.0` | MIT | Copyright (c) 2021-PRESENT Nuxt Contrib |
| `update-browserslist-db@1.3.3` | MIT | Copyright 2022 Andrey Sitnik <andrey@sitnik.es> and other contributors |
| `use-callback-ref@1.3.3` | MIT | Copyright (c) 2017 Anton Korzunov |
| `use-sidecar@1.1.3` | MIT | Copyright (c) 2017 Anton Korzunov |
| `use-sync-external-store@1.7.0` | MIT | Copyright (c) Meta Platforms, Inc. and affiliates. |
| `util-deprecate@1.0.2` | MIT | Copyright (c) 2014 Nathan Rajlich <nathan@tootallnate.net> |
| `validate-npm-package-name@7.0.2` | ISC | Copyright (c) 2015, npm, Inc |
| `vary@1.1.2` | MIT | Copyright (c) 2014-2017 Douglas Christopher Wilson |
| `vaul@1.1.2` | MIT | Copyright (c) 2023 Emil Kowalski |
| `victory-vendor@37.3.6` | MIT AND ISC | - |
| `vite@8.3.3` | MIT | Copyright (c) 2019-present, VoidZero Inc. and Vite contributors |
| `vitefu@1.1.3` | MIT | Copyright (c) 2026 Bjorn and Dominik |
| `vitest@4.1.11` | MIT | Copyright (c) 2021-Present VoidZero Inc. and Vitest contributors |
| `w3c-xmlserializer@5.0.0` | MIT | Copyright © Sebastian Mayr |
| `webidl-conversions@8.0.1` | BSD-2-Clause | Copyright (c) 2014, Domenic Denicola |
| `webpack-virtual-modules@0.6.2` | MIT | Copyright (c) 2017 SysGears |
| `whatwg-mimetype@5.0.0` | MIT | Copyright © Domenic Denicola <d@domenic.me> |
| `whatwg-url@16.0.1` | MIT | Copyright (c) Sebastian Mayr |
| `which@2.0.2` | ISC | Copyright (c) Isaac Z. Schlueter and Contributors |
| `which@4.0.0` | ISC | Copyright (c) Isaac Z. Schlueter and Contributors |
| `why-is-node-running@2.3.0` | MIT | Copyright (c) 2016 Mathias Buus |
| `workerd@1.20261006.1` | Apache-2.0 | - |
| `wrangler@4.148.0` | MIT OR Apache-2.0 | - |
| `wrappy@1.0.2` | ISC | Copyright (c) Isaac Z. Schlueter and Contributors |
| `ws@8.21.0` | MIT | Copyright (c) 2011 Einar Otto Stangvik <einaros@gmail.com> |
| `wsl-utils@1.0.1` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `xml-name-validator@5.0.0` | Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `xmlbuilder2@4.0.3` | MIT | Copyright (c) 2019 Ozgur Ozcitak |
| `xmlchars@2.2.0` | MIT | Copyright Louis-Dominique Dubeau and contributors to xmlchars |
| `yallist@3.1.1` | ISC | Copyright (c) Isaac Z. Schlueter and Contributors |
| `yocto-spinner@1.2.2` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `yoctocolors@2.2.0` | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| `youch@4.1.0-beta.10` | MIT | Copyright (c) 2023 |
| `youch-core@0.3.3` | MIT | Copyright (c) 2024 |
| `zod@3.25.76` | MIT | Copyright (c) 2025 Colin McDonnell |
| `zod@4.6.5` | MIT | Copyright (c) 2025 Colin McDonnell |
| `zod-to-json-schema@3.25.2` | ISC | Copyright (c) 2020, Stefan Terdell |

## Rust

| Package | Licence | Copyright notice |
| --- | --- | --- |
| `adler2@2.0.1` | 0BSD OR MIT OR Apache-2.0 | Copyright (C) Jonas Schievink <jonasschievink@gmail.com> |
| `aes@0.8.4` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `ahash@0.8.12` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `aho-corasick@1.1.4` | Unlicense OR MIT | Copyright (c) 2015 Andrew Gallant |
| `aligned@0.4.3` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `aligned-vec@0.6.4` | MIT | Copyright (c) 2022 sarah |
| `anyhow@1.0.104` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `ar_archive_writer@0.5.2` | Apache-2.0 WITH LLVM-exception | "Licensor" shall mean the copyright owner or entity authorized by |
| `arbitrary@1.4.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `arg_enum_proc_macro@0.3.4` | MIT | Copyright (c) 2018 Luca Barbato |
| `arrayref@0.3.9` | BSD-2-Clause | Copyright (c) 2015 David Roundy <roundyd@physics.oregonstate.edu> |
| `arrayvec@0.7.8` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `as-raw-xcb-connection@1.0.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `as-slice@0.2.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `ash@0.38.0+1.3.281` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License. |
| `ash-window@0.13.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License. |
| `ashpd@0.11.1` | MIT | Copyright (c) 2020 Bilal Elmoussaoui |
| `ashpd@0.12.3` | MIT | Copyright (c) 2020 Bilal Elmoussaoui |
| `async_zip@0.0.17` | MIT | Copyright (c) 2021 Harry |
| `async-broadcast@0.7.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `async-channel@1.9.0` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `async-channel@2.5.0` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `async-compression@0.4.42` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `async-executor@1.14.0` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `async-fs@2.2.0` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `async-global-executor@2.4.1` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `async-io@2.6.0` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `async-lock@3.4.2` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `async-net@2.0.0` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `async-process@2.5.0` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `async-recursion@1.1.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `async-signal@0.2.14` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `async-std@1.13.2` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `async-task@4.7.1` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `async-trait@0.1.91` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `atomic@0.5.3` | Apache-2.0/MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `atomic-waker@1.1.2` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `autocfg@1.5.1` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `av-scenechange@0.14.1` | MIT | Copyright (c) 2019 Multimedia and Rust |
| `av1-grain@0.2.5` | BSD-2-Clause | Copyright (c) 2022-2022, the rav1e contributors |
| `avif-serialize@0.8.9` | BSD-3-Clause | Copyright (c) 2020, Cloudflare, Inc. |
| `base64@0.22.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `bindgen@0.71.1` | BSD-3-Clause | Copyright (c) 2013, Jyun-Yan You |
| `bit_field@0.10.3` | Apache-2.0/MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `bit-set@0.8.0` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `bit-vec@0.8.0` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `bitflags@1.3.2` | MIT/Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `bitflags@2.13.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `bitstream-io@4.10.0` | MIT/Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `blade-graphics@0.7.1` | MIT | - |
| `blade-macros@0.3.0` | MIT | - |
| `blade-util@0.3.0` | MIT | - |
| `block@0.1.6` | MIT | - |
| `block-buffer@0.10.4` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `block-buffer@0.12.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `block-padding@0.3.3` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `block2@0.6.2` | MIT | - |
| `blocking@1.6.2` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `bstr@1.13.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `built@0.8.1` | MIT | Copyright (c) 2017-2023 Lukas Lueg |
| `bumpalo@3.20.3` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `bytemuck@1.25.2` | Zlib OR Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License. |
| `bytemuck_derive@1.11.0` | Zlib OR Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License. |
| `byteorder@1.5.0` | Unlicense OR MIT | Copyright (c) 2015 Andrew Gallant |
| `byteorder-lite@0.1.0` | Unlicense OR MIT | Copyright (c) 2015 Andrew Gallant |
| `bytes@1.12.1` | MIT | Copyright (c) 2018 Carl Lerche |
| `calloop@0.13.0` | MIT | Copyright (c) 2018 Victor Berger |
| `calloop-wayland-source@0.3.0` | MIT | Copyright (c) 2023 Kirill Chibisov |
| `cbc@0.1.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `cbindgen@0.28.0` | MPL-2.0 | applicable copyright doctrines of fair use, fair dealing, or other |
| `cc@1.3.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `cexpr@0.6.0` | Apache-2.0/MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `cfg_aliases@0.2.2` | MIT | Copyright (c) 2020 Katharos Technology |
| `cfg-if@1.0.4` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `cgl@0.3.2` | MIT / Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `chacha20@0.10.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `cipher@0.4.4` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `clang-sys@1.8.1` | Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `cocoa@0.25.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `cocoa@0.26.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `cocoa-foundation@0.1.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `cocoa-foundation@0.2.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `codespan-reporting@0.12.0` | Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `color_quant@1.1.0` | MIT | Copyright (c) 2016 PistonDevelopers |
| `command-fds@0.3.3` | Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `compression-codecs@0.4.38` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `compression-core@0.4.32` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `concurrent-queue@2.5.0` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `const-oid@0.10.2` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `const-random@0.1.18` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `const-random-macro@0.1.16` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `convert_case@0.4.0` | MIT | - |
| `core_maths@0.1.1` | MIT | Copyright (c) 2024 Robert Bastian |
| `core-foundation@0.10.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `core-foundation@0.9.4` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `core-foundation-sys@0.8.7` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `core-graphics@0.23.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `core-graphics@0.24.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `core-graphics-helmer-fork@0.24.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `core-graphics-types@0.1.3` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `core-graphics-types@0.2.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `core-graphics2@0.4.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `core-text@21.0.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `core-video@0.4.3` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `cosmic-text@0.14.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `cpufeatures@0.2.17` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `cpufeatures@0.3.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `crc32fast@1.5.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `crossbeam-deque@0.8.7` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `crossbeam-epoch@0.9.20` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `crossbeam-queue@0.3.13` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `crossbeam-utils@0.8.22` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `crunchy@0.2.4` | MIT | Copyright 2017-2023 Eira Fransham. |
| `crypto-common@0.1.7` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `crypto-common@0.2.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `ctor@0.4.3` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `ctor-proc-macro@0.0.6` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `data-url@0.3.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `deflate64@0.1.12` | MIT | Copyright (c) .NET Foundation and Contributors |
| `derive_more@0.99.20` | MIT | Copyright (c) 2016 Jelte Fennema |
| `digest@0.10.7` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `digest@0.11.3` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `dirs@4.0.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `dirs@5.0.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `dirs-sys@0.3.7` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `dirs-sys@0.4.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `dispatch@0.2.0` | MIT | - |
| `dispatch2@0.3.1` | Zlib OR Apache-2.0 OR MIT | - |
| `displaydoc@0.2.6` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `dlib@0.5.3` | MIT | Copyright (c) 2015 Victor Berger |
| `downcast-rs@1.2.1` | MIT/Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `dtor@0.0.6` | Apache-2.0 OR MIT | - |
| `dtor-proc-macro@0.0.5` | Apache-2.0 OR MIT | - |
| `dunce@1.0.5` | CC0-1.0 OR MIT-0 OR Apache-2.0 | exclusive Copyright and Related Rights (defined below) upon the creator |
| `dwrote@0.11.5` | MPL-2.0 | - |
| `dyn-clone@1.0.20` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `either@1.16.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `embed-resource@3.0.11` | MIT | Copyright (c) 2017 nabijaczleweli |
| `encoding_rs@0.8.35` | (Apache-2.0 OR MIT) AND BSD-3-Clause | "Licensor" shall mean the copyright owner or entity authorized by |
| `endi@1.1.1` | MIT | The above copyright notice and this permission notice |
| `enumflags2@0.7.12` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License. |
| `enumflags2_derive@0.7.12` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License. |
| `equator@0.4.2` | MIT | Copyright (c) 2023 sarah |
| `equator-macro@0.4.2` | MIT | Copyright (c) 2023 sarah |
| `equivalent@1.0.2` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `erased-serde@0.4.10` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `errno@0.3.14` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `etagere@0.2.15` | MIT/Apache-2.0 | Copyright 2020 Nicolas Silva |
| `euclid@0.22.14` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `event-listener@2.5.3` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `event-listener@5.4.1` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `event-listener-strategy@0.5.4` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `exr@1.74.2` | BSD-3-Clause | Copyright (c) Contributors to the OpenEXR Project. All rights reserved. |
| `fastrand@1.9.0` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `fastrand@2.5.0` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `fax@0.2.7` | MIT | Copyright © 2021 The pdf-rs contributers. |
| `fdeflate@0.3.7` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `filedescriptor@0.8.3` | MIT | Copyright (c) 2018 Wez Furlong |
| `filetime@0.2.29` | MIT/Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `find-msvc-tools@0.1.9` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `flate2@1.1.9` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `float_next_after@1.0.0` | MIT | Copyright (c) 2020 Scripta Qumranica Electronica |
| `float-cmp@0.9.0` | MIT | Copyright (c) 2014-2020 Optimal Computing (NZ) Ltd |
| `float-ord@0.3.2` | MIT / Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `flume@0.11.1` | Apache-2.0/MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `fnv@1.0.7` | Apache-2.0 / MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `foldhash@0.1.5` | Zlib | Copyright (c) 2024 Orson Peters |
| `font-types@0.12.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License. |
| `fontconfig-parser@0.5.8` | MIT | Copyright (c) 2021 Riey |
| `fontdb@0.16.2` | MIT | Copyright (c) 2020 Yevhenii Reizner |
| `fontdb@0.23.0` | MIT | Copyright (c) 2020 Yevhenii Reizner |
| `foreign-types@0.5.0` | MIT/Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `foreign-types-macros@0.2.3` | MIT/Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `foreign-types-shared@0.3.1` | MIT/Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `form_urlencoded@1.2.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `freetype-sys@0.20.1` | MIT | Copyright (c) 2014 PistonDevelopers |
| `futf@0.1.5` | MIT / Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `futures@0.3.33` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `futures-channel@0.3.33` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `futures-core@0.3.33` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `futures-executor@0.3.33` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `futures-io@0.3.33` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `futures-lite@1.13.0` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `futures-lite@2.6.1` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `futures-macro@0.3.33` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `futures-sink@0.3.33` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `futures-task@0.3.33` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `futures-util@0.3.33` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `generic-array@0.14.7` | MIT | Copyright (c) 2015 Bartłomiej Kamiński |
| `gethostname@1.1.0` | Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `getrandom@0.2.17` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `getrandom@0.3.4` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `getrandom@0.4.3` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `gif@0.14.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `glob@0.3.4` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `globset@0.4.19` | Unlicense OR MIT | Copyright (c) 2015 Andrew Gallant |
| `gloo-timers@0.3.0` | MIT OR Apache-2.0 | - |
| `glow@0.16.0` | MIT OR Apache-2.0 OR Zlib | "Licensor" shall mean the copyright owner or entity authorized by |
| `gpu-alloc@0.6.2` | MIT OR Apache-2.0 | - |
| `gpu-alloc-ash@0.7.1` | MIT OR Apache-2.0 | - |
| `gpu-alloc-types@0.3.1` | MIT OR Apache-2.0 | - |
| `gpui@0.2.2` | Apache-2.0 | Copyright 2022 - 2025 Zed Industries, Inc. |
| `gpui_collections@0.2.2` | Apache-2.0 | Copyright 2022 - 2025 Zed Industries, Inc. |
| `gpui_derive_refineable@0.2.2` | Apache-2.0 | Copyright 2022 - 2025 Zed Industries, Inc. |
| `gpui_http_client@0.2.2` | Apache-2.0 | Copyright 2022 - 2025 Zed Industries, Inc. |
| `gpui_media@0.2.2` | Apache-2.0 | Copyright 2022 - 2025 Zed Industries, Inc. |
| `gpui_perf@0.2.2` | Apache-2.0 | Copyright 2022 - 2025 Zed Industries, Inc. |
| `gpui_refineable@0.2.2` | Apache-2.0 | Copyright 2022 - 2025 Zed Industries, Inc. |
| `gpui_semantic_version@0.2.2` | Apache-2.0 | Copyright 2022 - 2025 Zed Industries, Inc. |
| `gpui_sum_tree@0.2.2` | Apache-2.0 | Copyright 2022 - 2025 Zed Industries, Inc. |
| `gpui_util@0.2.2` | Apache-2.0 | Copyright 2022 - 2025 Zed Industries, Inc. |
| `gpui_util_macros@0.2.2` | Apache-2.0 | Copyright 2022 - 2025 Zed Industries, Inc. |
| `gpui-macros@0.2.2` | Apache-2.0 | Copyright 2022 - 2025 Zed Industries, Inc. |
| `grid@0.18.0` | MIT | Copyright (c) 2020 Armin Becher |
| `h2@0.4.15` | MIT | Copyright (c) 2017 h2 authors |
| `half@2.7.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `hashbrown@0.14.5` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `hashbrown@0.15.5` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `hashbrown@0.17.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `heck@0.4.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `heck@0.5.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `hermit-abi@0.5.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `hex@0.4.3` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `hexf-parse@0.2.1` | CC0-1.0 | - |
| `hidden-trait@0.1.2` | MIT | Copyright (c) 2022 Dzmitry Malyshau |
| `hkdf@0.12.4` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `hmac@0.12.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `home@0.5.12` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `http@1.4.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `http-body@1.1.0` | MIT | Copyright (c) 2019-2026 Sean McArthur & Hyper Contributors |
| `http-body-util@0.1.4` | MIT | Copyright (c) 2019-2026 Sean McArthur & Hyper Contributors |
| `httparse@1.10.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `hybrid-array@0.4.13` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `hyper@1.11.0` | MIT | Copyright (c) 2014-2026 Sean McArthur |
| `hyper-rustls@0.27.9` | Apache-2.0 OR ISC OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `hyper-util@0.1.20` | MIT | Copyright (c) 2023-2025 Sean McArthur |
| `icu_collections@2.2.0` | Unicode-3.0 | COPYRIGHT AND PERMISSION NOTICE |
| `icu_locale_core@2.2.0` | Unicode-3.0 | COPYRIGHT AND PERMISSION NOTICE |
| `icu_normalizer@2.2.0` | Unicode-3.0 | COPYRIGHT AND PERMISSION NOTICE |
| `icu_normalizer_data@2.2.0` | Unicode-3.0 | COPYRIGHT AND PERMISSION NOTICE |
| `icu_properties@2.2.0` | Unicode-3.0 | COPYRIGHT AND PERMISSION NOTICE |
| `icu_properties_data@2.2.0` | Unicode-3.0 | COPYRIGHT AND PERMISSION NOTICE |
| `icu_provider@2.2.0` | Unicode-3.0 | COPYRIGHT AND PERMISSION NOTICE |
| `idna@1.1.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `idna_adapter@1.2.2` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `image@0.25.10` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `image-webp@0.2.4` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `imagesize@0.13.0` | MIT | Copyright (c) 2017 Maiddog |
| `imgref@1.12.2` | CC0-1.0 OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `indexmap@2.14.0` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `inout@0.1.4` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `instant@0.1.13` | BSD-3-Clause | Copyright (c) 2019, Sébastien Crozet |
| `interpolate_name@0.2.4` | MIT | Copyright (c) 2018 Luca Barbato |
| `inventory@0.3.24` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `io-surface@0.16.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `ipnet@2.12.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `is-docker@0.2.0` | MIT | Copyright (c) 2023 Sean Larkin |
| `is-wsl@0.4.0` | MIT | Copyright (c) 2023 Sean Larkin |
| `itertools@0.13.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `itertools@0.14.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `itoa@1.0.18` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `jobserver@0.1.35` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `js-sys@0.3.103` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `khronos-egl@6.0.0` | MIT/Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `kurbo@0.11.3` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `kv-log-macro@1.0.7` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `lazy_static@1.5.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `leak@0.1.2` | Apache-2.0 OR MIT | - |
| `leaky-cow@0.1.1` | MIT / Apache-2.0 | - |
| `lebe@0.5.3` | BSD-3-Clause | Copyright (c) 2022 Contributors to the lebe Project. All rights reserved. |
| `libc@0.2.188` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `libfuzzer-sys@0.4.13` | (MIT OR Apache-2.0) AND NCSA | "Licensor" shall mean the copyright owner or entity authorized by |
| `libloading@0.8.9` | ISC | Copyright © 2015, Simonas Kazlauskas |
| `libm@0.2.16` | MIT | The above copyright notice and this permission notice shall be included in all |
| `libredox@0.1.18` | MIT | Copyright (c) 2023 4lDO2 |
| `linux-raw-sys@0.12.1` | Apache-2.0 WITH LLVM-exception OR Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `linux-raw-sys@0.4.15` | Apache-2.0 WITH LLVM-exception OR Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `litemap@0.8.2` | Unicode-3.0 | COPYRIGHT AND PERMISSION NOTICE |
| `lock_api@0.4.14` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `log@0.4.33` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `loop9@0.1.5` | MIT | The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. |
| `lru-slab@0.1.2` | MIT OR Apache-2.0 OR Zlib | "Licensor" shall mean the copyright owner or entity authorized by |
| `lyon@1.0.19` | MIT OR Apache-2.0 | - |
| `lyon_algorithms@1.0.20` | MIT OR Apache-2.0 | - |
| `lyon_geom@1.0.19` | MIT OR Apache-2.0 | - |
| `lyon_path@1.0.19` | MIT OR Apache-2.0 | - |
| `lyon_tessellation@1.0.20` | MIT OR Apache-2.0 | - |
| `mac@0.1.1` | MIT/Apache-2.0 | - |
| `malloc_buf@0.0.6` | MIT | - |
| `maybe-rayon@0.1.1` | MIT | Copyright (c) 2021 Joshua Holmer |
| `md-5@0.10.6` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `memchr@2.8.3` | Unlicense OR MIT | Copyright (c) 2015 Andrew Gallant |
| `memmap2@0.9.11` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `memoffset@0.9.1` | MIT | Copyright (c) 2017 Gilad Naaman |
| `metal@0.29.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `mime@0.3.17` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `mime_guess@2.0.5` | MIT | Copyright (c) 2015 Austin Bonander |
| `minimal-lexical@0.2.1` | MIT/Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `miniz_oxide@0.8.9` | MIT OR Zlib OR Apache-2.0 | Copyright 2013-2014 RAD Game Tools and Valve Software |
| `mint@0.5.9` | MIT | Copyright (c) 2017 Dzmitry Malyshau |
| `mio@1.2.2` | MIT | Copyright (c) 2014 Carl Lerche and other MIO contributors |
| `moxcms@0.8.1` | BSD-3-Clause OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `naga@25.0.1` | MIT OR Apache-2.0 | - |
| `nanorand@0.7.0` | Zlib | Copyright (c) 2021 lucy |
| `new_debug_unreachable@1.0.6` | MIT | Copyright (c) 2015 Jonathan Reem |
| `nix@0.29.0` | MIT | Copyright (c) 2015 Carl Lerche + nix-rust Authors |
| `nix@0.31.3` | MIT | Copyright (c) 2015 Carl Lerche + nix-rust Authors |
| `no_std_io2@0.9.4` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `nom@7.1.3` | MIT | Copyright (c) 2014-2019 Geoffroy Couprie |
| `nom@8.0.0` | MIT | Copyright (c) 2014-2019 Geoffroy Couprie |
| `noop_proc_macro@0.3.0` | MIT | Copyright (c) 2019 Luca Barbato |
| `ntapi@0.4.3` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `num@0.4.3` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `num_cpus@1.17.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `num-bigint@0.4.8` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `num-bigint-dig@0.8.6` | MIT/Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `num-complex@0.4.6` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `num-derive@0.4.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `num-integer@0.1.46` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `num-iter@0.1.46` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `num-rational@0.4.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `num-traits@0.2.19` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `objc@0.2.7` | MIT | Copyright (c) Steven Sheldon |
| `objc_exception@0.1.2` | MIT | - |
| `objc_id@0.1.1` | MIT | - |
| `objc-foundation@0.1.1` | MIT | - |
| `objc2@0.6.4` | MIT | - |
| `objc2-app-kit@0.3.2` | Zlib OR Apache-2.0 OR MIT | - |
| `objc2-core-foundation@0.3.2` | Zlib OR Apache-2.0 OR MIT | - |
| `objc2-encode@4.1.0` | MIT | - |
| `objc2-foundation@0.3.2` | MIT | - |
| `objc2-metal@0.3.2` | Zlib OR Apache-2.0 OR MIT | - |
| `objc2-quartz-core@0.3.2` | Zlib OR Apache-2.0 OR MIT | - |
| `objc2-ui-kit@0.3.2` | Zlib OR Apache-2.0 OR MIT | - |
| `object@0.37.3` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `once_cell@1.21.4` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `oo7@0.5.0` | MIT | Copyright (c) 2022 Bilal Elmoussaoui, Sophie Herold, Maximiliano Sandoval, Dhanuka Warusadura |
| `open@5.4.0` | MIT | Copyright © `2015` `Sebastian Thiel` |
| `openssl-probe@0.2.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `option-ext@0.2.0` | MPL-2.0 | applicable copyright doctrines of fair use, fair dealing, or other |
| `ordered-stream@0.2.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `parking@2.2.1` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `parking_lot@0.12.5` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `parking_lot_core@0.9.12` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `paste@1.0.15` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `pastey@0.1.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `pathfinder_geometry@0.5.1` | MIT/Apache-2.0 | - |
| `pathfinder_simd@0.5.6` | MIT OR Apache-2.0 | - |
| `pbkdf2@0.12.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `percent-encoding@2.3.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `pico-args@0.5.0` | MIT | Copyright (c) 2019 Yevhenii Reizner |
| `pin-project@1.1.13` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `pin-project-internal@1.1.13` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `pin-project-lite@0.2.17` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `pin-utils@0.1.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `piper@0.2.5` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `pkg-config@0.3.33` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `png@0.17.16` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `png@0.18.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `polling@3.11.0` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `pollster@0.2.5` | Apache-2.0/MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `postage@0.5.0` | MIT | Copyright (c) 2022 Austin Jones |
| `potential_utf@0.1.5` | Unicode-3.0 | COPYRIGHT AND PERMISSION NOTICE |
| `ppv-lite86@0.2.21` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `prettyplease@0.2.37` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `proc-macro-crate@3.5.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `proc-macro-error-attr2@2.0.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `proc-macro-error2@2.0.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `proc-macro2@1.0.107` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `profiling@1.0.18` | MIT OR Apache-2.0 | - |
| `profiling-procmacros@1.0.18` | MIT OR Apache-2.0 | - |
| `psm@0.1.31` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `pulp@0.22.3` | MIT | Copyright (c) 2021 sarah |
| `pulp-wasm-simd-flag@0.1.1` | MIT | - |
| `pxfm@0.1.30` | BSD-3-Clause OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `qoi@0.4.1` | MIT/Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `quick-error@2.0.1` | MIT/Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `quick-xml@0.30.0` | MIT | Copyright (c) 2016 Johann Tuffe |
| `quick-xml@0.39.4` | MIT | Copyright (c) 2016 Johann Tuffe |
| `quinn@0.11.11` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `quinn-proto@0.11.16` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `quinn-udp@0.5.15` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `quote@1.0.47` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `r-efi@5.3.0` | MIT OR Apache-2.0 OR LGPL-2.1-or-later | - |
| `r-efi@6.0.0` | MIT OR Apache-2.0 OR LGPL-2.1-or-later | - |
| `rand@0.10.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `rand@0.8.7` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `rand@0.9.5` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `rand_chacha@0.3.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `rand_chacha@0.9.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `rand_core@0.10.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `rand_core@0.6.4` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `rand_core@0.9.5` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `rand_pcg@0.10.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `rangemap@1.7.1` | MIT/Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `rav1e@0.8.1` | BSD-2-Clause | Copyright (c) 2017-2023, the rav1e contributors |
| `ravif@0.13.0` | BSD-3-Clause | Copyright (c) 2020, Kornel |
| `raw-cpuid@11.6.0` | MIT | Copyright (c) 2015 Gerd Zellweger |
| `raw-window-handle@0.6.2` | MIT OR Apache-2.0 OR Zlib | "Licensor" shall mean the copyright owner or entity authorized by |
| `raw-window-metal@0.4.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `rayon@1.12.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `rayon-core@1.13.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `read-fonts@0.41.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License. |
| `reborrow@0.5.5` | MIT | Copyright (c) 2022 sarah |
| `redox_syscall@0.2.16` | MIT | Copyright (c) 2017 Redox OS Developers |
| `redox_syscall@0.5.18` | MIT | Copyright (c) 2017 Redox OS Developers |
| `redox_users@0.4.6` | MIT | Copyright (c) 2017 Jose Narvaez |
| `ref-cast@1.0.26` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `ref-cast-impl@1.0.26` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `regex@1.13.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `regex-automata@0.4.16` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `regex-syntax@0.8.11` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `resvg@0.45.1` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `rgb@0.8.53` | MIT | Copyright (c) 2019 Kornel |
| `ring@0.17.14` | Apache-2.0 AND ISC | "Licensor" shall mean the copyright owner or entity authorized by |
| `roxmltree@0.20.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `rust-embed@8.12.0` | MIT | Copyright (c) 2018 pyros2097 |
| `rust-embed-impl@8.12.0` | MIT | Copyright (c) 2018 pyros2097 |
| `rust-embed-utils@8.12.0` | MIT | Copyright (c) 2018 pyros2097 |
| `rustc_version@0.4.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `rustc-hash@1.1.0` | Apache-2.0/MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `rustc-hash@2.1.3` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `rustix@0.38.44` | Apache-2.0 WITH LLVM-exception OR Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `rustix@1.1.4` | Apache-2.0 WITH LLVM-exception OR Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `rustls@0.23.42` | Apache-2.0 OR ISC OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `rustls-native-certs@0.8.4` | Apache-2.0 OR ISC OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `rustls-pemfile@2.2.0` | Apache-2.0 OR ISC OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `rustls-pki-types@1.15.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `rustls-webpki@0.103.13` | ISC | Copyright 2015 Brian Smith. |
| `rustversion@1.0.23` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `rustybuzz@0.14.1` | MIT | Copyright (c) HarfBuzz developers |
| `rustybuzz@0.20.1` | MIT | Copyright (c) HarfBuzz developers |
| `ryu@1.0.23` | Apache-2.0 OR BSL-1.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `same-file@1.0.6` | Unlicense/MIT | Copyright (c) 2017 Andrew Gallant |
| `schannel@0.1.29` | MIT | Copyright (c) 2015 steffengy |
| `schemars@1.2.1` | MIT | Copyright (c) 2019 Graham Esau |
| `schemars_derive@1.2.1` | MIT | Copyright (c) 2019 Graham Esau |
| `scoped-tls@1.0.1` | MIT/Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `scopeguard@1.2.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `screencapturekit@0.2.8` | MIT OR Apache-2.0 | - |
| `screencapturekit-sys@0.2.8` | MIT OR Apache-2.0 | - |
| `seahash@4.1.0` | MIT | - |
| `security-framework@3.7.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `security-framework-sys@2.17.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `self_cell@1.3.0` | Apache-2.0 OR GPL-2.0-only | "Licensor" shall mean the copyright owner or entity authorized by |
| `semver@1.0.28` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `serde@1.0.229` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `serde_core@1.0.229` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `serde_derive@1.0.229` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `serde_derive_internals@0.29.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `serde_fmt@1.1.0` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `serde_json@1.0.151` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `serde_json_lenient@0.2.4` | MIT/Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `serde_repr@0.1.21` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `serde_spanned@0.6.9` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `serde_spanned@1.1.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `serde_urlencoded@0.7.1` | MIT/Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `sha1_smol@1.0.1` | BSD-3-Clause | Copyright (c) 2018, the respective contributors, as shown by the AUTHORS file. |
| `sha2@0.10.9` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `sha2@0.11.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `shlex@1.3.0` | MIT OR Apache-2.0 | Copyright 2015 Nicholas Allegra (comex). |
| `shlex@2.0.1` | MIT OR Apache-2.0 | Copyright 2015 Nicholas Allegra (comex). |
| `signal-hook-registry@1.4.8` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `simd_helpers@0.1.0` | MIT | - |
| `simd-adler32@0.3.10` | MIT | Copyright (c) [2021] [Marvin Countryman] |
| `simplecss@0.2.2` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `siphasher@1.0.3` | MIT/Apache-2.0 | Copyright 2012-2016 The Rust Project Developers. |
| `skrifa@0.44.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License. |
| `slab@0.4.12` | MIT | Copyright (c) 2019 Carl Lerche |
| `slotmap@1.1.1` | Zlib | Copyright (c) 2021 Orson Peters <orsonpeters@gmail.com> |
| `smallvec@1.15.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `smol@2.0.2` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `smol_str@0.2.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `socket2@0.6.5` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `spin@0.9.9` | MIT | Copyright (c) 2014 Mathijs van de Nes |
| `spirv@0.3.0+sdk-1.3.268.0` | Apache-2.0 | - |
| `stable_deref_trait@1.2.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `stacker@0.1.24` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `stacksafe@0.1.4` | Apache-2.0 | - |
| `stacksafe-macro@0.1.4` | Apache-2.0 | - |
| `static_assertions@1.1.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `strict-num@0.1.1` | MIT | Copyright (c) 2022 Yevhenii Reizner |
| `strum@0.26.3` | MIT | Copyright (c) 2019 Peter Glotfelty |
| `strum@0.27.2` | MIT | Copyright (c) 2019 Peter Glotfelty |
| `strum_macros@0.26.4` | MIT | Copyright (c) 2019 Peter Glotfelty |
| `strum_macros@0.27.2` | MIT | Copyright (c) 2019 Peter Glotfelty |
| `subtle@2.6.1` | BSD-3-Clause | Copyright (c) 2016-2017 Isis Agora Lovecruft, Henry de Valence. All rights reserved. |
| `sval@2.20.0` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `sval_buffer@2.20.0` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `sval_dynamic@2.20.0` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `sval_fmt@2.20.0` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `sval_json@2.20.0` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `sval_nested@2.20.0` | Apache-2.0 OR MIT | - |
| `sval_ref@2.20.0` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `sval_serde@2.20.0` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `svg_fmt@0.4.5` | MIT/Apache-2.0 | - |
| `svgtypes@0.15.3` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `swash@0.2.10` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `syn@1.0.109` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `syn@2.0.119` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `syn@3.0.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `sync_wrapper@1.0.2` | Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `synstructure@0.13.2` | MIT | Copyright 2016 Nika Layzell |
| `sys-locale@0.3.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `sysinfo@0.31.4` | MIT | Copyright (c) 2015 Guillaume Gomez |
| `system-configuration@0.6.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `system-configuration-sys@0.6.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `taffy@0.9.0` | MIT | - |
| `take-until@0.2.0` | MIT | Copyright 2019 Hannes De Valkeneer |
| `tao-core-video-sys@0.2.0` | MIT | Copyright (c) 2018 寧靜 |
| `tempfile@3.27.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `tendril@0.4.3` | MIT/Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `termcolor@1.4.1` | Unlicense OR MIT | Copyright (c) 2015 Andrew Gallant |
| `thiserror@1.0.69` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `thiserror@2.0.19` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `thiserror-impl@1.0.69` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `thiserror-impl@2.0.19` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `tiff@0.11.3` | MIT | Copyright (c) 2018 PistonDevelopers |
| `tiny-keccak@2.0.2` | CC0-1.0 | exclusive Copyright and Related Rights (defined below) upon the creator |
| `tiny-skia@0.11.4` | BSD-3-Clause | Copyright (c) 2011 Google Inc. All rights reserved. |
| `tiny-skia-path@0.11.4` | BSD-3-Clause | Copyright (c) 2011 Google Inc. All rights reserved. |
| `tinystr@0.8.3` | Unicode-3.0 | COPYRIGHT AND PERMISSION NOTICE |
| `tinyvec@1.12.0` | Zlib OR Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `tinyvec_macros@0.1.1` | MIT OR Apache-2.0 OR Zlib | "Licensor" shall mean the copyright owner or entity authorized by |
| `tokio@1.53.1` | MIT | Copyright (c) Tokio Contributors |
| `tokio-rustls@0.26.4` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `tokio-socks@0.5.3` | MIT | Copyright (c) 2018 Yilin Chen |
| `tokio-util@0.7.19` | MIT | Copyright (c) Tokio Contributors |
| `toml@0.8.23` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `toml@1.1.3+spec-1.1.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `toml_datetime@0.6.11` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `toml_datetime@1.1.1+spec-1.1.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `toml_edit@0.22.27` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `toml_edit@0.25.13+spec-1.1.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `toml_parser@1.1.2+spec-1.1.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `toml_write@0.1.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `toml_writer@1.1.2+spec-1.1.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `tower@0.5.3` | MIT | Copyright (c) 2019 Tower Contributors |
| `tower-layer@0.3.3` | MIT | Copyright (c) 2019 Tower Contributors |
| `tower-service@0.3.3` | MIT | Copyright (c) 2019 Tower Contributors |
| `tracing@0.1.44` | MIT | Copyright (c) 2019 Tokio Contributors |
| `tracing-attributes@0.1.31` | MIT | Copyright (c) 2019 Tokio Contributors |
| `tracing-core@0.1.36` | MIT | Copyright (c) 2019 Tokio Contributors |
| `try-lock@0.2.5` | MIT | Copyright (c) 2018-2023 Sean McArthur |
| `ttf-parser@0.20.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `ttf-parser@0.21.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `ttf-parser@0.25.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `typeid@1.0.3` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `typenum@1.20.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `uds_windows@1.2.1` | MIT | Copyright (c) Microsoft Corporation. All rights reserved. |
| `unicase@2.9.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `unicode-bidi@0.3.18` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `unicode-bidi-mirroring@0.2.0` | MIT/Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `unicode-bidi-mirroring@0.4.0` | MIT/Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `unicode-ccc@0.2.0` | MIT/Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `unicode-ccc@0.4.0` | MIT/Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `unicode-ident@1.0.24` | (MIT OR Apache-2.0) AND Unicode-3.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `unicode-linebreak@0.1.5` | Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `unicode-properties@0.1.4` | MIT/Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `unicode-script@0.5.8` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `unicode-segmentation@1.13.3` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `unicode-vo@0.1.0` | MIT/Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `unicode-width@0.2.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `untrusted@0.9.0` | ISC | Copyright 2015-2016 Brian Smith. |
| `url@2.5.8` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `usvg@0.45.1` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `utf-8@0.7.6` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `utf8_iter@1.0.4` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `uuid@1.24.0` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `v_frame@0.3.9` | BSD-2-Clause | Copyright (c) 2017-2022, the rav1e contributors |
| `value-bag@1.13.1` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `value-bag-serde1@1.13.1` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `value-bag-sval2@1.13.1` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `version_check@0.9.5` | MIT/Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `vswhom@0.1.0` | MIT | Copyright (c) 2019 nabijaczleweli |
| `vswhom-sys@0.1.3` | MIT | Copyright (c) 2019 nabijaczleweli |
| `waker-fn@1.2.0` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `walkdir@2.5.0` | Unlicense/MIT | Copyright (c) 2015 Andrew Gallant |
| `want@0.3.1` | MIT | Copyright (c) 2018-2019 Sean McArthur |
| `wasi@0.11.1+wasi-snapshot-preview1` | Apache-2.0 WITH LLVM-exception OR Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `wasip2@1.0.4+wasi-0.2.12` | Apache-2.0 WITH LLVM-exception OR Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `wasm-bindgen@0.2.126` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `wasm-bindgen-futures@0.4.76` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `wasm-bindgen-macro@0.2.126` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `wasm-bindgen-macro-support@0.2.126` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `wasm-bindgen-shared@0.2.126` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `wasm-streams@0.4.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `wayland-backend@0.3.15` | MIT | Copyright (c) 2015 Elinor Berger |
| `wayland-client@0.31.14` | MIT | Copyright (c) 2015 Elinor Berger |
| `wayland-cursor@0.31.14` | MIT | Copyright (c) 2015 Elinor Berger |
| `wayland-protocols@0.31.2` | MIT | Copyright (c) 2015 Elinor Berger |
| `wayland-protocols@0.32.13` | MIT | Copyright (c) 2015 Elinor Berger |
| `wayland-protocols-plasma@0.2.0` | MIT | - |
| `wayland-scanner@0.31.10` | MIT | Copyright (c) 2015 Elinor Berger |
| `wayland-sys@0.31.11` | MIT | Copyright (c) 2015 Elinor Berger |
| `web-sys@0.3.103` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `web-time@1.1.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `weezl@0.1.12` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `which@6.0.3` | MIT | Copyright (c) 2015 fangyuanziti |
| `winapi@0.3.9` | MIT/Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `winapi-i686-pc-windows-gnu@0.4.0` | MIT/Apache-2.0 | - |
| `winapi-util@0.1.11` | Unlicense OR MIT | Copyright (c) 2017 Andrew Gallant |
| `winapi-x86_64-pc-windows-gnu@0.4.0` | MIT/Apache-2.0 | - |
| `windows@0.57.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows@0.61.3` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows_aarch64_gnullvm@0.48.5` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows_aarch64_gnullvm@0.52.6` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows_aarch64_gnullvm@0.53.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows_aarch64_msvc@0.48.5` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows_aarch64_msvc@0.52.6` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows_aarch64_msvc@0.53.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows_i686_gnu@0.48.5` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows_i686_gnu@0.52.6` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows_i686_gnu@0.53.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows_i686_gnullvm@0.52.6` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows_i686_gnullvm@0.53.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows_i686_msvc@0.48.5` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows_i686_msvc@0.52.6` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows_i686_msvc@0.53.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows_x86_64_gnu@0.48.5` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows_x86_64_gnu@0.52.6` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows_x86_64_gnu@0.53.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows_x86_64_gnullvm@0.48.5` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows_x86_64_gnullvm@0.52.6` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows_x86_64_gnullvm@0.53.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows_x86_64_msvc@0.48.5` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows_x86_64_msvc@0.52.6` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows_x86_64_msvc@0.53.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows-capture@1.5.0` | MIT | Copyright (c) 2023 NiiightmareXD |
| `windows-collections@0.2.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows-core@0.57.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows-core@0.61.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows-future@0.2.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows-implement@0.57.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows-implement@0.60.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows-interface@0.57.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows-interface@0.59.3` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows-link@0.1.3` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows-link@0.2.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows-numerics@0.2.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows-registry@0.4.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows-registry@0.5.3` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows-result@0.1.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows-result@0.3.4` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows-strings@0.3.1` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows-strings@0.4.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows-sys@0.48.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows-sys@0.52.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows-sys@0.59.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows-sys@0.61.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows-targets@0.48.5` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows-targets@0.52.6` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows-targets@0.53.5` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `windows-threading@0.1.0` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `winnow@0.7.15` | MIT | The above copyright notice and this permission notice shall be |
| `winnow@1.0.4` | MIT | The above copyright notice and this permission notice shall be |
| `winreg@0.55.0` | MIT | Copyright (c) 2015 Igor Shaula |
| `winsafe@0.0.19` | MIT | Copyright (c) 2019-present, Rodrigo Cesar de Freitas Dias |
| `wio@0.2.2` | MIT/Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `wit-bindgen@0.57.1` | Apache-2.0 WITH LLVM-exception OR Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `writeable@0.6.3` | Unicode-3.0 | COPYRIGHT AND PERMISSION NOTICE |
| `x11@2.21.0` | MIT | The above copyright notice and this permission notice |
| `x11-clipboard@0.9.3` | MIT | Copyright (c) 2017 quininer@live.com |
| `x11rb@0.13.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `x11rb-protocol@0.13.2` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `xattr@0.2.3` | MIT/Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `xcb@1.7.0` | MIT | Copyright (c) 2013 James Miller <james@aatch.net> |
| `xcursor@0.3.10` | MIT | Copyright (c) 2020 Samuele Esposito |
| `xim-ctext@0.3.0` | MIT | - |
| `xim-parser@0.2.2` | MIT | - |
| `xkbcommon@0.8.0` | MIT | Copyright (c) 2016 Remi Thebault <remi.thebault@gmail.com> |
| `xkeysym@0.2.1` | MIT OR Apache-2.0 OR Zlib | "Licensor" shall mean the copyright owner or entity authorized by |
| `xmlwriter@0.1.0` | MIT | Copyright (c) 2019 Reizner Evgeniy |
| `y4m@0.8.0` | MIT | Copyright (c) 2015-2019 PistonDevelopers |
| `yazi@0.2.1` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `yeslogic-fontconfig-sys@6.0.1` | MIT | Copyright 2019 YesLogic Pty. Ltd. |
| `yoke@0.8.3` | Unicode-3.0 | COPYRIGHT AND PERMISSION NOTICE |
| `yoke-derive@0.8.2` | Unicode-3.0 | COPYRIGHT AND PERMISSION NOTICE |
| `zbus@5.18.0` | MIT | Copyright (c) 2024 Zeeshan Ali Khan & zbus contributors |
| `zbus_macros@5.18.0` | MIT | Copyright (c) 2024 Zeeshan Ali Khan & zbus contributors |
| `zbus_names@4.3.4` | MIT | Copyright (c) 2024 Zeeshan Ali Khan & zbus contributors |
| `zed-async-tar@0.5.0-zed` | MIT/Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `zed-font-kit@0.14.1-zed` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `zed-reqwest@0.12.15-zed` | MIT OR Apache-2.0 | "Licensor" shall mean the copyright owner or entity authorized by |
| `zed-scap@0.0.8-zed` | MIT | Copyright (c) 2024 Siddharth Jha |
| `zed-xim@0.4.0-zed` | MIT | Copyright (c) 2020 Riey |
| `zeno@0.3.3` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `zerocopy@0.8.55` | BSD-2-Clause OR Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `zerocopy-derive@0.8.55` | BSD-2-Clause OR Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `zerofrom@0.1.8` | Unicode-3.0 | COPYRIGHT AND PERMISSION NOTICE |
| `zerofrom-derive@0.1.7` | Unicode-3.0 | COPYRIGHT AND PERMISSION NOTICE |
| `zeroize@1.9.0` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `zeroize_derive@1.5.0` | Apache-2.0 OR MIT | "Licensor" shall mean the copyright owner or entity authorized by |
| `zerotrie@0.2.4` | Unicode-3.0 | COPYRIGHT AND PERMISSION NOTICE |
| `zerovec@0.11.6` | Unicode-3.0 | COPYRIGHT AND PERMISSION NOTICE |
| `zerovec-derive@0.11.3` | Unicode-3.0 | COPYRIGHT AND PERMISSION NOTICE |
| `zmij@1.0.23` | MIT | The above copyright notice and this permission notice |
| `zune-core@0.5.1` | MIT OR Apache-2.0 OR Zlib | "Licensor" shall mean the copyright owner or entity authorized by |
| `zune-inflate@0.2.54` | MIT OR Apache-2.0 OR Zlib | - |
| `zune-jpeg@0.5.15` | MIT OR Apache-2.0 OR Zlib | "Licensor" shall mean the copyright owner or entity authorized by |
| `zvariant@5.13.1` | MIT | Copyright (c) 2024 Zeeshan Ali Khan & zbus contributors |
| `zvariant_derive@5.13.1` | MIT | Copyright (c) 2024 Zeeshan Ali Khan & zbus contributors |
| `zvariant_utils@3.5.0` | MIT | The above copyright notice and this permission notice |

## FFmpeg 8.1.3

**Licence:** LGPL-2.1-or-later. Dynamically linked (`--enable-shared`),
which is what the LGPL requires. The build takes no `libx264` on purpose:
it is GPL, and it would make the whole binary GPL.

Source: https://ffmpeg.org/releases/ffmpeg-8.1.3.tar.xz

Prebuilts published for: windows-x86_64, windows-aarch64, linux-x86_64, linux-aarch64. Each archive carries
`COPYING.LGPLv2.1`, `LICENSE.md` and a `BUILD.md` with the exact configure
flags, as the LGPL asks of anyone redistributing it.

## OFL-1.1 text (Inter font)

```
Copyright 2016 The Inter Project Authors (https://github.com/rsms/inter) Inter-Italic[opsz,wght].ttf: Copyright 2016 The Inter Project Authors (https://github.com/rsms/inter)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
http://scripts.sil.org/OFL


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded,
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.
```

## Scope

- Covers what is installed on this machine. Optional binaries for other
  platforms share the licence of their parent package.
- The copyright notice is the first line mentioning `copyright` in the local
  `LICENSE` file. A package that ships no licence file shows `-`, in which
  case its declared licence still applies.
