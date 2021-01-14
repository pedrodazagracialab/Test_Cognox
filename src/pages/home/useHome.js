import { useEffect, useContext } from 'react'
import { GlobalContext } from '../../context'
import { Actions } from '../../context/actions'
import Geolocation from '@react-native-community/geolocation'

export const useHome = () => {
  const { user: { userState, userDispatch }, movie: { movieState, movieDispatch } } = useContext(GlobalContext)
  const { loading, movies } = movieState
  const { currentUser } = userState

  useEffect(() => {
    Geolocation.getCurrentPosition(succesLocation, errorLocation)
    Actions.Movie.getMovies({ apiKey: currentUser?._token, page: movieState.currentPage })(movieDispatch)
  }, [])

  const succesLocation = ({ coords }) => {
    Actions.User.setLocation(coords, currentUser)(userDispatch)
  }

  const errorLocation = (info) => {
    console.log('info', info)
  }

  return {
    movies,
    loading
  }
}
