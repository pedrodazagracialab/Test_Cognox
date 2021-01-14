class UserModel {
  constructor (data) {
    this._name = data?.name?.trim() || ''
    this._email = data?.email?.trim() || ''
    this._image = data?.image?.trim() || ''
    this._token = data?.token?.trim() || ''
    this._lat = data?.lat?.trim() || ''
    this._lng = data?.lng?.trim() || ''
    this._password = data?.password?.trim() || ''
    this._favorites = data?.favorites || []
    this._idsFavorites = data?.idsFavorites || []
  }
}

export default UserModel
