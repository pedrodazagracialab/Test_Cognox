import { Alert } from 'react-native'

export const useShowAlert = ({
  title = '',
  description = '',
  handleAccept = null,
  handleCancel = null,
  textButtonAccept = 'Aceptar',
  textButtonCancel = 'Cancelar'
}) =>
  Alert.alert(
    title,
    description,
    [
      {
        text: textButtonCancel,
        onPress: () => handleCancel?.call()
      },
      {
        text: textButtonAccept,
        onPress: () => handleAccept?.call()
      }
    ],
    { cancelable: false }
  )
