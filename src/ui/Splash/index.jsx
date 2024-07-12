import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { PokeballLogo } from '../../assets/svg'

const SplashScreen = ({ navigation }) => {

    // useEffect(() => {
    //     setTimeout(() => {
    //         navigation.replace('HomeScreen');
    //     }, 500)
    // }, [navigation])

  return (
    <View style={styles.main}>
      {/* <PokeballLogo /> */}
      <Text style={[styles.fontfamily, styles.title]}>PokemonWiki</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F6BD20',
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center'
  },
  fontfamily: {
    fontFamily: 'Poppins-SemiBold',
    color: 'black'
  },
  title: {
    fontSize: 28
  }
})