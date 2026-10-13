#!/usr/bin/env bun
// Generates THIRD-PARTY-NOTICES.md from what is actually installed.
//
//   bun run scripts/third-party-notices.ts
//
// Two sources: every package in node_modules, and `cargo metadata` for the
// Rust workspace. Both are read locally, so this needs no network beyond what
// cargo already cached.
//
// The file is committed because it is what gets shipped alongside a release.
// Re-run it whenever the lockfiles change.

import { execFileSync } from "node:child_process"
import {
  type Dirent,
  existsSync,
  readdirSync,
  readFileSync,
  statSync,
} from "node:fs"
import { homedir } from "node:os"
import { join, resolve } from "node:path"

const root = resolve(import.meta.dir, "..")
const out = join(root, "THIRD-PARTY-NOTICES.md")

type Entry = {
  ecosystem: "JS" | "Rust"
  name: string
  version: string
  license: string
  copyright: string
}

const LICENSE_FILE = /^(LICEN[CS]E|COPYING)/i
const SKIP_DIRS = new Set([".bin", ".cache", ".bun", ".pnpm"])

/// The first line of a licence file that names a holder. MIT and BSD require
/// this notice to travel with the code, so it has to end up in here.
function copyrightOf(dir: string): string {
  let files: string[]
  try {
    files = readdirSync(dir).filter((name) => LICENSE_FILE.test(name))
  } catch {
    return "-"
  }
  for (const name of files) {
    let text: string
    try {
      text = readFileSync(join(dir, name), "utf8")
    } catch {
      continue
    }
    const line = text
      .split(/\r?\n/)
      .find((l) => /copyright/i.test(l) && l.trim().length > 8)
    if (line) {
      const clean = line
        .replace(/^\s*[/*#]+\s*/, "")
        .replace(/\s*[*/]+\s*$/, "")
        .trim()
      return clean.length > 130 ? `${clean.slice(0, 127)}...` : clean
    }
  }
  return "-"
}

function declaredLicense(pkg: Record<string, unknown>): string {
  if (typeof pkg.license === "string") return pkg.license
  const license = pkg.license as { type?: unknown } | undefined
  if (license && typeof license.type === "string") return license.type
  const licenses = pkg.licenses as Array<string | { type?: string }> | undefined
  if (Array.isArray(licenses)) {
    const types = licenses
      .map((l) => (typeof l === "string" ? l : l?.type))
      .filter((t): t is string => typeof t === "string")
    if (types.length > 0) return types.join(" OR ")
  }
  return "UNDECLARED"
}

function jsPackages(): Entry[] {
  const modules = join(root, "node_modules")
  const found = new Map<string, Entry>()

  const scan = (dir: string, depth: number): void => {
    let entries: Dirent[]
    try {
      entries = readdirSync(dir, { withFileTypes: true })
    } catch {
      return
    }
    for (const entry of entries) {
      if (!entry.isDirectory() && !entry.isSymbolicLink()) continue
      if (SKIP_DIRS.has(entry.name)) continue
      const full = join(dir, entry.name)
      if (entry.name.startsWith("@")) {
        scan(full, depth + 1)
        continue
      }
      const manifest = join(full, "package.json")
      if (!existsSync(manifest)) continue
      try {
        const pkg = JSON.parse(readFileSync(manifest, "utf8")) as Record<
          string,
          unknown
        >
        const name = pkg.name
        const version = pkg.version
        const isPrivate = pkg.private === true
        if (
          typeof name === "string" &&
          typeof version === "string" &&
          !isPrivate
        ) {
          const key = `${name}@${version}`
          if (!found.has(key)) {
            found.set(key, {
              ecosystem: "JS",
              name,
              version,
              license: declaredLicense(pkg),
              copyright: copyrightOf(full),
            })
          }
        }
      } catch {
        // A package with an unreadable manifest is skipped, not fatal.
      }
      const nested = join(full, "node_modules")
      if (existsSync(nested) && depth < 4) scan(nested, depth + 1)
    }
  }

  if (existsSync(modules)) scan(modules, 0)
  return [...found.values()]
}

type CargoPackage = {
  name: string
  version: string
  license?: string
  license_file?: string
  id: string
}

function rustPackages(): Entry[] {
  let raw: string
  try {
    raw = execFileSync(
      "cargo",
      ["metadata", "--format-version", "1", "--locked"],
      {
        cwd: root,
        encoding: "utf8",
        maxBuffer: 64 * 1024 * 1024,
        stdio: ["ignore", "pipe", "ignore"],
      },
    )
  } catch {
    console.warn("cargo metadata unavailable: skipping the Rust half")
    return []
  }

  const meta = JSON.parse(raw) as {
    packages: CargoPackage[]
    workspace_members: string[]
  }
  const local = new Set(meta.workspace_members)
  const registry = join(homedir(), ".cargo", "registry", "src")
  const sources: string[] = []
  if (existsSync(registry)) {
    for (const dir of readdirSync(registry)) {
      const full = join(registry, dir)
      if (statSync(full).isDirectory()) sources.push(full)
    }
  }

  return meta.packages
    .filter((pkg) => !local.has(pkg.id))
    .map((pkg) => {
      let copyright = "-"
      const dirName = `${pkg.name}-${pkg.version}`
      for (const base of sources) {
        const candidate = join(base, dirName)
        if (existsSync(candidate)) {
          copyright = copyrightOf(candidate)
          break
        }
      }
      return {
        ecosystem: "Rust" as const,
        name: pkg.name,
        version: pkg.version,
        license:
          pkg.license ??
          (pkg.license_file ? `ver ${pkg.license_file}` : "UNDECLARED"),
        copyright,
      }
    })
}

function ffmpegNotice(): string {
  const manifestPath = join(root, "crates", "media", "setup", "ffmpeg.json")
  if (!existsSync(manifestPath)) return ""
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8")) as {
    version: string
    license: string
    source: { url: string }
    platforms: Record<string, { url: string }>
  }
  const platforms = Object.keys(manifest.platforms)
  return [
    `## FFmpeg ${manifest.version}`,
    "",
    `**Licence:** ${manifest.license}. Dynamically linked (\`--enable-shared\`),`,
    "which is what the LGPL requires. The build takes no `libx264` on purpose:",
    "it is GPL, and it would make the whole binary GPL.",
    "",
    `Source: ${manifest.source.url}`,
    "",
    `Prebuilts published for: ${platforms.join(", ")}. Each archive carries`,
    "`COPYING.LGPLv2.1`, `LICENSE.md` and a `BUILD.md` with the exact configure",
    "flags, as the LGPL asks of anyone redistributing it.",
    "",
  ].join("\n")
}

/// The OFL is the one licence here that has to travel with a shipped asset,
/// because the Inter webfonts are emitted into the build.
function oflText(): string {
  const dir = join(root, "node_modules", "@fontsource-variable", "inter")
  for (const name of readdirSync(dir)) {
    if (LICENSE_FILE.test(name)) {
      return readFileSync(join(dir, name), "utf8").trim()
    }
  }
  return "(not found: install the dependencies first)"
}

function render(entries: Entry[]): string {
  const js = entries
    .filter((e) => e.ecosystem === "JS")
    .sort((a, b) => a.name.localeCompare(b.name))
  const rust = entries
    .filter((e) => e.ecosystem === "Rust")
    .sort((a, b) => a.name.localeCompare(b.name))

  const counts = new Map<string, number>()
  for (const entry of entries) {
    // Crates write dual licences with a slash as often as with OR.
    for (const atom of entry.license
      .replace(/[()]/g, "")
      .split(/\s+OR\s+|\s+AND\s+|\//i)) {
      const key = atom.trim()
      if (key) counts.set(key, (counts.get(key) ?? 0) + 1)
    }
  }

  const table = (rows: Entry[]): string =>
    [
      "| Package | Licence | Copyright notice |",
      "| --- | --- | --- |",
      ...rows.map(
        (r) =>
          `| \`${r.name}@${r.version}\` | ${r.license} | ${r.copyright.replace(/\|/g, "\\|")} |`,
      ),
    ].join("\n")

  const undeclared = entries.filter((e) => e.license === "UNDECLARED")

  return [
    "# Third-party notices",
    "",
    "Generated, not written by hand. To regenerate it:",
    "",
    "```sh",
    "bun run scripts/third-party-notices.ts",
    "```",
    "",
    "Sources: the packages installed in `node_modules` and `cargo metadata` for",
    "the Rust workspace. This audits the licence each package **declares**, not",
    "the text of every file it ships.",
    "",
    `- JS/TS: ${js.length} packages`,
    `- Rust: ${rust.length} crates`,
    `- Without a declared licence: ${undeclared.length}`,
    "",
    "## Licences present",
    "",
    "| Licence | Packages |",
    "| --- | --- |",
    ...[...counts.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([license, count]) => `| ${license} | ${count} |`),
    "",
    "## Distribution obligations",
    "",
    "- **Inter (OFL-1.1)** ships inside the build: the `.woff2` files are emitted",
    "  into `dist`. The full OFL text is at the end of this document.",
    "- **FFmpeg (LGPL-2.1-or-later)**: see below. Dynamically linked, and built",
    "  without `libx264`.",
    "- **MPL-2.0** (`dwrote`, `option-ext`, `cbindgen` in Rust; `lightningcss` in",
    "  JS): file-level copyleft. It is satisfied by being able to point at the",
    "  source of those crates, and since they are unmodified that means citing",
    "  crates.io.",
    "- **CC-BY-4.0** (`caniuse-lite`): attribution. Build-time data.",
    "",
    "## JS/TS",
    "",
    table(js),
    "",
    "## Rust",
    "",
    table(rust),
    "",
    ffmpegNotice(),
    "## OFL-1.1 text (Inter font)",
    "",
    "```",
    oflText(),
    "```",
    "",
    "## Scope",
    "",
    "- Covers what is installed on this machine. Optional binaries for other",
    "  platforms share the licence of their parent package.",
    "- The copyright notice is the first line mentioning `copyright` in the local",
    "  `LICENSE` file. A package that ships no licence file shows `-`, in which",
    "  case its declared licence still applies.",
    "",
  ].join("\n")
}

const entries = [...jsPackages(), ...rustPackages()].sort((a, b) => {
  if (a.ecosystem !== b.ecosystem) return a.ecosystem.localeCompare(b.ecosystem)
  return a.name.localeCompare(b.name) || a.version.localeCompare(b.version)
})

await Bun.write(out, render(entries))
console.log(`${entries.length} dependencies -> ${out}`)
