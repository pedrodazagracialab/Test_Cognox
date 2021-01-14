import { useState, useContext } from 'react'
import { GlobalContext } from '../../context'
import { Actions } from '../../context/actions'
import { useNavigation } from '@react-navigation/native'
import { useValidateFields } from '../../hooks/useValidateFields'
import { useShowAlert } from '../../hooks/useShowAlert'

const FIELDS = [
  { name: 'email', required: true, type: 'Email' },
  { name: 'password', required: true, type: 'String' }
]

export const useFormLogin = () => {
  const [data, setData] = useState({})
  const [errors, setErros] = useState({})
  const { auth: { authState, authDispatch }, user: { userDispatch } } = useContext(GlobalContext)

  const navigation = useNavigation()

  const onChangeText = (key, value) => {
    setData({
      ...data,
      [key]: value
    })
  }

  const goRegister = () => navigation.navigate('register')

  const logIn = async () => {
    const validation = await useValidateFields(FIELDS, data)
    if (Object.keys(validation).length > 0) {
      setErros(validation)
      return false
    }
    const response = await Actions.Auth.login(data, authState)(userDispatch, authDispatch)
    if (!response.status) {
      useShowAlert({
        title: 'Lo sentimos',
        description: response.message
      })
    }
  }

  return { data, errors, onChangeText, goRegister, logIn }
}
