import viteReact from "@vitejs/plugin-react"
import { defineConfig } from "vitest/config"

// Vitest needs its own config: importing the app's vite.config.ts would load
// the TanStack Start and Cloudflare plugins, which have no place in a unit
// test run. This also turns on jsdom, which the app config never did, so
// component tests have a `document` to render into.
export default defineConfig({
  plugins: [viteReact()],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: "jsdom",
    include: ["src/**/*.test.{ts,tsx}"],
    setupFiles: ["./src/test/setup.ts"],
  },
})
