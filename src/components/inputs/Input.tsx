import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, {useState} from 'react'

interface InputProps {
  eSenha?: boolean;
  onChangeText:(text: string) => void;
}

export default function Input({eSenha, onChangeText} : InputProps) {

  const [text, setText] = useState('');

  return (
    <View>
      <TextInput style={styles.caixa} secureTextEntry={eSenha ? true : false} 
        onChangeText={(inputText) => {
        setText(inputText); // Atualiza o estado com o valor do texto
        onChangeText(inputText); // Chama a função fornecida com o novo valor do texto
      }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  caixa: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 7,
    color: "white",
    padding: 10
  }
})