import React, { useMemo, useState } from 'react'
import sampleQuestions from '../data/sampleData'
import { selectBalancedQuestions, QUIZ_CATEGORIES } from '../utils/questionSelector'

const personalityResults = {
  Introvert: {
    description: 'A thoughtful, reflective personality who values calm space and deep focus.',
    profile: 'Introvert',
    traits: [
      { name: 'Creativity', value: 40, color: '#ec4899', detail: 'Enjoys imaginative thinking in quiet moments.' },
      { name: 'Leadership', value: 30, color: '#6366f1', detail: 'Leads through thoughtful influence and example.' },
      { name: 'Teamwork', value: 45, color: '#14b8a6', detail: 'Prefers smaller or deeper collaborative settings.' },
      { name: 'Emotional Balance', value: 80, color: '#f59e0b', detail: 'Stays calm under pressure with steady focus.' },
      { name: 'Social Energy', value: 25, color: '#8b5cf6', detail: 'Recharges best in solitude or low-energy settings.' }
    ]
  },
  Extrovert: {
    description: 'An energetic, social personality who thrives in group interaction and conversation.',
    profile: 'Extrovert',
    traits: [
      { name: 'Creativity', value: 55, color: '#ec4899', detail: 'Brings bold ideas into conversation.' },
      { name: 'Leadership', value: 65, color: '#6366f1', detail: 'Energizes groups with clear direction.' },
      { name: 'Teamwork', value: 80, color: '#14b8a6', detail: 'Excels in collaborative and social settings.' },
      { name: 'Emotional Balance', value: 60, color: '#f59e0b', detail: 'Maintains composure while staying engaged.' },
      { name: 'Social Energy', value: 85, color: '#8b5cf6', detail: 'Refuels through social interaction and teamwork.' }
    ]
  },
  Ambivert: {
    description: 'A flexible personality that enjoys both quiet time and social activity.',
    profile: 'Ambivert',
    traits: [
      { name: 'Creativity', value: 55, color: '#ec4899', detail: 'Balances quiet inspiration with social expression.' },
      { name: 'Leadership', value: 50, color: '#6366f1', detail: 'Guides others with adaptable influence.' },
      { name: 'Teamwork', value: 65, color: '#14b8a6', detail: 'Enjoys group work while valuing personal space.' },
      { name: 'Emotional Balance', value: 70, color: '#f59e0b', detail: 'Moves smoothly between energy levels.' },
      { name: 'Social Energy', value: 60, color: '#8b5cf6', detail: 'Finds energy in both quiet and social moments.' }
    ]
  }
}

function buildResult(label, insights) {
  const content = personalityResults[label] || personalityResults.Ambivert
  const percentages = Object.fromEntries(content.traits.map(trait => [trait.name, trait.value]))

  return {
    label,
    description: content.description,
    profile: content.profile,
    traits: content.traits,
    percentages,
    insights: insights || {
      career_suggestions: [],
      communication_strengths: '',
      productivity_style: '',
      learning_style: ''
    }
  }
}

export default function PersonalityForm({ onPredict, userName }) {
  const [answers, setAnswers] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const selectedQuestions = useMemo(
    () => selectBalancedQuestions(sampleQuestions, {
      categories: QUIZ_CATEGORIES,
      total: 15
    }),
    []
  )

  const answeredCount = Object.keys(answers).length
  const progressPercent = Math.round((answeredCount / selectedQuestions.length) * 100)

  function handleChange(qId, value) {
    setAnswers(prev => ({ ...prev, [qId]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(answers)
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Prediction request failed')
      }

      const data = await response.json()
      onPredict(buildResult(data.personality_type, data.insights))
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <div className="form-header">
        <div>
          <h2>Quick questionnaire</h2>
          {userName && <p className="form-greeting">{userName}, let's get started!</p>}
        </div>
        {answeredCount > 0 && (
          <div className="progress-info">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
            </div>
            <span className="progress-text">{answeredCount} of {selectedQuestions.length} answered</span>
          </div>
        )}
      </div>
      {selectedQuestions.map(q => (
        <div key={q.id} className="question">
          <label>{q.text}</label>
          <select onChange={e => handleChange(q.id, e.target.value)} defaultValue="">
            <option value="" disabled>
              Select
            </option>
            {q.options.map(opt => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      ))}
      {error && <p style={{ color: '#dc2626' }}>{error}</p>}
      <div className="actions">
        <button type="submit" disabled={loading}>
          {loading ? 'Predicting...' : 'Predict'}
        </button>
      </div>
    </form>
  )
}
