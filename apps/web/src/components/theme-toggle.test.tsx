import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { ThemeProvider } from "next-themes"
import { describe, expect, it } from "vitest"

import { ThemeToggle } from "#/components/theme-toggle.tsx"

function renderToggle(defaultTheme: "light" | "dark") {
  return render(
    <ThemeProvider
      attribute="class"
      defaultTheme={defaultTheme}
      enableSystem={false}
    >
      <ThemeToggle />
    </ThemeProvider>,
  )
}

describe("ThemeToggle", () => {
  it("offers to switch to dark when the theme is light", async () => {
    renderToggle("light")

    expect(await screen.findByLabelText("Switch to dark theme")).toBeDefined()
  })

  it("offers to switch to light when the theme is dark", async () => {
    renderToggle("dark")

    expect(await screen.findByLabelText("Switch to light theme")).toBeDefined()
  })

  it("applies the dark class to the document when clicked", async () => {
    renderToggle("light")

    fireEvent.click(await screen.findByLabelText("Switch to dark theme"))

    await waitFor(() => {
      expect(document.documentElement.classList.contains("dark")).toBe(true)
    })
  })
})
