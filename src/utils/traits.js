/**
 * computeTraits
 *
 * Inputs:
 *  - answers: { [questionId]: selectedOption }
 *  - questions: [ { id, traitMapping } ]
 *      where traitMapping: { optionText: { creativity: number, leadership: number, teamwork: number, emotionalBalance: number, socialEnergy: number } }
 *
 * Output:
 *  { creativity: %, leadership: %, teamwork: %, emotionalBalance: %, socialEnergy: % }
 *
 * Beginner-friendly, reusable function that sums weights per trait and normalizes to percentages.
 */
export function computeTraits(answers = {}, questions = []) {
  const traits = ['creativity', 'leadership', 'teamwork', 'emotionalBalance', 'socialEnergy']

  // initialize totals
  const totals = {}
  for (const t of traits) totals[t] = 0

  // accumulate weights from each answered question
  for (const q of questions) {
    const chosen = answers[q.id]
    if (!chosen) continue
    const mapping = (q.traitMapping && q.traitMapping[chosen]) || null
    if (!mapping) continue
    for (const t of traits) {
      totals[t] += Number(mapping[t] || 0)
    }
  }

  const sum = Object.values(totals).reduce((a, b) => a + b, 0)

  // if no data, return even distribution
  if (sum === 0) {
    const even = Math.floor(100 / traits.length)
    const result = {}
    for (let i = 0; i < traits.length; i++) {
      result[traits[i]] = i === traits.length - 1 ? 100 - even * (traits.length - 1) : even
    }
    return result
  }

  // compute raw percentages
  const raw = {}
  for (const t of traits) raw[t] = (totals[t] / sum) * 100

  // round and normalize so sum is exactly 100
  const rounded = {}
  let running = 0
  for (let i = 0; i < traits.length; i++) {
    const t = traits[i]
    if (i < traits.length - 1) {
      rounded[t] = Math.round(raw[t])
      running += rounded[t]
    } else {
      // last trait gets the remainder to ensure sum 100
      rounded[t] = 100 - running
    }
  }

  return rounded
}

export default computeTraits
