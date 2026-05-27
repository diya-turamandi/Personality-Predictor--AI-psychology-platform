import React, { useState, useContext } from 'react'
import Header from '../components/Header'
import Landing from '../components/Landing'
import WelcomeScreen from '../components/WelcomeScreen'
import PersonalityForm from '../components/PersonalityForm'
import PersonalityResult from '../components/PersonalityResult'
import { UserContext } from '../utils/UserContext'
import { getHistory, saveToHistory, createHistoryEntry, clearHistory as clearStoredHistory } from '../utils/historyManager'

export default function Home() {
  const { userName, setUserName } = useContext(UserContext)
  const [started, setStarted] = useState(false)
  const [result, setResult] = useState(null)
  const [history, setHistory] = useState(() => getHistory())

  function handlePredict(newResult) {
    const entry = createHistoryEntry(newResult, userName)
    const saved = saveToHistory(entry)
    // reload history from storage to keep authoritative order
    setHistory(getHistory())
    setResult(newResult)
    return saved
  }

  function handleStart(name) {
    setUserName(name)
    setStarted(true)
  }

  function handleClearHistory() {
    clearStoredHistory()
    setHistory([])
  }

  return (
    <div className="app-container">
      <Header />
      {started ? (
        <>
          <Landing userName={userName} />
          <main>
            <section id="quiz">
              <PersonalityForm onPredict={handlePredict} userName={userName} />
            </section>
            <PersonalityResult result={result} history={history} onClearHistory={handleClearHistory} />
          </main>
        </>
      ) : (
        <WelcomeScreen onStart={handleStart} />
      )}
    </div>
  )
}
