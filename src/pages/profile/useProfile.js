import { useContext, useRef } from 'react'
import { GlobalContext } from '../../context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { Actions } from '../../context/actions'

const OptionsBottomSheet = [
  { icon: 'camerao', label: 'Tomar foto', value: 'camera' },
  { icon: 'picture', label: 'Escoger de galería', value: 'gallery' }
]

const OptionCamera = {
  mediaType: 'photo',
  includeBase64: false
}

export const useProfile = () => {
  const modalizeRef = useRef(null)
  const { user: { userState, userDispatch }, auth: { authDispatch } } = useContext(GlobalContext)
  const { currentUser } = userState

  const logout = () => {
    AsyncStorage.clear()
    userDispatch({ type: 'REMOVE_USER' })
    authDispatch({ type: 'LOGOUT', payload: { authenticated: false } })
  }

  const optionSelect = (option) => {
    modalizeRef.current.close()
    switch (option) {
      case 'camera':
        launchCamera(
          { saveToPhotos: true, ...OptionCamera },
          (response) => Actions.User.changePhoto(response, currentUser)(userDispatch)
        )
        break
      case 'gallery':
        launchImageLibrary(
          OptionCamera,
          (response) => Actions.User.changePhoto(response, currentUser)(userDispatch)
        )
        break
    }
  }

  return {
    logout,
    modalizeRef,
    currentUser,
    optionSelect,
    OptionsBottomSheet
  }
}
