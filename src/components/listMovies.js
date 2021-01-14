import React, { memo, useCallback } from 'react'
import { FlatList, Text, View } from 'react-native'
import { styles } from '../styles'
import CardMovie from './cardMovie'

const ListMovies = ({ movies = [], textEmpty = '' }) => {
  const renderItem = useCallback(
    ({ item }) => <CardMovie item={item} />,
    [movies]
  )

  return (
    <FlatList
      data={movies}
      numColumns={2}
      style={{ flex: 1 }}
      renderItem={renderItem}
      keyExtractor={item => item._id}
      contentContainerStyle={{ flex: movies.length > 0 ? 0 : 1 }}
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

export default memo(ListMovies)
