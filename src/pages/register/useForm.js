import { useState, useContext } from 'react'
import { GlobalContext } from '../../context'
import { useNavigation } from '@react-navigation/native'
import { useValidateFields } from '../../hooks/useValidateFields'
import { Actions } from '../../context/actions'
import { useShowAlert } from '../../hooks/useShowAlert'

const FIELDS = [
  { name: 'name', required: true, type: 'String' },
  { name: 'email', required: true, type: 'Email' },
  { name: 'password', required: true, type: 'String' }
]

export const useFormRegister = () => {
  const [data, setData] = useState({})
  const [errors, setErros] = useState({})
  const { auth: { authState, authDispatch } } = useContext(GlobalContext)

  const navigation = useNavigation()

  const onChangeText = (key, value) => {
    setData({
      ...data,
      [key]: value
    })
  }

  const goLogin = () => navigation.pop()

  const signUp = async () => {
    const validation = await useValidateFields(FIELDS, data)
    if (Object.keys(validation).length > 0) {
      setErros(validation)
      return false
    }
    Actions.Auth.register(data, authState)(authDispatch)
    useShowAlert({
      title: 'Éxito',
      description: 'Registro correcta',
      handleAccept: goLogin
    })
  }

  return { data, errors, onChangeText, goLogin, signUp }
}
