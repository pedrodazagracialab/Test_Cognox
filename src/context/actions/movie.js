import { URL_API } from '../../constants'
import { useRequest } from '../../hooks/useRequests'
import MovieModel from '../../models/movie'
import ReviewMovieModel from '../../models/reviewMovie'

export const getMovies = ({ apiKey, page = 1 }) => async (dispatch) => {
  const response = await useRequest({
    url: `${URL_API}/popular?api_key=${apiKey}&language=en-US&page=${page}`,
    method: 'GET'
  })
  if (response.status) {
    const movies = response.data?.results.map(movie => new MovieModel(movie))
    dispatch({ type: 'SET_MOVIES', payload: { movies, loading: false } })
  }
}

export const detailMovie = (movie) => (dispatch) => {
  dispatch({ type: 'DETAIL_MOVIE', payload: { movieDetail: movie } })
}

export const getReviewsMovie = ({ idMovie, apiKey, page = 1 }) => async (dispatch) => {
  dispatch({ type: 'SET_REVIEWS', payload: { loadingReviews: true } })
  const response = await useRequest({
    url: `${URL_API}/${idMovie}/reviews?api_key=${apiKey}&language=en-US&page=${page}`,
    method: 'GET'
  })
  if (response.status) {
    const reviews = response.data?.results.map(movie => new ReviewMovieModel(movie))
    dispatch({ type: 'SET_REVIEWS', payload: { reviewsDetailMovie: reviews, loadingReviews: false } })
  }
}