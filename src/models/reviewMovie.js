class ReviewMovieModel {
  constructor (data) {
    this._id = data?.id || ''
    this._url = data?.url || ''
    this._autor = data?.author || ''
    this._content = data?.content || ''
    this._updated_at = data?.updated_at || ''
    this._create_at = data?.created_at || ''
    this._autor_detail = new AuthorDetail(data?.author_details)
  }
}

class AuthorDetail {
  constructor (data) {
    this._name = data?.name || ''
    this._rating = data?.rating || 0
    this._username = data?.username || ''
    this._avatar_path = data?.avatar_path || ''
  }
}

export default ReviewMovieModel
