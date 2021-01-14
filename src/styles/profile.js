import { StyleSheet } from 'react-native'
import aligns from './aligns'

export default StyleSheet.create({
  container: ({ top }) => ({
    flex: 1,
    paddingTop: (top + 40),
    paddingHorizontal: 30
  }),
  containerData: {
    flex: 3
  },
  containerImage: {
    marginBottom: 30,
    ...aligns.alignCenter,
    ...aligns.alignSelfCenter
  },
  labelImage: {
    color: 'white',
    marginTop: 15,
    fontSize: 16,
    fontWeight: '400'
  },
  containerButton: {
    flex: 1,
    ...aligns.justifyCenter
  }
})
