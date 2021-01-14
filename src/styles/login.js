import { StyleSheet } from 'react-native'
import aligns from './aligns'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 35,
    ...aligns.justifyCenter
  },
  containerImage: {
    marginTop: 10,
    ...aligns.alignCenter,
    ...aligns.justifyCenter
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  containerForm: {
    marginVertical: 20,
    ...aligns.justifyCenter
  },
  containerButton: {
    ...aligns.alignCenter,
    ...aligns.justifyCenter
  },
  textCreateAccount: {
    marginTop: 40,
    marginBottom: 40,
    color: 'white',
    fontSize: 14,
    fontWeight: '400'
  }
})
