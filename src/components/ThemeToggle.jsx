import React from 'react'
import { useTheme } from '../utils/theme'

const icons = {
  light: '☀️',
  dark: '🌙'
}

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className={`theme-toggle ${isDark ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <span className="theme-toggle-thumb" />
      </span>
      <span className="theme-toggle-content">
        <span className="theme-toggle-icon">{icons[theme]}</span>
        <span className="theme-toggle-label">{isDark ? 'Dark mode' : 'Light mode'}</span>
      </span>
    </button>
  )
}
