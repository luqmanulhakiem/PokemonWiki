import {Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Homestyles } from '../Home/style'

const FavoriteScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={Homestyles.main}>
      <View style={Homestyles.grid} >
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
      </View>
      <View style={Homestyles.noData}>
        <Text style={Homestyles.fontfamily}>Pokemon tidak ditemukan</Text>
      </View>
    </ScrollView>
  )
}

export default FavoriteScreen