import React from 'react'
import Home from './pages/Home'
import { ThemeProvider } from './utils/theme'
import { UserProvider } from './utils/UserContext'

export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Home />
      </UserProvider>
    </ThemeProvider>
  )
}
