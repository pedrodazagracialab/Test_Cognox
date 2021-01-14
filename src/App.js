import 'react-native-gesture-handler'
import React from 'react'
import GlobalProvider from './context'
import { StatusBar } from 'react-native'
import Router from './navigation/navigator'

const App = () => {
  return (
    <GlobalProvider>
      <StatusBar barStyle='light-content' />
      <Router />
    </GlobalProvider>
  )
}

export default App
