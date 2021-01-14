import { StyleSheet } from 'react-native'
import aligns from './aligns'

export default StyleSheet.create({
  containerEmpty: {
    flex: 1,
    ...aligns.alignCenter,
    ...aligns.justifyCenter
  },
  textEmpty: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
    textAlign: 'center'
  }
})
