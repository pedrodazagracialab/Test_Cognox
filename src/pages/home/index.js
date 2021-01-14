import React, { memo } from 'react'
import { View } from 'react-native'
import ListMovies from '../../components/listMovies'
import LoadingIndicator from '../../components/loadingIndicator'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useHome } from './useHome'

const Home = () => {
  const { top } = useSafeAreaInsets()
  const { loading, movies } = useHome()

  return (
    loading
      ? <LoadingIndicator />
      : (
        <View style={{ flex: 1, paddingTop: top }}>
          <ListMovies
            movies={movies}
            textEmpty='No hay películas pro ahora, intenta más tarde'
          />
        </View>
      )
  )
}

export default memo(Home)
