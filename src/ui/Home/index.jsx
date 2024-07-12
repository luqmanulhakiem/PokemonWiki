import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.fontfamily}>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  fontfamily: {
    fontFamily: 'Poppins Regular'
  },
})