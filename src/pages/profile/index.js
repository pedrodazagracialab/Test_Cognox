import React from 'react'
import { ScrollView, View, TouchableOpacity, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import CircleAvatar from '../../components/circleAvatar'
import TextInputComponent from '../../components/textInput'
import { useTheme } from '@react-navigation/native'
import ButtonComponent from '../../components/button'
import BottomSheet from '../../components/bottomSheet'
import { useProfile } from './useProfile'
import { styles } from '../../styles'

const Profile = () => {
  const { colors } = useTheme()
  const { top } = useSafeAreaInsets()
  const {
    logout,
    modalizeRef,
    currentUser,
    optionSelect,
    OptionsBottomSheet
  } = useProfile()

  return (
    <ScrollView
      contentContainerStyle={styles.profile.container({ top })}
    >
      <View style={styles.profile.containerData}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => modalizeRef.current.open()}
          style={styles.profile.containerImage}
        >
          <CircleAvatar image={currentUser?._image} />
          <Text style={styles.profile.labelImage}>
            Cambiar foto
          </Text>
        </TouchableOpacity>
        <TextInputComponent
          label='Usuario'
          editable={false}
          marginBottom={15}
          autoCapitalize='none'
          value={currentUser?._name}
        />
        <TextInputComponent
          label='Email'
          editable={false}
          marginBottom={15}
          autoCapitalize='none'
          value={currentUser?._email}
        />
        <TextInputComponent
          label='Coordenadas'
          editable={false}
          autoCapitalize='none'
          value={`${currentUser?._lat}, ${currentUser?._lng}`}
        />
      </View>
      <View
        style={styles.profile.containerButton}
      >
        <ButtonComponent
          label='Cerrar sesión'
          backgroundColor={colors.primary}
          onPress={logout}
        />
      </View>
      <BottomSheet
        modalizeRef={modalizeRef}
        onSelect={optionSelect}
        options={OptionsBottomSheet}
      />
    </ScrollView>
  )
}

export default Profile
