import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

interface buttonProps{
  onPress:() => void;
}

export default function Button({onPress}: buttonProps) {

const image = {uri: "https://img.freepik.com/fotos-gratis/carro-luxuoso-estacionado-na-estrada-com-um-farol-iluminado-ao-por-do-sol_181624-60607.jpg?size=626&ext=jpg&ga=GA1.1.344339545.1713830536&semt=sph"}
  return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <ImageBackground style={styles.imageBackground} source={image}>
                <Text style={styles.text}>Login</Text>
            </ImageBackground>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
        button: {
          width: '100%',
          height: 50,
          borderColor: "#131370",
          borderWidth: 3
        },
        imageBackground: {
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'flex-end',
          resizeMode: 'cover',
        },
        text: {
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
          paddingRight: 50
        },
})