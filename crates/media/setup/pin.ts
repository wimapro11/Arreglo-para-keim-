// Rewrites crates/media/setup/ffmpeg.json to point `setup.ts` at the prebuilt
// archives published by .github/workflows/media-deps.yml.
//
//   bun run crates/media/setup/pin.ts ffmpeg-8.1.3-1
//   bun run crates/media/setup/pin.ts <tag> --repo <owner>/<name>
//
// Every archive is downloaded once to hash it, and a tag missing any platform
// is rejected, so a partial release can never half-update the pins. The
// platform order is fixed so repeated runs produce no spurious diff.

import { mkdtempSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"

import manifest from "./ffmpeg.json"

const OSES = ["windows", "macos", "linux"] as const
const ARCHES = ["x86_64", "aarch64"] as const

type Os = (typeof OSES)[number]
type Arch = (typeof ARCHES)[number]
type Platform = `${Os}-${Arch}`
type Asset = { name: string; browserDownloadUrl: string }
type Pin = { url: string; sha256: string }

/// Every platform `setup.ts` can run on. All of them have to be in the
/// release: a manifest missing one silently falls back to a source build.
const ORDER: readonly Platform[] = [
  "windows-x86_64",
  "windows-aarch64",
  "macos-aarch64",
  "macos-x86_64",
  "linux-x86_64",
  "linux-aarch64",
]

function fail(message: string): never {
  console.error(message)
  process.exit(1)
}

function option(name: string): string | undefined {
  const index = process.argv.indexOf(name)
  return index === -1 ? undefined : process.argv[index + 1]
}

/// Reads the platform out of a name like `ffmpeg-8.1.3-linux-x86_64.tar.gz`.
function parsePlatform(asset: string): Platform {
  const prefix = `ffmpeg-${manifest.version}-`
  if (!asset.startsWith(prefix) || !asset.endsWith(".tar.gz")) {
    fail(`unexpected asset ${asset}: expected ${prefix}<os>-<arch>.tar.gz`)
  }
  const key = asset.slice(prefix.length, -".tar.gz".length)
  const separator = key.lastIndexOf("-")
  const os = key.slice(0, separator)
  const arch = key.slice(separator + 1)
  if (
    !(OSES as readonly string[]).includes(os) ||
    !(ARCHES as readonly string[]).includes(arch)
  ) {
    fail(`unknown platform ${key} in ${asset}`)
  }
  return `${os}-${arch}` as Platform
}

function assetsOf(release: unknown): Asset[] {
  if (typeof release !== "object" || release === null) {
    fail("release is not an object")
  }
  const assets = (release as { assets?: unknown }).assets
  if (!Array.isArray(assets)) fail("release has no assets array")
  return assets.filter(
    (asset): asset is Asset =>
      typeof asset === "object" &&
      asset !== null &&
      typeof (asset as Asset).name === "string" &&
      typeof (asset as Asset).browserDownloadUrl === "string",
  )
}

async function github(path: string): Promise<unknown> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "opencut-pin",
  }
  const token = process.env.GITHUB_TOKEN
  if (token) headers.Authorization = `Bearer ${token}`

  const response = await fetch(`https://api.github.com${path}`, { headers })
  if (!response.ok) {
    fail(`GitHub API ${path} failed: ${response.status} ${response.statusText}`)
  }
  return response.json()
}

/// Streams the archive to disk and hashes it in the same pass, so a 60 MB
/// archive never lands in memory.
async function download(url: string, into: string): Promise<string> {
  const response = await fetch(url)
  if (!response.ok) fail(`download failed: ${response.status} ${url}`)

  await Bun.write(into, response)

  const hasher = new Bun.CryptoHasher("sha256")
  for await (const chunk of Bun.file(into).stream()) {
    hasher.update(chunk)
  }
  return hasher.digest("hex")
}

async function main() {
  const tag = process.argv.at(2)
  if (!tag || tag.startsWith("--")) {
    fail(
      "usage: bun run crates/media/setup/pin.ts <release-tag> [--repo owner/name]",
    )
  }

  const repo =
    option("--repo") ?? process.env.GITHUB_REPOSITORY ?? "OpenCut-app/OpenCut"

  const byPlatform = new Map<Platform, Asset>()
  for (const asset of assetsOf(
    await github(`/repos/${repo}/releases/tags/${tag}`),
  )) {
    if (asset.name.endsWith(".tar.gz")) {
      byPlatform.set(parsePlatform(asset.name), asset)
    }
  }

  const missing = ORDER.filter((platform) => !byPlatform.has(platform))
  if (missing.length > 0)
    fail(`release ${tag} is missing ${missing.join(", ")}`)

  const staging = mkdtempSync(join(tmpdir(), "opencut-pin-"))
  const platforms: Record<string, Pin> = {}
  try {
    for (const platform of ORDER) {
      const asset = byPlatform.get(platform)
      if (!asset) fail(`${tag} is missing ${platform}`)

      const sha256 = await download(
        asset.browserDownloadUrl,
        join(staging, asset.name),
      )
      platforms[platform] = { url: asset.browserDownloadUrl, sha256 }
      console.log(`${platform} ${sha256}`)
    }
  } finally {
    rmSync(staging, { recursive: true, force: true })
  }

  await Bun.write(
    new URL("./ffmpeg.json", import.meta.url),
    `${JSON.stringify(
      {
        version: manifest.version,
        license: manifest.license,
        source: manifest.source,
        platforms,
      },
      null,
      2,
    )}\n`,
  )
  console.log(`${tag} pinned all ${ORDER.length} platforms`)
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
})
