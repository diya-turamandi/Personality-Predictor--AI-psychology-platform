import React from 'react'
import { motion } from 'framer-motion'

const defaultEmojiMap = {
  Planning: '🗂️',
  Flow: '🌊',
  Alone: '🧘',
  Social: '🫂',
  Creative: '🎨',
  Analytical: '🧠'
}

function getOptionDisplay(opt) {
  if (typeof opt === 'string') return { value: opt, label: opt, emoji: defaultEmojiMap[opt] || '🔘' }
  return { value: opt.value ?? opt.label, label: opt.label ?? opt.value, emoji: opt.emoji ?? defaultEmojiMap[opt.label] ?? '🔘' }
}

export default function QuizCard({
  question = { id: 'q', text: 'Question', options: [] },
  selected,
  onSelect = () => {},
  onNext = () => {},
  index = 1,
  total = 1
}) {
  const opts = question.options.map(getOptionDisplay)

  return (
    <motion.article className="card quiz-card" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.45 }}>
      <header className="quiz-header">
        <div className="quiz-index">{index}/{total}</div>
        <h3 className="quiz-question">{question.text}</h3>
      </header>

      <div className="options-grid">
        {opts.map(opt => {
          const isSelected = selected === opt.value
          return (
            <motion.button
              key={opt.value}
              className={`option ${isSelected ? 'selected' : ''}`}
              onClick={() => onSelect(opt.value)}
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.02 }}
              aria-pressed={isSelected}
            >
              <div className="emoji">{opt.emoji}</div>
              <div className="opt-label">{opt.label}</div>
            </motion.button>
          )
        })}
      </div>

      <div className="quiz-actions">
        <button className="next-btn" onClick={onNext} disabled={!selected}>
          Next
        </button>
      </div>
    </motion.article>
  )
}
