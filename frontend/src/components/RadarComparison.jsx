import React, { useMemo } from 'react'
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
  Legend
} from 'recharts'

function buildRadarData(current = {}, previous = {}) {
  const currentTraits = (current.traits || []).map(t => ({ name: t.name, value: Number(t.value) || 0, color: t.color }))
  const prevMap = (previous.traits || []).reduce((acc, t) => {
    acc[t.name] = Number(t.value) || 0
    return acc
  }, {})

  return currentTraits.map(t => ({
    trait: t.name,
    current: t.value,
    previous: prevMap[t.name] ?? null,
    color: t.color
  }))
}

export default function RadarComparison({ result = null, previous = null }) {
  const data = useMemo(() => buildRadarData(result || {}, previous || {}), [result, previous])

  if (!result) return null

  return (
    <ResponsiveContainer width="100%" height={340}>
      <RadarChart data={data} outerRadius="75%">
        <PolarGrid strokeDasharray="3 3" />
        <PolarAngleAxis dataKey="trait" tick={{ fill: 'var(--muted)', fontSize: 12 }} />
        <PolarRadiusAxis angle={30} domain={[0, 100]} tickCount={6} tick={{ fill: 'var(--muted)', fontSize: 11 }} />
        <Radar name="Current" dataKey="current" stroke="var(--accent)" fill="var(--accent)" fillOpacity={0.22} />
        <Radar name="Previous" dataKey="previous" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.12} />
        <Tooltip formatter={value => (value === null ? '—' : `${value}%`)} wrapperStyle={{ background: 'var(--card)', color: 'var(--text)', borderRadius: 6 }} />
        <Legend verticalAlign="bottom" height={56} iconType="circle" formatter={value => <span style={{ color: 'var(--text)' }}>{value}</span>} />
      </RadarChart>
    </ResponsiveContainer>
  )
}
