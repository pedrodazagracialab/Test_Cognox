import React, { memo, useCallback } from 'react'
import { FlatList, Text, View } from 'react-native'
import { styles } from '../../../styles'
import CardReview from './cardReview'

const ListReviews = ({ reviews = [], textEmpty = '' }) => {
  const renderItem = useCallback(
    ({ item }) => <CardReview item={item} />,
    [reviews]
  )

  return (
    <FlatList
      data={reviews}
      nestedScrollEnabled
      scrollEnabled={false}
      style={{ flex: 1 }}
      renderItem={renderItem}
      keyExtractor={item => item._id}
      contentContainerStyle={{ flex: reviews.length > 0 ? 0 : 1, paddingHorizontal: 15 }}
      ListEmptyComponent={() => (
        <View
          style={styles.listVideos.containerEmpty}
        >
          <Text
            style={styles.listVideos.textEmpty}
          >
            {textEmpty}
          </Text>
        </View>
      )}
    />
  )
}

export default memo(ListReviews)
