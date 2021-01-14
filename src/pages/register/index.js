import React, { memo } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { styles } from '../../styles'
import TextInputComponent from '../../components/textInput'
import ButtonComponent from '../../components/button'
import { useFormRegister } from './useForm'
import { useTheme } from '@react-navigation/native'

const Register = () => {
  const { colors } = useTheme()
  const { data, errors, onChangeText, goLogin, signUp } = useFormRegister()

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
          keyInput='name'
          errors={errors}
          value={data.name}
          marginBottom={20}
          label='Nombre completo'
          onChangeText={onChangeText}
          placeHolder='Ingresa tu nombre'
        />
        <TextInputComponent
          label='Usuario'
          errors={errors}
          keyInput='email'
          marginBottom={20}
          value={data.email}
          autoCapitalize='none'
          onChangeText={onChangeText}
          placeHolder='Ingresa tu usuario'
        />
        <TextInputComponent
          errors={errors}
          secureTextEntry
          marginBottom={20}
          label='Contraseña'
          keyInput='password'
          value={data.password}
          onChangeText={onChangeText}
          placeHolder='Ingresa tu contraseña'
        />
      </View>
      <View style={styles.login.containerButton}>
        <ButtonComponent
          label='Registrarse'
          backgroundColor={colors.primary}
          onPress={signUp}
        />
        <Text
          onPress={goLogin}
          style={styles.login.textCreateAccount}
        >
          ¿Ya tienes una cuenta? Inicia sesión
        </Text>
      </View>
    </ScrollView>
  )
}

export default memo(Register)
