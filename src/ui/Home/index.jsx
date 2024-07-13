import { Button, Image, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Avatar } from '../../assets/svg'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.section1}>
          <View>
          <Text style={[styles.fontfamily, styles.textHeader]}>Welcome,</Text>
          <Text style={[styles.fontfamily, styles.textHeader]}>Trainer</Text>

          </View>
          <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
            <Avatar />
          </TouchableOpacity>
        </View>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.inputSearch}
            placeholder='Search Pokemon...'
          />
          <View style={styles.btnSearch} onPresss="">
            <FontAwesomeIcon style={{color: 'white'}} icon={faSearch} />
          </View>
        </View>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.cardItem}>
            <Image style={styles.cardImage} source={{uri: 'https://img.pokemondb.net/artwork/mewtwo.jpg'}} />
            <Text style={styles.cardText}>Nama Pokemon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardItem}>
            <Image style={styles.cardImage} source={{uri: 'https://img.pokemondb.net/artwork/mewtwo.jpg'}} />
            <Text style={styles.cardText}>Nama Pokemon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardItem}>
            <Image style={styles.cardImage} source={{uri: 'https://img.pokemondb.net/artwork/mewtwo.jpg'}} />
            <Text style={styles.cardText}>Nama Pokemon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardItem}>
            <Image style={styles.cardImage} source={{uri: 'https://img.pokemondb.net/artwork/mewtwo.jpg'}} />
            <Text style={styles.cardText}>Nama Pokemon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardItem}>
            <Image style={styles.cardImage} source={{uri: 'https://img.pokemondb.net/artwork/mewtwo.jpg'}} />
            <Text style={styles.cardText}>Nama Pokemon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardItem}>
            <Image style={styles.cardImage} source={{uri: 'https://img.pokemondb.net/artwork/mewtwo.jpg'}} />
            <Text style={styles.cardText}>Nama Pokemon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardItem}>
            <Image style={styles.cardImage} source={{uri: 'https://img.pokemondb.net/artwork/mewtwo.jpg'}} />
            <Text style={styles.cardText}>Nama Pokemon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardItem}>
            <Image style={styles.cardImage} source={{uri: 'https://img.pokemondb.net/artwork/mewtwo.jpg'}} />
            <Text style={styles.cardText}>Nama Pokemon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardItem}>
            <Image style={styles.cardImage} source={{uri: 'https://img.pokemondb.net/artwork/mewtwo.jpg'}} />
            <Text style={styles.cardText}>Nama Pokemon</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen

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
  section1: {
    alignContent: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  textHeader: {
    fontSize: 28,
  },
  inputSearch: {
    backgroundColor: '#D5D5D5',
    borderRadius: 10,
    paddingLeft: 25,
    width: 280
  },
  searchBar: {
    marginTop: 34,
    alignContent: 'flex-start',
    flexDirection: 'row',
  },
  btnSearch: {
    margin: 'auto',
    height: 50,
    width: 72,
    backgroundColor: '#F6BD20',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  grid: {
    marginTop: 34,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  cardItem: {
    marginRight: 20,
    marginBottom: 20,
    backgroundColor: '#F6BD20',
    width: 169,
    borderColor: '#F6BD20',
    borderWidth: 1,
    borderRadius: 10,
    padding: 1,
    overflow: 'hidden',
  },
  cardImage: {
    height: 156,
    width: 169,
  },
  cardText: {
    fontSize: 17,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    marginTop: 10,
    color: 'white'
  }
})