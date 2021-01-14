import { StyleSheet } from 'react-native'
import aligns from './aligns'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 2,
    paddingVertical: 15,
    ...aligns.row,
    ...aligns.alignCenter,
    ...aligns.justifyLeft
  },
  containerIcon: {
    marginLeft: 10,
    marginRight: 10,
    ...aligns.alignCenter
  },
  containerLabel: {
    marginLeft: 10,
    ...aligns.alignLeft
  },
  label: ({ color }) => ({
    color,
    fontSize: 16,
    fontWeight: '400'
  }),
  childrenPangel: ({ bottom }) => ({
    paddingTop: 25,
    paddingBottom: (bottom + 10),
    paddingHorizontal: 10
  })
})
