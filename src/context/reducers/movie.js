const movies = (state, { payload, type }) => {
  switch (type) {
    case 'SET_MOVIES':
      return { ...state, ...payload }
    case 'DETAIL_MOVIE':
      return { ...state, ...payload }
    case 'SET_REVIEWS':
      return { ...state, ...payload }

    default:
      return state
  }
}

export default movies
