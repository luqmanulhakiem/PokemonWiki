import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faRuler, faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import axios from 'react-native-axios'
import { BASE_URL } from '../../data/utils/apiService'

const DetailScreen = ({route}) => {
  const { inputValue } = route.params;

  const [data, setData] = useState({});
  const [type, setType] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, [])

  async function getData(){
    setLoading(true)
      try {   
        const res = await axios.get(`${BASE_URL}/${inputValue}`);
        console.log(res.data.types)
        console.log(res.data.types[0].type.name)
        if (res) {
            setData(res.data)
            setType(res.data.types)
            setLoading(true)
        }
      } catch (error) {
        console.log(error)
      }
  }

  return (
    <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
      <Image style={styles.detailImage} source={{uri: `https://img.pokemondb.net/artwork/${inputValue}.jpg`}} />
      <Text style={[styles.fontfamily, styles.pokemonName]}>{inputValue}</Text>
      <View style={styles.flexRow}>
        {type.length > 0 
          ?
          type.map((item, key) => {
            return (
              <Text key={key} style={[styles.fontfamily, styles.textTipe]}>{item.type.name}</Text>
            )
          })
          :
          <Text></Text>
        }
      </View>
      <View style={styles.divider}></View>
      <View style={[styles.flexRow, styles.infoStats]}>
        <View>
          <View style={styles.flexRow}>
            <FontAwesomeIcon icon={faScaleBalanced} />
            <Text style={[styles.fontfamily, styles.textCaption2]}>Weight</Text>
          </View>
          <View style={styles.cardStats}>
            <Text style={[styles.fontfamily, styles.textStats]}>{data.weight} Kg</Text>
          </View>
        </View>
        <View>
          <View style={styles.flexRow}>
            <FontAwesomeIcon icon={faRuler} />
            <Text style={[styles.fontfamily, styles.textCaption2]}>Height</Text>
          </View>
          <View style={styles.cardStats}>
            <Text style={[styles.fontfamily, styles.textStats]}>{data.height} cm</Text>
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