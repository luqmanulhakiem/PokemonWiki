import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { DetailScreen, FavoriteScreen, HomeScreen, ProfileScreen, SearchScreen, SplashScreen } from './ui';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false}} />
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false}} />
            <Stack.Screen name='DetailScreen' component={DetailScreen} />
            <Stack.Screen name='FavoriteScreen' component={FavoriteScreen} />
            <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
            <Stack.Screen name='SearchScreen' component={SearchScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App