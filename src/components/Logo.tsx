import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Logo() {
  return (
    <View>
      <Image source={require('../../assets/logo.png')} style={styles.imagem     } />
    </View>
  )
}

const styles = StyleSheet.create({
    imagem: {
        width: '12%',
        height: 50,
        resizeMode: 'cover',
    }
})