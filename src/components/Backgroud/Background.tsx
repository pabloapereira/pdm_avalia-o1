import { View, Text, StyleSheet } from "react-native";
import React, { PropsWithChildren } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function Background({ children }: PropsWithChildren) {
  return (
    <LinearGradient
      colors={["rgba(0,0,0,0.8)", "transparent"]}
      style={styles.background}
    >
      <View style={styles.content}>{children}</View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
