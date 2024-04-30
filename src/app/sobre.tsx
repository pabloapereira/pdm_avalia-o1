import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Link, Stack} from "expo-router";
import { useRouter } from "expo-router";
import { A } from "@expo/html-elements";
import { Ionicons } from "@expo/vector-icons";
import { useActionSheet } from "@expo/react-native-action-sheet";
import FormContainer from "../components/containers/FormContainer";

import Background from "../components/Backgroud/Background";

export default function sobre() {
  const { showActionSheetWithOptions } = useActionSheet();

  const router = useRouter();

  const voltarLogin = () => {
    router.dismissAll()
  };

  const options = ["logout"];
  const destructiveButtonIndex = options.indexOf("logout");

  const abrir = () => {
    showActionSheetWithOptions(
      {
        options,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        if( buttonIndex === 0) {
          voltarLogin()
        }
      }
    );
  };

  return (
    <Background>
      <FormContainer>
        <View>
          <Stack.Screen
            options={{
              title: "CheCar",
              headerRight: () => (
                <TouchableOpacity onPress={abrir}>
                  <Ionicons name="menu-outline" size={24} color="black" />
                </TouchableOpacity>
              ),
            }}
          />
          <View style={styles.card}>
            <View style={[styles.info, styles.section]}>
              <Text style={styles.h1}>CheCar</Text>
              <Text style={styles.p}>1.0</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.h2}>Pablo A. Pereira</Text>
              <A href="https://github.com/pabloapereira/" style={styles.link}>
                GitHub
              </A>
            </View>
          </View>
        </View>
      </FormContainer>
    </Background>
  );
}

const styles = StyleSheet.create({
  section: {
    alignItems: "center",
    backgroundColor: "#7878B4",
    borderRadius: 10,
    padding: 10,
  },
  info: {
    marginBottom: "20%",
  },
  h1: {
    fontSize: 30,
    fontWeight: "bold",
  },
  h2: {
    fontSize: 20,
    fontWeight: "800",
  },
  link: {
    fontSize: 16,
    color: "blue",
    padding: 5,
  },
  card: {
    backgroundColor: "#090935",
    padding: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  p: {
    fontSize: 16,
  },
});
