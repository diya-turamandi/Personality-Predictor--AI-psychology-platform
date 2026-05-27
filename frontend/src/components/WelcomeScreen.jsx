import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { UserContext } from '../utils/UserContext'

export default function WelcomeScreen({ onStart }) {
  const { userName, setUserName } = useContext(UserContext)
  const [name, setName] = useState(userName)

  function handleSubmit(event) {
    event.preventDefault()
    const trimmedName = name.trim()
    if (trimmedName) {
      setUserName(trimmedName)
      onStart(trimmedName)
    }
  }

  return (
    <section className="welcome-screen">
      <div className="container welcome-inner">
        <motion.div
          className="welcome-copy"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Welcome to Personality AI</p>
          <h1 className="welcome-title">Ready to discover your unique strengths?</h1>
          <p className="welcome-text">
            Tell us your name to create a personalized quiz experience. The quiz is quick, modern, and tuned to reveal your personality style.
          </p>
        </motion.div>

        <motion.form
          className="welcome-card"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="welcome-form-group">
            <label htmlFor="player-name">Enter your name</label>
            <div className="input-wrap">
              <input
                id="player-name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Your name here"
                className="animated-input"
                autoComplete="name"
              />
            </div>
          </div>

          <button type="submit" className="start-button" disabled={!name.trim()}>
            Start Quiz
          </button>
        </motion.form>
      </div>
    </section>
  )
}
