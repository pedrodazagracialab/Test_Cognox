import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: ({ marginTop = 10, marginBottom = 35 }) => ({
    marginTop,
    marginBottom
  }),
  label: {
    fontSize: 14,
    color: 'white',
    marginBottom: 8,
    fontWeight: '600'
  },
  labelError: {
    fontSize: 13,
    color: '#f14444',
    marginTop: 10,
    fontWeight: '600'
  },
  input: (error) => ({
    height: 55,
    color: 'white',
    borderRadius: 5,
    borderWidth: 1.2,
    borderColor: error ? '#f14444' : 'gray',
    paddingHorizontal: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.15)'
  })
})
