const STORAGE_KEY = 'color-mode'

function getStoredMode() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'dark' ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

function applyMode(mode) {
  document.documentElement.dataset.theme = mode
  const button = document.getElementById('theme-toggle')
  if (!button) return
  const isDark = mode === 'dark'
  button.textContent = isDark ? '☀' : '☾'
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode'
  button.setAttribute('aria-label', label)
  button.setAttribute('title', label)
}

let mode = getStoredMode()
applyMode(mode)

document.addEventListener('DOMContentLoaded', () => {
  applyMode(mode)
  const button = document.getElementById('theme-toggle')
  if (!button) return
  button.addEventListener('click', () => {
    mode = mode === 'dark' ? 'light' : 'dark'
    applyMode(mode)
    try {
      localStorage.setItem(STORAGE_KEY, mode)
    } catch {
    }
  })
})
