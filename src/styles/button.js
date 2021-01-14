import { StyleSheet } from 'react-native'
import aligns from './aligns'

export default StyleSheet.create({
  button: ({ width = '100%', backgroundColor = 'blue' }) => ({
    width,
    height: 55,
    backgroundColor,
    borderRadius: 5,
    ...aligns.alignCenter,
    ...aligns.justifyCenter,
    ...aligns.alignSelfCenter
  }),
  label: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '600'
  }
})
