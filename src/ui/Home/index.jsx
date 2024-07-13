import { Button, Image, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Avatar } from '../../assets/svg'
import { Homestyles } from './style'

const HomeScreen = ({navigation}) => {
  return (
    <View style={Homestyles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Homestyles.section1}>
          <View>
          <Text style={[Homestyles.fontfamily, Homestyles.textHeader]}>Welcome,</Text>
          <Text style={[Homestyles.fontfamily, Homestyles.textHeader]}>Trainer</Text>

          </View>
          <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
            <Avatar />
          </TouchableOpacity>
        </View>
        <View style={Homestyles.searchBar}>
          <TextInput
            style={Homestyles.inputSearch}
            placeholder='Search Pokemon...'
          />
          <TouchableOpacity style={Homestyles.btnSearch} onPress={() => navigation.navigate("SearchScreen")}>
            <FontAwesomeIcon style={{color: 'white'}} icon={faSearch} />
          </TouchableOpacity>
        </View>
        <View style={Homestyles.grid}>
          <TouchableOpacity style={Homestyles.cardItem} onPress={() => navigation.navigate("DetailScreen")}>
            <Image style={Homestyles.cardImage} source={{uri: 'https://img.pokemondb.net/artwork/mewtwo.jpg'}} />
            <Text style={Homestyles.cardText}>Nama Pokemon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Homestyles.cardItem}>
            <Image style={Homestyles.cardImage} source={{uri: 'https://img.pokemondb.net/artwork/mewtwo.jpg'}} />
            <Text style={Homestyles.cardText}>Nama Pokemon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Homestyles.cardItem}>
            <Image style={Homestyles.cardImage} source={{uri: 'https://img.pokemondb.net/artwork/mewtwo.jpg'}} />
            <Text style={Homestyles.cardText}>Nama Pokemon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Homestyles.cardItem}>
            <Image style={Homestyles.cardImage} source={{uri: 'https://img.pokemondb.net/artwork/mewtwo.jpg'}} />
            <Text style={Homestyles.cardText}>Nama Pokemon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Homestyles.cardItem}>
            <Image style={Homestyles.cardImage} source={{uri: 'https://img.pokemondb.net/artwork/mewtwo.jpg'}} />
            <Text style={Homestyles.cardText}>Nama Pokemon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Homestyles.cardItem}>
            <Image style={Homestyles.cardImage} source={{uri: 'https://img.pokemondb.net/artwork/mewtwo.jpg'}} />
            <Text style={Homestyles.cardText}>Nama Pokemon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Homestyles.cardItem}>
            <Image style={Homestyles.cardImage} source={{uri: 'https://img.pokemondb.net/artwork/mewtwo.jpg'}} />
            <Text style={Homestyles.cardText}>Nama Pokemon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Homestyles.cardItem}>
            <Image style={Homestyles.cardImage} source={{uri: 'https://img.pokemondb.net/artwork/mewtwo.jpg'}} />
            <Text style={Homestyles.cardText}>Nama Pokemon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Homestyles.cardItem}>
            <Image style={Homestyles.cardImage} source={{uri: 'https://img.pokemondb.net/artwork/mewtwo.jpg'}} />
            <Text style={Homestyles.cardText}>Nama Pokemon</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen