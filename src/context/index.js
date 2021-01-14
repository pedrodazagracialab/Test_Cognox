import React, { createContext } from 'react'
import { useReducers } from './reducers'

export const GlobalContext = createContext({})

const GlobalProvider = ({ children }) => {
  const reducers = useReducers()

  return (
    <GlobalContext.Provider
      value={reducers}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
