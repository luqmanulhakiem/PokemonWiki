import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Homestyles } from '../Home/style'
import axios from 'react-native-axios'
import { BASE_URL } from '../../data/utils/apiService'

const SearchScreen = ({route, navigation}) => {
  const { inputValue } = route.params;
  const [data, setData] = useState({});

  useEffect(() => {
    getData();
  }, [])

  async function getData(){
      try {   
        const res = await axios.get(`${BASE_URL}/${inputValue}`);
        console.log(res.data.species)
        console.log(res.data.species.length)
        if (res) {
            setData(res.data.species)
        }
      } catch (error) {
        console.log(error)
      }
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={Homestyles.main}>
      <View style={Homestyles.grid} >
        {data.name != null ?
                <TouchableOpacity style={Homestyles.cardItem} onPress={() => navigation.navigate("DetailScreen", {inputValue})}>
                  <Image style={Homestyles.cardImage} source={{uri: `https://img.pokemondb.net/artwork/${data.name}.jpg`}} />
                  <Text style={Homestyles.cardText}>{data.name}</Text>
                </TouchableOpacity>
            :
            <View style={Homestyles.noData}>
              <Text style={Homestyles.fontfamily}>Pokemon {inputValue} tidak ditemukan</Text>
            </View>
          }
      </View>
    </ScrollView>
  )
}

export default SearchScreen