import React from 'react'
import { motion } from 'framer-motion'

export default function Landing({ userName }) {
  const scrollToQuiz = () => {
    const el = document.getElementById('quiz')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="hero">
      <div className="container hero-inner">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="eyebrow">Discover Yourself</p>
          <h1 className="hero-title">AI Personality Predictor</h1>
          <p className="hero-sub">
            {userName ? `Hey ${userName}, jump into a personalized quiz designed to uncover your strengths.` : 'Quick, friendly insights powered by lightweight AI heuristics. Take a short quiz and discover your personality tendencies.'}
          </p>
          <motion.button className="cta" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={scrollToQuiz}>
            Start the quiz
          </motion.button>
        </motion.div>

        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <div className="orb" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  )
}
