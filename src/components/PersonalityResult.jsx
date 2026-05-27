import React, { useContext, useMemo, useState } from 'react'
import { UserContext } from '../utils/UserContext'
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts'
import { aggregateTraitSeries, computeTraitTrends, generateInsights } from '../utils/trendAnalyzer'
import PersonalityTimeline from './PersonalityTimeline'
import RadarComparison from './RadarComparison'

const traitHighlights = {
  Creativity: ['Visionary', 'Inventive', 'Expressive'],
  Leadership: ['Bold', 'Strategic', 'Commanding'],
  Teamwork: ['Collaborative', 'Supportive', 'Reliable'],
  'Emotional Balance': ['Calm', 'Grounded', 'Resilient'],
  'Social Energy': ['Outgoing', 'Warm', 'Vibrant']
}

const avatarMeta = {
  Introvert: {
    title: 'Quiet Innovator',
    description: 'You recharge internally, preferring calm reflection and thoughtful idea-building.',
    accent: '#8b5cf6',
    gradient: ['#312e81', '#7c3aed']
  },
  Extrovert: {
    title: 'Vibrant Connector',
    description: 'You thrive in energy-filled spaces and excel when working with others.',
    accent: '#f59e0b',
    gradient: ['#f97316', '#facc15']
  },
  Ambivert: {
    title: 'Balanced Explorer',
    description: 'You navigate between solitude and social energy with ease and adaptability.',
    accent: '#14b8a6',
    gradient: ['#0f766e', '#22c55e']
  }
}

function AvatarIllustration({ type }) {
  const data = avatarMeta[type]

  return (
    <div className="avatar-illustration" style={{ background: `linear-gradient(135deg, ${data.gradient[0]}, ${data.gradient[1]})` }}>
      <svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={`${type} avatar`}>
        <circle cx="140" cy="140" r="120" fill="rgba(255,255,255,0.12)" />
        <circle cx="140" cy="140" r="72" fill="rgba(255,255,255,0.18)" />
        <path d="M95 170 C105 140 140 120 175 146" stroke="white" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.9" />
        <path d="M115 160 C135 190 170 190 195 160" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.75" />
        <circle cx="105" cy="110" r="18" fill="white" opacity="0.9" />
        <circle cx="175" cy="110" r="18" fill="white" opacity="0.9" />
        <circle cx="105" cy="110" r="8" fill="rgba(0,0,0,0.65)" />
        <circle cx="175" cy="110" r="8" fill="rgba(0,0,0,0.65)" />
        <g opacity="0.3">
          <circle cx="60" cy="60" r="22" fill="white" />
          <circle cx="220" cy="70" r="16" fill="white" />
          <circle cx="65" cy="210" r="14" fill="white" />
        </g>
      </svg>
    </div>
  )
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short'
  })
}

export default function PersonalityResult({ result, history, onClearHistory }) {
  const { userName } = useContext(UserContext)
  const [searchName, setSearchName] = useState('')
  const [filterLabel, setFilterLabel] = useState('All')
  
  const charts = useMemo(() => {
    if (!result) return { radar: [], pie: [] }

    return {
      radar: result.traits.map(trait => ({ trait: trait.name, value: trait.value })),
      pie: result.traits.map(trait => ({ name: trait.name, value: trait.value, color: trait.color }))
    }
  }, [result])

  const hasHistory = Array.isArray(history) && history.length > 0

  const availableLabels = useMemo(() => {
    if (!hasHistory) return ['All']
    const labels = Array.from(new Set(history.map(e => e.label || e.personality || e.profile).filter(Boolean)))
    return ['All', ...labels]
  }, [history, hasHistory])

  const filteredHistory = useMemo(() => {
    if (!hasHistory) return []
    const nameQuery = searchName.trim().toLowerCase()
    return history.filter(entry => {
      const entryName = (entry.userName || '').toLowerCase()
      const matchesName = nameQuery === '' || entryName.includes(nameQuery)
      const entryLabel = (entry.label || entry.personality || entry.profile || '').toLowerCase()
      const matchesLabel = filterLabel === 'All' || entryLabel === filterLabel.toLowerCase()
      return matchesName && matchesLabel
    })
  }, [history, searchName, filterLabel, hasHistory])
  if (!result && !hasHistory) return null

  if (!result) {
    return (
      <section className="dashboard result">
        <div className="dashboard-row history-grid">
          <div className="card history-card">
            <div className="card-header">
              <div>
                <p className="eyebrow">Test history</p>
                <h3>
                  {userName ? `${userName}, your previous insights` : 'Previous personality results'}
                </h3>
              </div>
              <div className="history-controls">
                <input
                  type="search"
                  placeholder="Search by name"
                  value={searchName}
                  onChange={e => setSearchName(e.target.value)}
                  aria-label="Search by user name"
                />
                <select value={filterLabel} onChange={e => setFilterLabel(e.target.value)} aria-label="Filter by personality">
                  {availableLabels.map(lbl => (
                    <option key={lbl} value={lbl}>{lbl}</option>
                  ))}
                </select>
                <button type="button" className="history-clear" onClick={onClearHistory}>
                  Clear history
                </button>
              </div>
            </div>
            <div className="history-list">
              {filteredHistory.length === 0 ? (
                <p className="muted-text">No matching history entries.</p>
              ) : (
                filteredHistory.map(entry => (
                  <article key={entry.id} className="history-item">
                    <div className="history-meta">
                      <span>{formatDate(entry.date)}</span>
                      <span className="history-label">{entry.label || entry.personality || entry.profile}</span>
                    </div>
                    <div className="history-scores">
                      {entry.traits.map(trait => (
                        <div key={trait.name} className="history-score">
                          <span>{trait.name}</span>
                          <span>{trait.value}%</span>
                        </div>
                      ))}
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }

  const topTraits = [...result.traits].sort((a, b) => b.value - a.value).slice(0, 3)

  const avatar = avatarMeta[result.profile || 'Ambivert']
  const insights = result.insights || {
    career_suggestions: [],
    communication_strengths: '',
    productivity_style: '',
    learning_style: ''
  }

  return (
    <section className="dashboard result">
      <div className="dashboard-greeting">
        {userName && (
          <div className="greeting-banner">
            <h2>Welcome back, {userName}!</h2>
            <p>Here are your behavioral trends and personality insights.</p>
          </div>
        )}
      </div>
      <div className="dashboard-row summary-grid">
        <div className="card type-card">
          <div className="avatar-panel">
            <div className="avatar-badge">{result.profile}</div>
            <AvatarIllustration type={result.profile} />
            <div className="avatar-copy">
              <h3>{avatar.title}</h3>
              <p>{avatar.description}</p>
            </div>
          </div>
          <div className="type-pill">Personality Type</div>
          <h2>{result.label}</h2>
          <p className="dashboard-copy">{result.description}</p>
          <div className="badge-row">
            {topTraits.map(trait => (
              <span key={trait.name} className="trait-pill" style={{ borderColor: trait.color }}>
                {trait.name}
              </span>
            ))}
          </div>
          <div className="trait-summary-grid">
            {topTraits.map(trait => (
              <div key={trait.name} className="trait-summary-card">
                <p className="trait-name">{trait.name}</p>
                <p className="trait-detail">{trait.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card strengths-card">
          <div className="card-header">
            <div>
              <p className="eyebrow">Strength profile</p>
              <h3>Trait intensity</h3>
            </div>
            <p className="muted-text">Animated progress bars reveal your strongest dimensions.</p>
          </div>
          <div className="progress-list">
            {result.traits.map(trait => (
              <div key={trait.name} className="progress-item">
                <div className="progress-head">
                  <span>{trait.name}</span>
                  <span>{trait.value}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${trait.value}%`, background: trait.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="dashboard-row insights-grid">
        <div className="card insight-card">
          <div className="card-header">
            <div>
              <p className="eyebrow">AI insights</p>
              <h3>Personalized guidance</h3>
            </div>
          </div>
          <div className="insight-block">
            <p className="insight-title">Career suggestions</p>
            <ul className="insight-list">
              {insights.career_suggestions.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="insight-block">
            <p className="insight-title">Communication strengths</p>
            <p>{insights.communication_strengths}</p>
          </div>
          <div className="insight-block grid-2">
            <div>
              <p className="insight-title">Productivity style</p>
              <p>{insights.productivity_style}</p>
            </div>
            <div>
              <p className="insight-title">Learning style</p>
              <p>{insights.learning_style}</p>
            </div>
          </div>
        </div>
      </div>

      {hasHistory && (
        <div className="dashboard-row history-grid">
          <div className="card history-card">
            <div className="card-header">
              <div>
                <p className="eyebrow">Test history</p>
                <h3>
                  {userName ? `${userName}'s previous insights` : 'Previous personality results'}
                </h3>
              </div>
              <div className="history-controls">
                <input
                  type="search"
                  placeholder="Search by name"
                  value={searchName}
                  onChange={e => setSearchName(e.target.value)}
                  aria-label="Search by user name"
                />
                <select value={filterLabel} onChange={e => setFilterLabel(e.target.value)} aria-label="Filter by personality">
                  {availableLabels.map(lbl => (
                    <option key={lbl} value={lbl}>{lbl}</option>
                  ))}
                </select>
                <button type="button" className="history-clear" onClick={onClearHistory}>
                  Clear history
                </button>
              </div>
            </div>
            <div className="history-list">
              {filteredHistory.length === 0 ? (
                <p className="muted-text">No matching history entries.</p>
              ) : (
                filteredHistory.map(entry => (
                  <article key={entry.id} className="history-item">
                    <div className="history-meta">
                      <span>{formatDate(entry.date)}</span>
                      <span className="history-label">{entry.label || entry.personality || entry.profile}</span>
                    </div>
                    <div className="history-scores">
                      {entry.traits.map(trait => (
                        <div key={trait.name} className="history-score">
                          <span>{trait.name}</span>
                          <span>{trait.value}%</span>
                        </div>
                      ))}
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      <div className="dashboard-row charts-grid">
        <div className="card chart-card">
          <div className="card-header">
            <div>
              <p className="eyebrow">Radar view</p>
              <h3>Traits at a glance</h3>
            </div>
          </div>
          <div style={{ width: '100%', height: 340 }}>
            <RadarComparison result={result} previous={history && history[1]} />
          </div>
        </div>

        <div className="card chart-card">
          <div className="card-header">
            <div>
              <p className="eyebrow">Percentage mix</p>
              <h3>Personality composition</h3>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={340}>
            <PieChart>
              <Pie
                data={charts.pie}
                dataKey="value"
                nameKey="name"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={4}
                cornerRadius={12}
              >
                {charts.pie.map(slice => (
                  <Cell key={slice.name} fill={slice.color} />
                ))}
              </Pie>
              <Tooltip formatter={value => `${value}%`} wrapperStyle={{ fontSize: 13 }} />
              <Legend verticalAlign="bottom" height={56} iconType="circle" formatter={value => <span style={{ color: 'var(--text)' }}>{value}</span>} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="dashboard-row trends-grid">
        <div className="card trend-card">
          <div className="card-header">
            <div>
              <p className="eyebrow">Trends</p>
              <h3>Trait trends over time</h3>
            </div>
          </div>
          <div style={{ height: 300 }}>
            <PersonalityTimeline history={history} traitNames={topTraits.map(t => t.name)} />
          </div>
        </div>

        <div className="card insight-card">
          <div className="card-header">
            <div>
              <p className="eyebrow">Trends summary</p>
              <h3>AI-style insights</h3>
            </div>
          </div>
          <div className="insight-list">
            {generateInsights(history).map((insight, i) => (
              <p key={i}>{insight}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
