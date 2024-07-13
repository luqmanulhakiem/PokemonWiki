import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Avatar } from '../../assets/svg'
import { Homestyles } from './style'
import { BASE_URL } from '../../data/utils/apiService'
import axios from 'react-native-axios'

const HomeScreen = ({navigation}) => {

  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    getData();
  }, [])

  async function getData(){
      try {   
        const res = await axios.get(`${BASE_URL}`);
        const result = {
            data: res.data.results,
        };
        if (res) {
            setData(res.data.results)
        }
      } catch (error) {
        console.log(error)
      }
  }

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
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
            placeholder='Search Pokemon...'
          />
          <TouchableOpacity style={Homestyles.btnSearch} onPress={() => navigation.navigate("SearchScreen", {inputValue})}>
            <FontAwesomeIcon style={{color: 'white'}} icon={faSearch} />
          </TouchableOpacity>
        </View>
        <View style={Homestyles.grid}>
          {data.length > 0 ?
          data.map((item, key) => {
              return (
                <TouchableOpacity key={key} style={Homestyles.cardItem} onPress={() => navigation.navigate("DetailScreen", {inputValue})}>
                  <Image style={Homestyles.cardImage} source={{uri: `https://img.pokemondb.net/artwork/${item.name}.jpg`}} />
                  <Text style={Homestyles.cardText}>{item.name}</Text>
                </TouchableOpacity>
              );
            })
            :
            <View style={Homestyles.noData}>
              <Text style={Homestyles.fontfamily}>Pokemon tidak ditemukan</Text>
            </View>
          }
          
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen