import React, { useCallback, useContext, memo } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity, ImageBackground } from 'react-native'
import { URL_IMAGE } from '../constants'
import { GlobalContext } from '../context'
import { Actions } from '../context/actions'
import { styles } from '../styles'
import { useNavigation } from '@react-navigation/native'

const CardMovie = ({ item }) => {
  const navigation = useNavigation()
  const { user: { userState, userDispatch }, movie: { movieDispatch } } = useContext(GlobalContext)

  const { currentUser } = userState

  const _getColorIcon = useCallback(
    () => {
      return currentUser?._idsFavorites?.includes(item?._id) ? 'red' : 'white'
    },
    [currentUser?._idsFavorites],
  )

  const _getIcon = useCallback(
    () => {
      return currentUser?._idsFavorites?.includes(item?._id) ? 'heart' : 'hearto'
    },
    [currentUser?._idsFavorites],
  )

  const toogleFavorite = () => {
    const indexItem = currentUser?._idsFavorites?.indexOf(item?._id)
    if (indexItem >= 0) {
      Actions.User.removeFavorite(indexItem, currentUser)(userDispatch)
    } else {
      Actions.User.addFavorite(item, currentUser)(userDispatch)
    }
  }

  const goDetailMovie = () => {
    Actions.Movie.detailMovie(item)(movieDispatch)
    navigation.navigate('detailMovie')

  }

  return (
    <TouchableOpacity
      onPress={goDetailMovie}
      activeOpacity={0.9}
      style={styles.cardMovie.card}
    >
      <ImageBackground
        style={styles.cardMovie.image}
        source={{ uri: `${URL_IMAGE}${item?._poster_path}` }}
      >
        <TouchableOpacity
          onPress={toogleFavorite}
          activeOpacity={0.8}
          style={styles.cardMovie.buttonFavorite}
        >
          <Icon size={16} name={_getIcon()} color={_getColorIcon()} />
        </TouchableOpacity>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default memo(CardMovie)
