import { APIKEY, STORAGE_KEY_USER } from '../../constants/'
import UserModel from '../../models/user'
import { useGetDataStorage, useSetDataStorage } from '../../hooks/useStorage'

export const login = (data, state) => async (userDispatch, authDispatch) => {
  const { users } = state
  const email = data.email.trim()
  const password = data.password.trim()
  if (users[email]) {
    const userFound = users[email]
    if (userFound?._email === email && userFound?._password === password) {
      userFound._token = APIKEY
      await useSetDataStorage(STORAGE_KEY_USER, userFound)
      userDispatch({ type: 'SET_USER', payload: { currentUser: userFound } })
      authDispatch({ type: 'SET_LOADING', payload: { authenticated: true } })
      return { status: true, message: '' }
    }
    return { status: false, message: 'Usuario o contraseña incorrecto' }
  }
  return { status: false, message: 'Usuario no encontrado' }
}

export const verifySession = async (userDispatch, authDispatch) => {
  let authenticated = false
  const dataStorage = await useGetDataStorage(STORAGE_KEY_USER)
  if (dataStorage?._token) {
    authenticated = true
    userDispatch({ type: 'SET_USER', payload: { currentUser: dataStorage } })
  }
  authDispatch({ type: 'SET_LOADING', payload: { loading: false, authenticated } })
}

export const register = (data, state) => (dispatch) => {
  const user = new UserModel(data)
  state.users[user?._email] = user
  dispatch({ type: 'ADD_USER', payload: state })
  return true
}
