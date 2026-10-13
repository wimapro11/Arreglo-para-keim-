import { cleanup } from "@testing-library/react"
import { afterEach } from "vitest"

// jsdom implements no matchMedia, and next-themes reads it while mounting.
window.matchMedia = (query: string): MediaQueryList => ({
  matches: false,
  media: query,
  onchange: null,
  addEventListener: () => {},
  removeEventListener: () => {},
  addListener: () => {},
  removeListener: () => {},
  dispatchEvent: () => false,
})

afterEach(() => {
  cleanup()
})
