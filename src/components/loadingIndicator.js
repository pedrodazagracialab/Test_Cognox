import React from 'react'
import { Platform, ActivityIndicator, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { styles } from '../styles'

const LoadingIndicator = () => {
  const { colors } = useTheme()

  return (
    <View style={[{ flex: 1 }, styles.aligns.alignCenter, styles.aligns.justifyCenter]}>
      <ActivityIndicator
        size={Platform.select({
          ios: 'large',
          android: 40
        })}
        color={colors.primary}
      />
    </View>
  )
}

export default LoadingIndicator
