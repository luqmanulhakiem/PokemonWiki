import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faRuler, faScaleBalanced } from '@fortawesome/free-solid-svg-icons'

const DetailScreen = () => {
  return (
    <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
      <Image style={styles.detailImage} source={{uri: 'https://img.pokemondb.net/artwork/mew.jpg'}} />
      <Text style={[styles.fontfamily, styles.pokemonName]}>Mew</Text>
      <View style={styles.flexRow}>
        <Text style={[styles.fontfamily, styles.textTipe]}>Tipe A</Text>
        <Text style={[styles.fontfamily, styles.textTipe]}>Tipe B</Text>
      </View>
      <View style={styles.divider}></View>
      <View style={[styles.flexRow, styles.infoStats]}>
        <View>
          <View style={styles.flexRow}>
            <FontAwesomeIcon icon={faScaleBalanced} />
            <Text style={[styles.fontfamily, styles.textCaption2]}>Weight</Text>
          </View>
          <View style={styles.cardStats}>
            <Text style={[styles.fontfamily, styles.textStats]}>10 Kg</Text>
          </View>
        </View>
        <View>
          <View style={styles.flexRow}>
            <FontAwesomeIcon icon={faRuler} />
            <Text style={[styles.fontfamily, styles.textCaption2]}>Height</Text>
          </View>
          <View style={styles.cardStats}>
            <Text style={[styles.fontfamily, styles.textStats]}>10 cm</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.btnFav}>
        <Text style={[styles.fontfamily, styles.textFav]}>Save to favorite</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default DetailScreen

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
  detailImage: {
    height: 279,
    width: '100%',
    resizeMode: 'contain'
  },
  pokemonName: {
    marginTop: 34,
    fontSize: 34,
    fontfamily: 'Poppins-SemiBold'
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  textTipe: {
    marginTop: 10,
    marginRight: 10,
    fontSize: 12,
    color: 'white',
    backgroundColor: '#F6BD20',
    padding: 5,
    borderRadius: 10
  },
  divider: {
    marginTop: 34,
    marginBottom: 34,
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 2,
    width: '100%'
  },
  textCaption2: {
    fontSize: 12,
    marginLeft: 10
  },
  infoStats: {
    justifyContent: 'space-between'
  },
  cardStats: {
    backgroundColor: '#F6BD20',
    padding: 10,
    width: 169,
    height: 59,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 6
  },
  textStats: {
    color: 'white',
    fontSize: 20
  },
  btnFav: {
    marginTop: 34,
    backgroundColor: '#F6BD20',
    width: '100%',
    height: 49,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textFav: {
    fontSize: 20,
    color: 'white'
  }
})