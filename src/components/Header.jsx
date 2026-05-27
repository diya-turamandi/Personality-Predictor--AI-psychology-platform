import React from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <h1>AI Personality Predictor</h1>
        <ThemeToggle />
      </div>
    </header>
  )
}
