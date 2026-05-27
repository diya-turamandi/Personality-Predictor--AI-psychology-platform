const HISTORY_STORAGE_KEY = 'personalityHistory'
const MAX_HISTORY_ENTRIES = 20

export function analyzeMood(traits = []) {
  if (!Array.isArray(traits) || traits.length === 0) return 'Neutral'

  const emotionalBalance = traits.find(t => t.name === 'Emotional Balance')?.value || 0
  const socialEnergy = traits.find(t => t.name === 'Social Energy')?.value || 0

  if (emotionalBalance > 70 && socialEnergy > 70) return 'Vibrant'
  if (emotionalBalance > 70 && socialEnergy < 40) return 'Calm'
  if (emotionalBalance < 40 && socialEnergy > 70) return 'Energetic'
  if (emotionalBalance < 40 && socialEnergy < 40) return 'Reflective'
  return 'Balanced'
}

export function createHistoryEntry(result, userName = '') {
  return {
    id: Date.now(),
    userName: userName,
    date: new Date().toISOString(),
    timestamp: new Date().toLocaleString(),
    personality: result.label,
    profile: result.profile,
    description: result.description,
    traits: result.traits.map(trait => ({
      name: trait.name,
      value: trait.value,
      color: trait.color
    })),
    scores: Object.fromEntries(result.traits.map(trait => [trait.name, trait.value])),
    mood: analyzeMood(result.traits)
  }
}

export function saveToHistory(entry) {
  try {
    const existing = getHistory()
    const updated = [entry, ...existing].slice(0, MAX_HISTORY_ENTRIES)
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(updated))
    return true
  } catch (error) {
    console.error('Failed to save history:', error)
    return false
  }
}

export function getHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch (error) {
    console.error('Failed to load history:', error)
    return []
  }
}

export function clearHistory() {
  try {
    localStorage.removeItem(HISTORY_STORAGE_KEY)
    return true
  } catch (error) {
    console.error('Failed to clear history:', error)
    return false
  }
}

export function getHistoryByUserName(userName) {
  if (!userName) return []
  const history = getHistory()
  return history.filter(entry => entry.userName === userName)
}

export function getLatestEntry() {
  const history = getHistory()
  return history.length > 0 ? history[0] : null
}

export function deleteHistoryEntry(entryId) {
  try {
    const existing = getHistory()
    const updated = existing.filter(entry => entry.id !== entryId)
    if (updated.length < existing.length) {
      localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(updated))
      return true
    }
    return false
  } catch (error) {
    console.error('Failed to delete entry:', error)
    return false
  }
}
