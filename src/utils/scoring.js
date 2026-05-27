/**
 * computePersonality
 *
 * Inputs:
 *  - answers: object mapping questionId -> selectedOption (string)
 *  - questions: array of question objects with a `scoreMapping` property
 *      scoreMapping: { optionText: { introvert: number, extrovert: number } }
 *  - opts: optional settings { ambivertWeight: number }
 *
 * Output:
 *  { introvert: number, extrovert: number, ambivert: number, label: string }
 *  percentages sum to ~100
 */
export function computePersonality(answers = {}, questions = [], opts = {}) {
  const ambivertWeightScale = typeof opts.ambivertWeight === 'number' ? opts.ambivertWeight : 0.6

  let rawIntro = 0
  let rawExt = 0

  for (const q of questions) {
    const chosen = answers[q.id]
    if (!chosen) continue
    const mapping = q.scoreMapping || {}
    const score = mapping[chosen]
    if (!score) continue
    rawIntro += Number(score.introvert || 0)
    rawExt += Number(score.extrovert || 0)
  }

  const totalRaw = rawIntro + rawExt

  // If no answers or no scoring info, return neutral (ambivert)
  if (totalRaw === 0) {
    return {
      introvert: 33,
      extrovert: 33,
      ambivert: 34,
      label: 'Ambivert'
    }
  }

  const introBase = rawIntro / totalRaw
  const extBase = rawExt / totalRaw

  // balance factor: 1 when perfectly balanced, 0 when fully skewed
  const balanceFactor = 1 - Math.abs(introBase - extBase)

  const ambivert = balanceFactor * ambivertWeightScale
  const remaining = Math.max(0, 1 - ambivert)

  const introPercent = introBase * remaining * 100
  const extPercent = extBase * remaining * 100
  const ambivertPercent = ambivert * 100

  // Normalize to ensure sum is 100 (small float correction)
  const sum = introPercent + extPercent + ambivertPercent
  const normalizeFactor = 100 / sum

  const intro = Math.round(introPercent * normalizeFactor)
  const ext = Math.round(extPercent * normalizeFactor)
  // assign remainder to ambivert to guarantee sum 100
  const amb = 100 - intro - ext

  let label = 'Ambivert'
  if (amb >= 50) label = 'Ambivert'
  else if (intro > ext) label = 'Introvert'
  else label = 'Extrovert'

  return {
    introvert: intro,
    extrovert: ext,
    ambivert: amb,
    label
  }
}

export default computePersonality
