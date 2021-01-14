const auth = (state, { payload, type }) => {
  switch (type) {
    case 'ADD_USER':
      return { ...payload }
    case 'SET_LOADING':
      return { ...state, ...payload }
    case 'LOGOUT':
      return { ...state, ...payload }

    default:
      return state
  }
}

export default auth
