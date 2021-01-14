import React, { memo } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { styles } from '../../styles'
import TextInputComponent from '../../components/textInput'
import ButtonComponent from '../../components/button'
import { useFormLogin } from './useForm'
import { useTheme } from '@react-navigation/native'

const Login = () => {
  const { colors } = useTheme()
  const { data, errors, logIn, goRegister, onChangeText } = useFormLogin()

  return (
    <ScrollView
      keyboardDismissMode='on-drag'
      keyboardShouldPersistTaps='always'
      contentContainerStyle={styles.login.container}
    >
      <View style={styles.login.containerImage}>
        <Image
          source={require('../../assets/img/logo.png')}
          style={styles.login.image}
        />
      </View>
      <View style={styles.login.containerForm}>
        <TextInputComponent
          label='Usuario'
          keyInput='email'
          errors={errors}
          value={data.email}
          autoCapitalize='none'
          onChangeText={onChangeText}
          placeHolder='Ingresa tu usuario'
        />
        <TextInputComponent
          errors={errors}
          secureTextEntry
          label='Contraseña'
          keyInput='password'
          value={data.password}
          onChangeText={onChangeText}
          placeHolder='Ingresa tu contraseña'
        />
      </View>
      <View style={styles.login.containerButton}>
        <ButtonComponent
          label='Iniciar sesión'
          backgroundColor={colors.primary}
          onPress={logIn}
        />
        <Text
          onPress={goRegister}
          style={styles.login.textCreateAccount}
        >
          ¿No tienes una cuenta? Registrate
        </Text>
      </View>
    </ScrollView>
  )
}

export default memo(Login)
