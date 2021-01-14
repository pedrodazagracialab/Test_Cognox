import React from 'react'
import { View, Text } from 'react-native'
import CircleAvatar from '../../../components/circleAvatar'
import { URL_IMAGE } from '../../../constants'
import { styles } from '../../../styles'
import StarRating from 'react-native-star-rating'

const CardReview = ({ item }) => {
  return (
    <View style={[{ marginVertical: 10 }, styles.aligns.row, styles.aligns.alignLeft, styles.aligns.justifyLeft]}>
      <CircleAvatar size={40} image={`${URL_IMAGE}${item?._autor_detail?._avatar_path}`} />
      <View
        style={{ marginHorizontal: 15, paddingRight: 30 }}
      >
        <View style={[{ flex: 1 }, styles.aligns.row, styles.aligns.alignCenter, styles.aligns.justifySpaceBetween]}>
          <Text style={{ color: 'white', fontWeight: '800', marginBottom: 5 }}>
            {item?._autor_detail?._name || item?._autor_detail?._username}
          </Text>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={item?._autor_detail?._rating}
            starSize={20}
            fullStarColor='yellow'
            emptyStarColor='white'
          />
        </View>
        <Text style={{ color: 'white', fontWeight: '200', textAlign: 'justify' }}>
          {item?._content}
        </Text>
      </View>
    </View>
  )
}

export default CardReview
