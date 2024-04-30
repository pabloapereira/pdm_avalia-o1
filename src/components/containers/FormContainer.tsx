import { View, Text, StyleSheet } from 'react-native';
import React, { PropsWithChildren } from "react";

export default function FormContainer({ children }: PropsWithChildren) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        
    }
})