import { createFileRoute } from "@tanstack/react-router"

import { ThemeToggle } from "../components/theme-toggle.tsx"

export const Route = createFileRoute("/")({ component: Home })

function Home() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-4">
      <h1 className="text-3xl">OpenCut</h1>
      <p className="text-muted-foreground text-sm">
        The rewrite is under construction.
      </p>
      <ThemeToggle />
    </main>
  )
}
