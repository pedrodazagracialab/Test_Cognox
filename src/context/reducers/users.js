import usersInitialState from '../initialStates/usersInitialState'

const users = (state, { payload, type }) => {
  switch (type) {
    case 'SET_USER':
      return { ...payload }
    case 'REMOVE_USER':
      return usersInitialState

    default:
      return state
  }
}

export default users
