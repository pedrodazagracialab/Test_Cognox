import React, { useEffect, useContext, useLayoutEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { GlobalContext } from '../../context'
import { Actions } from '../../context/actions'
import { useNavigation } from '@react-navigation/native'

export const useDetailMovie = () => {
  const navigation = useNavigation()
  const { user: { userState, userDispatch }, movie: { movieState, movieDispatch } } = useContext(GlobalContext)
  const { reviewsDetailMovie, loadingReviews } = movieState
  const { currentUser } = userState
  const { movieDetail } = movieState

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${movieDetail?._original_title}`,
      headerTransparent: true,
      headerBackground: () => (
        <View
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            ...StyleSheet.absoluteFill
          }}
        />
      ),
    })
  }, [navigation]);

  useEffect(() => {
    Actions.Movie.getReviewsMovie({
      idMovie: movieDetail?._id,
      apiKey: currentUser?._token,
      page: movieState.currentPage
    })(movieDispatch)
  }, [])

  return {
    movieDetail,
    loadingReviews,
    reviewsDetailMovie
  }
}
