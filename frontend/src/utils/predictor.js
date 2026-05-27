const traitMeta = {
  Creativity: {
    color: '#ec4899',
    description: 'Inventive, expressive, and inspired.',
    detail: 'You spot new possibilities and enjoy working with original ideas.'
  },
  Leadership: {
    color: '#6366f1',
    description: 'Decisive, motivating, and strategic.',
    detail: 'You take initiative and guide others with confidence and clarity.'
  },
  Teamwork: {
    color: '#14b8a6',
    description: 'Cooperative, reliable, and supportive.',
    detail: 'You thrive in collaborative environments and help teams succeed.'
  },
  'Emotional Balance': {
    color: '#f59e0b',
    description: 'Calm, grounded, and resilient.',
    detail: 'You stay composed under pressure and understand your emotional rhythm.'
  },
  'Social Energy': {
    color: '#8b5cf6',
    description: 'Engaging, warm, and people-focused.',
    detail: 'You draw energy from social connection and enjoy building rapport.'
  }
}

const personalityDescriptions = {
  Creativity: 'A creative force, energized by expression, innovation, and bold ideas.',
  Leadership: 'A natural leader who inspires others with direction, clarity, and confidence.',
  Teamwork: 'A collaborative partner who values support, communication, and shared results.',
  'Emotional Balance': 'A steady presence who handles emotions with grace and self-awareness.',
  'Social Energy': 'A magnetic personality who brings warmth, enthusiasm, and social connection.'
}

export function predictPersonality(answers = {}) {
  const score = {
    Creativity: 0,
    Leadership: 0,
    Teamwork: 0,
    'Emotional Balance': 0,
    'Social Energy': 0
  }

  if (answers.q1 === 'Planning') {
    score.Leadership += 1
    score.Teamwork += 1
  }

  if (answers.q1 === 'Flow') {
    score.Creativity += 1
    score['Social Energy'] += 1
  }

  if (answers.q2 === 'Alone') {
    score['Emotional Balance'] += 1
    score.Creativity += 1
  }

  if (answers.q2 === 'Social') {
    score['Social Energy'] += 1
    score.Teamwork += 1
  }

  if (answers.q3 === 'Creative') {
    score.Creativity += 1
    score['Emotional Balance'] += 1
  }

  if (answers.q3 === 'Analytical') {
    score.Leadership += 1
    score.Teamwork += 1
  }

  const total = Object.values(score).reduce((sum, value) => sum + value, 0)
  const normalized = total
    ? Object.fromEntries(
        Object.entries(score).map(([name, value]) => [name, Math.round((value / total) * 100)])
      )
    : {
        Creativity: 20,
        Leadership: 20,
        Teamwork: 20,
        'Emotional Balance': 20,
        'Social Energy': 20
      }

  const traits = Object.entries(normalized).map(([name, value]) => ({
    name,
    value,
    color: traitMeta[name].color,
    detail: traitMeta[name].detail,
    description: traitMeta[name].description
  }))

  const topTrait = traits.slice().sort((a, b) => b.value - a.value)[0]
  const label = topTrait?.name || 'Balanced'

  const profile = normalized['Social Energy'] >= 35
    ? 'Extrovert'
    : normalized['Social Energy'] <= 25 && normalized['Emotional Balance'] >= 30
    ? 'Introvert'
    : 'Ambivert'

  return {
    label,
    description: personalityDescriptions[label],
    profile,
    traits,
    percentages: normalized
  }
}
