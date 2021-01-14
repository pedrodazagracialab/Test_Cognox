import { useReducer } from 'react'
import auth from './auth'
import authInitialState from '../initialStates/authInitialState'

import users from './users'
import usersInitialState from '../initialStates/usersInitialState'

import movies from './movie'
import movieInitialState from '..//initialStates/movieInitialState'

export const useReducers = () => {
  const [authState, authDispatch] = useReducer(auth, authInitialState)
  const [userState, userDispatch] = useReducer(users, usersInitialState)
  const [movieState, movieDispatch] = useReducer(movies, movieInitialState)

  return {
    auth: { authState, authDispatch },
    user: { userState, userDispatch },
    movie: { movieState, movieDispatch }
  }
}
