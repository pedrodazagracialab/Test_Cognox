import { StyleSheet } from 'react-native'
import aligns from './aligns'

const SIZE_BUTTON_FAVORITE = 32

export default StyleSheet.create({
  card: {
    flex: 1,
    margin: 6,
    height: 200,
    overflow: 'hidden'
  },
  image: {
    flex: 1,
    paddingRight: 10,
    paddingBottom: 10,
    resizeMode: 'stretch',
    ...aligns.alignRight,
    ...aligns.justifyRight
  },
  buttonFavorite: {
    width: SIZE_BUTTON_FAVORITE,
    height: SIZE_BUTTON_FAVORITE,
    borderRadius: SIZE_BUTTON_FAVORITE / 2,
    backgroundColor: 'rgba(0,0,0,0.4)',
    ...aligns.alignCenter,
    ...aligns.justifyCenter
  }
})
