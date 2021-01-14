import React from 'react'
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  ImageBackground,
  useWindowDimensions
} from 'react-native'
import { URL_IMAGE } from '../../constants'
import { useDetailMovie } from './useDetailMovie'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import LoadingIndicator from '../../components/loadingIndicator'
import ListReviews from './components/listReviews'

const BlurImage = 30
const PaddingTop = 70

const DetailFavorite = () => {
  const { top } = useSafeAreaInsets()
  const { movieDetail, loadingReviews, reviewsDetailMovie } = useDetailMovie()
  const { width } = useWindowDimensions()

  return (
    <ScrollView nestedScrollEnabled style={{ flex: 1 }}>
      <ImageBackground
        source={{ uri: `${URL_IMAGE}${movieDetail?._backdrop_path}` }}
        style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingTop: top + PaddingTop }}
        imageStyle={{ resizeMode: 'stretch' }}
        blurRadius={BlurImage}
      >
        <Image
          source={{ uri: `${URL_IMAGE}${movieDetail?._poster_path}` }}
          style={{ width: 160, height: 220, resizeMode: 'stretch', marginBottom: 25 }}
        />
        <View
          style={{ width, padding: 10, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
        >
          <Text
            numberOfLines={4}
            style={{
              color: 'white',
              fontSize: 14,
              fontWeight: '400'
            }}
          >
            {movieDetail?._overview}
          </Text>
        </View>
      </ImageBackground>
      <View style={{ flex: 1 }}>
        <View style={{ paddingLeft: 15, marginVertical: 10 }}>
          <Text
            numberOfLines={4}
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: '800'
            }}
          >
            Reviews
        </Text>
        </View>
        {
          loadingReviews
            ? <LoadingIndicator />
            : <ListReviews reviews={reviewsDetailMovie} textEmpty='Aún no hay reviews disponibles' />
        }
      </View>
    </ScrollView>
  )
}

export default DetailFavorite
