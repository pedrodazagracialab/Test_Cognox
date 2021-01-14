import React from 'react'
import { ImageBackground } from 'react-native'

const CircleAvatar = ({ size = 110, image }) => {
  const url = image ? { uri: image } : require('../assets/img/user.png')
  return (
    <ImageBackground
      source={url}
      style={{
        width: size,
        height: size,
        borderRadius: (size / 2),
        backgroundColor: 'lightgrey',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    />
  )
}

export default CircleAvatar
