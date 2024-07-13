import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Avatar, PokeballIcon } from '../../assets/svg'

const ProfileScreen = () => {
  return (
    <View style={styles.main}>
      <View style={styles.section1}>
        <View>
          <Text style={[styles.fontfamily, styles.textHeadline]}>Luqmanul Hakiem,</Text>
          <Text style={[styles.fontfamily, styles.textSubHeadline]}>Pokemon Trainer</Text>
        </View>
        <Avatar />
      </View>
      <TouchableOpacity style={[styles.card, styles.shadowProp]}>
        <Text style={[styles.fontfamily, styles.textTitle2]}>Total Pokemon</Text>
        <View style={styles.totalPokemon}>
          <Text style={[styles.fontfamily, styles.textTitle2]}>10</Text>
          <PokeballIcon />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  main: {
    padding: 16,
    backgroundColor: 'white',
    height: '100%',
    width: '100%'
  }, 
  fontfamily: {
    fontFamily: 'Poppins Regular',
    color: 'black'
  },
  textHeadline: {
    fontSize: 17,
    fontFamily: 'Poppins-SemiBold'
  },
  textSubHeadline: {
    fontSize: 12,
  },
  section1: {
    alignContent: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 34,
    width: '100%',
    height: 121,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  shadowProp: {
    elevation: 8,
    shadowColor: '#00000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  textTitle2: {
    fontSize: 22,
  },
  totalPokemon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
})