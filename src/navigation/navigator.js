import React, { useContext } from 'react'

// Navigator
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Pages
import Login from '../pages/login'
import Register from '../pages/register'
import Home from '../pages/home'
import Splash from '../pages/splash'
import Profile from '../pages/profile'
import Favorites from '../pages/favorites'
import DetailMovie from '../pages/detailMovie'

import { GlobalContext } from '../context'
import Icon from 'react-native-vector-icons/AntDesign'
import { Host } from 'react-native-portalize'
import { StyleSheet, View } from 'react-native'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const Router = () => {
  const { auth: { authState } } = useContext(GlobalContext)

  return (
    <NavigationContainer theme={DarkTheme}>
      {
        authState.loading
          ? (
            <Stack.Navigator initialRouteName='splash' headerMode='none'>
              <Stack.Screen name='splash' component={Splash} />
            </Stack.Navigator>
          )
          : authState.authenticated
            ? (
              <Host>
                <Stack.Navigator headerMode='float'>
                  <Stack.Screen name='main' options={{ title: 'Inicio', headerShown: false }}>
                    {() => (
                      <Tab.Navigator initialRouteName='home'>
                        <Tab.Screen
                          name='home'
                          component={Home}
                          options={{
                            title: 'Inicio',
                            tabBarIcon: ({ color, size }) => <Icon size={size} name='home' color={color} />
                          }}
                        />
                        <Tab.Screen
                          name='favorite'
                          component={Favorites}
                          options={{
                            title: 'Favoritos',
                            tabBarIcon: ({ color }) => <Icon size={24} name='hearto' color={color} />
                          }}
                        />
                        <Tab.Screen
                          name='profile'
                          component={Profile}
                          options={{
                            title: 'Perfil',
                            tabBarIcon: ({ color }) => <Icon size={24} name='user' color={color} />
                          }}
                        />
                      </Tab.Navigator>
                    )}
                  </Stack.Screen>
                  <Stack.Screen
                    name='detailMovie'
                    component={DetailMovie}
                    options={{
                      headerTransparent: true,
                      headerTintColor: '#ffffff',
                      headerBackTitleVisible: false,
                      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }}
                  />
                </Stack.Navigator>
              </Host>
            )
            : (
              <Stack.Navigator initialRouteName='login' headerMode='none'>
                <Stack.Screen name='login' component={Login} />
                <Stack.Screen name='register' component={Register} />
              </Stack.Navigator>
            )
      }
    </NavigationContainer>
  )
}

export default Router
