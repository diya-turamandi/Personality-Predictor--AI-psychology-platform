// Simple trend analysis utilities for personality history
// Exports beginner-friendly functions to aggregate trait series,
// compute simple linear trends, and generate human-readable insights.

function parseDate(d) {
  return new Date(d)
}

export function aggregateTraitSeries(history = []) {
  // returns { timestamps: [...ISO], seriesByTrait: { traitName: [values...] } }
  const sorted = [...history].sort((a, b) => new Date(a.date) - new Date(b.date))
  const timestamps = sorted.map(entry => entry.date)
  const seriesByTrait = {}

  for (const entry of sorted) {
    const traits = entry.traits || []
    for (const t of traits) {
      if (!seriesByTrait[t.name]) seriesByTrait[t.name] = []
      seriesByTrait[t.name].push({ date: entry.date, value: Number(t.value) || 0 })
    }
  }

  return { timestamps, seriesByTrait }
}

function linearSlope(points) {
  // points: [{x: time (ms), y: value}]
  if (points.length < 2) return 0
  const n = points.length
  const xs = points.map(p => p.x)
  const ys = points.map(p => p.y)
  const meanX = xs.reduce((a, b) => a + b, 0) / n
  const meanY = ys.reduce((a, b) => a + b, 0) / n
  let num = 0
  let den = 0
  for (let i = 0; i < n; i++) {
    const dx = xs[i] - meanX
    num += dx * (ys[i] - meanY)
    den += dx * dx
  }
  if (den === 0) return 0
  return num / den
}

export function computeTraitTrends(history = []) {
  const { seriesByTrait } = aggregateTraitSeries(history)
  const trends = {}
  for (const [name, points] of Object.entries(seriesByTrait)) {
    const converted = points.map(p => ({ x: parseDate(p.date).getTime(), y: Number(p.value) || 0 }))
    const slope = linearSlope(converted)
    const first = converted[0] ? converted[0].y : 0
    const last = converted[converted.length - 1] ? converted[converted.length - 1].y : 0
    trends[name] = {
      name,
      slope,
      first,
      last,
      change: last - first,
      points: converted
    }
  }
  return trends
}

export function generateInsights(history = []) {
  if (!Array.isArray(history) || history.length === 0) return ['No history available to generate insights.']
  const trends = computeTraitTrends(history)
  const insights = []

  // Detect label change over time
  const labels = history.map(h => (h.label || h.personality || h.profile || '').trim()).filter(Boolean)
  const firstLabel = labels[0]
  const lastLabel = labels[labels.length - 1]
  if (firstLabel && lastLabel && firstLabel !== lastLabel) {
    insights.push(`Your dominant personality shifted from ${firstLabel} to ${lastLabel} over time.`)
  } else if (firstLabel) {
    insights.push(`Your dominant personality remained ${lastLabel} across recorded attempts.`)
  }

  // Highlight largest trait changes
  const changes = Object.values(trends).map(t => ({ name: t.name, change: t.change }))
    .sort((a, b) => Math.abs(b.change) - Math.abs(a.change))

  const top = changes.slice(0, 3)
  for (const t of top) {
    if (Math.abs(t.change) < 3) continue
    const dir = t.change > 0 ? 'increased' : 'decreased'
    insights.push(`Trait ${t.name} has ${dir} by ${Math.abs(Math.round(t.change))} points since your first attempt.`)
  }

  if (insights.length === 0) insights.push('No significant changes detected across recorded attempts.')

  // Friendly tip
  insights.push('Tip: take the quiz periodically to track how life events influence your traits.')

  return insights
}

export default {
  aggregateTraitSeries,
  computeTraitTrends,
  generateInsights
}
