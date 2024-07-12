import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('HomeScreen');
        }, 500)
    }, [navigation])

  return (
    <View>
      <Text>SplashScreen AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaaa</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})