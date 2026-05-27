export const QUIZ_CATEGORIES = [
  'introversion',
  'extroversion',
  'leadership',
  'creativity',
  'teamwork'
]

const RECENT_QUESTION_STORAGE_KEY = 'recentQuizQuestionIds'
const DEFAULT_RECENT_LIMIT = 30

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5)
}

function hasLocalStorage() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined'
}

function loadRecentQuestionIds(storageKey = RECENT_QUESTION_STORAGE_KEY) {
  if (!hasLocalStorage()) return []

  try {
    const raw = window.localStorage.getItem(storageKey)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function saveRecentQuestionIds(ids, storageKey = RECENT_QUESTION_STORAGE_KEY) {
  if (!hasLocalStorage()) return

  try {
    const uniqueIds = Array.from(new Set(ids)).slice(0, DEFAULT_RECENT_LIMIT)
    window.localStorage.setItem(storageKey, JSON.stringify(uniqueIds))
  } catch {
    // ignore storage errors
  }
}

function updateRecentQuestionIds(selectedIds, options = {}) {
  const {
    storageKey = RECENT_QUESTION_STORAGE_KEY,
    recentLimit = DEFAULT_RECENT_LIMIT
  } = options

  if (!hasLocalStorage()) return

  const history = loadRecentQuestionIds(storageKey)
  const combined = [...selectedIds, ...history]
  const uniqueIds = Array.from(new Set(combined)).slice(0, recentLimit)
  saveRecentQuestionIds(uniqueIds, storageKey)
}

function buildCategoryBuckets(questionBank, categories) {
  const buckets = categories.reduce((acc, category) => {
    acc[category] = []
    return acc
  }, {})

  for (const question of questionBank) {
    const category = question.category || 'uncategorized'
    if (buckets[category]) {
      buckets[category].push(question)
    }
  }

  return buckets
}

function filterRecentlyUsedQuestions(questionBank, options) {
  const {
    recentLimit = DEFAULT_RECENT_LIMIT,
    storageKey = RECENT_QUESTION_STORAGE_KEY,
    total = 15
  } = options

  const recentIds = loadRecentQuestionIds(storageKey)
  const available = questionBank.filter(q => !recentIds.includes(q.id))
  const shouldReset = available.length < total

  return {
    questions: shouldReset ? [...questionBank] : available,
    reset: shouldReset
  }
}

export function selectBalancedQuestions(questionBank, options = {}) {
  const {
    categories = QUIZ_CATEGORIES,
    total = 15,
    useRecentHistory = true,
    recentLimit = DEFAULT_RECENT_LIMIT,
    storageKey = RECENT_QUESTION_STORAGE_KEY
  } = options

  if (!Array.isArray(questionBank)) {
    throw new Error('Question bank must be an array.')
  }

  if (total < 1) {
    throw new Error('Total questions must be at least 1.')
  }

  if (total > questionBank.length) {
    throw new Error('Requested more questions than are available in the bank.')
  }

  const questionPool = useRecentHistory
    ? filterRecentlyUsedQuestions(questionBank, { recentLimit, storageKey, total })
    : { questions: [...questionBank], reset: false }

  const chosenCategories = categories.filter(Boolean)
  const buckets = buildCategoryBuckets(questionPool.questions, chosenCategories)

  const availableCategories = chosenCategories.filter(
    category => buckets[category] && buckets[category].length > 0
  )

  const selected = []

  if (availableCategories.length === 0) {
    selected.push(...shuffleArray(questionPool.questions).slice(0, total))
  } else {
    availableCategories.forEach(category => {
      buckets[category] = shuffleArray(buckets[category])
    })

    const categoryCount = availableCategories.length

    if (total < categoryCount) {
      const shuffledCategories = shuffleArray(availableCategories)
      for (let i = 0; i < total; i++) {
        const category = shuffledCategories[i]
        selected.push(buckets[category].shift())
      }
    } else {
      const baseCount = Math.floor(total / categoryCount)
      let remainder = total - baseCount * categoryCount

      for (const category of availableCategories) {
        const count = Math.min(baseCount, buckets[category].length)
        selected.push(...buckets[category].splice(0, count))
      }

      const shuffledCategories = shuffleArray(availableCategories)
      while (remainder > 0 && shuffledCategories.length > 0) {
        for (const category of shuffledCategories) {
          if (remainder === 0) break
          if (buckets[category].length > 0) {
            selected.push(buckets[category].shift())
            remainder -= 1
          }
        }
        if (shuffledCategories.every(category => buckets[category].length === 0)) break
      }
    }

    const leftovers = shuffleArray(
      Object.values(buckets).flat().filter(Boolean)
    )

    while (selected.length < total && leftovers.length > 0) {
      selected.push(leftovers.shift())
    }
  }

  const finalSelection = shuffleArray(selected)

  if (useRecentHistory) {
    const selectedIds = finalSelection.map(q => q.id)
    updateRecentQuestionIds(selectedIds, { storageKey, recentLimit })
  }

  return finalSelection
}

export default selectBalancedQuestions
