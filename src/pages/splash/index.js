import React, { memo, useContext, useEffect } from 'react'
import { styles } from '../../styles'
import { View, Image } from 'react-native'
import { GlobalContext } from '../../context'
import { Actions } from '../../context/actions'

const Splash = () => {
  const { user: { userDispatch }, auth: { authDispatch } } = useContext(GlobalContext)

  useEffect(() => {
    Actions.Auth.verifySession(userDispatch, authDispatch)
  }, [])

  return (
    <View style={styles.login.container}>
      <Image
        source={require('../../assets/img/logo.png')}
        style={styles.login.image}
      />
    </View>
  )
}

export default memo(Splash)
