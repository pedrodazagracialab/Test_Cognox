import { STORAGE_KEY_USER } from "../../constants"
import { useSetDataStorage } from "../../hooks/useStorage"

export const addFavorite = (movie, user) => async (dispatch) => {
  const favorites = [...user?._favorites]
  const idsFavorites = [...user?._idsFavorites]
  favorites.push(movie)
  idsFavorites.push(movie?._id)
  user._favorites = favorites
  user._idsFavorites = idsFavorites
  await useSetDataStorage(STORAGE_KEY_USER, user)
  dispatch({ type: 'SET_USER', payload: { currentUser: user } })
}

export const removeFavorite = (index, user) => async (dispatch) => {
  const favorites = [...user?._favorites]
  const idsFavorites = [...user?._idsFavorites]
  favorites.splice(index, 1)
  idsFavorites.splice(index, 1)
  user._favorites = favorites
  user._idsFavorites = idsFavorites
  await useSetDataStorage(STORAGE_KEY_USER, user)
  dispatch({ type: 'SET_USER', payload: { currentUser: user } })
}

export const changePhoto = (response, user) => async (dispatch) => {
  if (!response.didCancel) {
    user._image = response.uri
    await useSetDataStorage(STORAGE_KEY_USER, user)
    dispatch({ type: 'SET_USER', payload: { currentUser: user } })
  }
}

export const setLocation = (coords, user) => async (dispatch) => {
  user._lat = coords.latitude
  user._lng = coords.longitude
  await useSetDataStorage(STORAGE_KEY_USER, user)
  dispatch({ type: 'SET_USER', payload: { currentUser: user } })
}