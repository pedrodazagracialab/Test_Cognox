import React, { useContext, memo } from 'react'
import { View } from 'react-native'
import ListMovies from '../../components/listMovies'
import { GlobalContext } from '../../context'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Favorites = () => {
  const { top } = useSafeAreaInsets()
  const { user: { userState } } = useContext(GlobalContext)
  const { currentUser } = userState

  return (
    <View style={{ flex: 1, paddingTop: top }}>
      <ListMovies
        movies={currentUser?._favorites}
        textEmpty='Aún no tienes favoritos'
      />
    </View>
  )
}

export default Favorites
