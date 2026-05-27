import React, { createContext, useState } from 'react'

export const UserContext = createContext({
  userName: '',
  setUserName: () => {}
})

export function UserProvider({ children }) {
  const [userName, setUserName] = useState('')

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  )
}
