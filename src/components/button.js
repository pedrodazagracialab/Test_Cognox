import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { styles } from '../styles'

const ButtonComponent = ({
  label,
  onPress,
  backgroundColor
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={styles.button.button({ backgroundColor })}
    >
      <Text
        style={{ ...styles.button.label }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent
