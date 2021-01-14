import AsyncStorage from '@react-native-async-storage/async-storage'

export const useSetDataStorage = async (key, data) => {
  const jsonValue = JSON.stringify(data)
  await AsyncStorage.setItem(key, jsonValue)
}

export const useGetDataStorage = async (key) => {
  const jsonValue = await AsyncStorage.getItem(key)
  return jsonValue ? JSON.parse(jsonValue) : null
}
