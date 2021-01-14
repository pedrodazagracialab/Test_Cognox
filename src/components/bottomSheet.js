import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { Modalize } from 'react-native-modalize'
import Icon from 'react-native-vector-icons/AntDesign'
import { styles } from '../styles'
import { useTheme } from '@react-navigation/native'
import { Portal } from 'react-native-portalize'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const BottomSheet = ({ options, modalizeRef, onSelect }) => {
  const { colors } = useTheme()
  const { bottom } = useSafeAreaInsets()
  return (
    <Portal>
      <Modalize
        ref={modalizeRef}
        useNativeDriver
        adjustToContentHeight
        handlePosition='inside'
        handleStyle={{ backgroundColor: colors.text, marginTop: 10 }}
        modalStyle={{ backgroundColor: colors.card }}
      >
        <View style={styles.bottomSheet.childrenPangel({ bottom })}>
          {
            options.map(item => (
              <Pressable
                key={item.value}
                onPress={() => onSelect(item.value)}
                style={styles.bottomSheet.container}
              >
                {
                  item.icon
                    ? (
                      <View style={styles.bottomSheet.containerIcon}>
                        <Icon name={item.icon} color={colors.text} size={28} />
                      </View>
                    ) : <></>
                }
                <View style={styles.bottomSheet.containerLabel}>
                  <Text
                    style={styles.bottomSheet.label({ color: colors.text })}
                  >
                    {item.label}
                  </Text>
                </View>
              </Pressable>
            ))
          }
        </View>
      </Modalize>
    </Portal>
  )
}

export default BottomSheet
