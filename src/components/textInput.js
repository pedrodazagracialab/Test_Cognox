import React from 'react'
import { TextInput, View, Text } from 'react-native'
import { styles } from '../styles'

const TextInputComponent = ({
  value = '',
  label = '',
  errors = {},
  keyInput = '',
  editable = true,
  marginTop,
  placeHolder = '',
  onChangeText = null,
  marginBottom,
  autoCapitalize,
  secureTextEntry = false
}) => {
  return (
    <View style={styles.input.container({ marginBottom, marginTop })}>
      <Text
        style={styles.input.label}
      >
        {label}
      </Text>
      <TextInput
        value={value}
        editable={editable}
        placeholder={placeHolder}
        placeholderTextColor='white'
        secureTextEntry={secureTextEntry}
        underlineColorAndroid='transparent'
        autoCapitalize={autoCapitalize || 'words'}
        style={styles.input.input(errors[keyInput])}
        onChangeText={text => onChangeText(keyInput, text)}
      />
      {
        errors[keyInput]
          ? (
            <Text
              style={styles.input.labelError}
            >
              {errors[keyInput]}
            </Text>
          )
          : <></>
      }
    </View>
  )
}

export default TextInputComponent
