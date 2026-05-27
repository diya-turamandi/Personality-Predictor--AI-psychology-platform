/**
 * analyzeMood
 *
 * Inputs (object):
 *  - sleepHours: number (hours slept last night)
 *  - stressLevel: number (0-10, 10 = very stressed)
 *  - socialActivityLevel: number (0-10, 10 = very social/active)
 *  - currentMood: string or number (friendly strings like 'happy','sad' or a 0-10 score)
 *
 * Output: {
 *   baseline: 'Introvert'|'Extrovert'|'Ambivert',
 *   currentBehavior: 'Introverted'|'Extroverted'|'Ambiverted',
 *   socialEnergyScore: number (0-10),
 *   message: string, // human-friendly analysis
 *   suggestions: string[]
 * }
 *
 * This is intentionally simple, readable, and easy to adjust.
 */

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n))
}

function moodToScore(mood) {
  if (typeof mood === 'number') return clamp(mood, 0, 10)
  const m = String(mood || '').toLowerCase()
  const map = {
    excited: 9,
    happy: 8,
    content: 7,
    calm: 7,
    neutral: 5,
    tired: 3,
    anxious: 2,
    sad: 2,
    angry: 1
  }
  return map[m] ?? 5
}

export function analyzeMood({ sleepHours = 8, stressLevel = 5, socialActivityLevel = 5, currentMood = 'neutral' } = {}) {
  // normalize inputs
  const sleep = clamp(Number(sleepHours) || 0, 0, 24)
  const stress = clamp(Number(stressLevel) || 0, 0, 10)
  const social = clamp(Number(socialActivityLevel) || 0, 0, 10)
  const moodScore = moodToScore(currentMood)

  // baseline personality inferred from social activity alone (simple heuristic)
  let baseline = 'Ambivert'
  if (social >= 7) baseline = 'Extrovert'
  else if (social <= 3) baseline = 'Introvert'

  // compute simple social energy score (0-10)
  // weights: social activity 50%, sleep 20%, stress inverse 20%, mood 10%
  const sleepFactor = clamp(sleep / 8, 0, 1) * 10 // 0-10
  const stressInverse = (10 - stress) // 0-10

  const socialEnergyRaw = (social * 0.5) + (sleepFactor * 0.2) + (stressInverse * 0.2) + (moodScore * 0.1)
  const socialEnergy = clamp(socialEnergyRaw, 0, 10)

  // interpret current behavior
  let currentBehavior = 'Ambiverted'
  if (socialEnergy >= 6) currentBehavior = 'Extroverted'
  else if (socialEnergy <= 4) currentBehavior = 'Introverted'

  // gather main contributing factors
  const reasons = []
  if (sleep < 6) reasons.push('low sleep')
  if (stress >= 7) reasons.push('high stress')
  if (social <= 3) reasons.push('low social activity')
  if (moodScore <= 3) reasons.push('low mood')

  const reasonText = reasons.length ? reasons.join(' and ') : 'normal energy levels'

  // message generation (simple, human-friendly)
  let message = `You appear ${currentBehavior.toLowerCase()}.`
  if (baseline !== currentBehavior.replace('ed', '')) {
    // phrasing like example: "You are naturally extroverted, but current behavior appears introverted due to..."
    const baseWord = baseline.toLowerCase()
    const currentWord = currentBehavior.toLowerCase()
    message = `You are naturally ${baseWord}, but current behavior appears ${currentWord} due to ${reasonText}.`
  } else {
    message = `Your baseline is ${baseline.toLowerCase()} and current behavior matches that: ${currentBehavior.toLowerCase()}.` + (reasons.length ? ` Key factors: ${reasonText}.` : '')
  }

  // friendly suggestions
  const suggestions = []
  if (sleep < 7) suggestions.push('Try to get a bit more sleep (7-8 hours) to improve energy.')
  if (stress >= 6) suggestions.push('Do a short stress-reduction exercise (breathing, short walk).')
  if (social <= 4 && currentBehavior === 'Introverted') suggestions.push('If you want more social energy, plan a low-pressure meetup with one friend.')
  if (moodScore <= 4) suggestions.push('Take a small mood-boost activity you enjoy (music, short hobby session).')
  if (!suggestions.length) suggestions.push('Keep up your routine — you seem balanced right now.')

  return {
    baseline,
    currentBehavior,
    socialEnergyScore: Math.round(socialEnergy * 10) / 10,
    message,
    suggestions
  }
}

export default analyzeMood
