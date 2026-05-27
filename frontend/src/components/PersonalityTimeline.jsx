import React, { useMemo } from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'
import { aggregateTraitSeries } from '../utils/trendAnalyzer'

function buildChartRows(history, traitNames) {
  const series = aggregateTraitSeries(history)
  const timestamps = series.timestamps
  const rawByTrait = series.seriesByTrait

  const rows = timestamps.map(ts => {
    const row = { time: new Date(ts).toLocaleDateString() }
    for (const name of traitNames) {
      const pts = rawByTrait[name] || []
      const found = pts.find(p => p.date === ts)
      row[name] = found ? Number(found.value) : null
    }
    return row
  })

  return rows
}

export default function PersonalityTimeline({ history = [], traitNames = [] }) {
  const rows = useMemo(() => buildChartRows(history, traitNames), [history, traitNames])

  if (!history || history.length < 2) {
    return <p className="muted-text">Take at least two quizzes to see timeline charts.</p>
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={rows} margin={{ top: 10, right: 24, left: 0, bottom: 6 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--muted)" />
        <XAxis dataKey="time" tick={{ fill: 'var(--muted)' }} />
        <YAxis domain={[0, 100]} tick={{ fill: 'var(--muted)' }} />
        <Tooltip wrapperStyle={{ background: 'var(--card)', color: 'var(--text)', borderRadius: 8 }} />
        <Legend wrapperStyle={{ color: 'var(--muted)' }} />
        {traitNames.map(name => (
          <Line key={name} type="monotone" dataKey={name} strokeWidth={2} strokeOpacity={1} dot={{ r: 3 }} connectNulls />
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
}
