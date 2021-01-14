class MovieModel {
  constructor (data) {
    this._id = data?.id || ''
    this._title = data?.title || ''
    this._video = data?.video || false
    this._adult = data?.adult || false
    this._overview = data?.overview || ''
    this._genre_ids = data?.genre_ids || []
    this._vote_count = data?.vote_count || 0
    this._popularity = data?.popularity || 0
    this._poster_path = data?.poster_path || ''
    this._vote_average = data?.vote_average || 0
    this._release_date = data?.release_date || ''
    this._backdrop_path = data?.backdrop_path || ''
    this._original_title = data?.original_title || ''
    this._original_language = data?.original_language || ''
  }
}

export default MovieModel
