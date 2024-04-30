import {
  View,
  Text,
  SectionList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { useRouter } from "expo-router";

import data from "../services/data";
import Background from "../components/Backgroud/Background";
import FormContainer from "../components/containers/FormContainer";

export default function Home() {
  // sobre
  const { showActionSheetWithOptions } = useActionSheet();

  const router = useRouter();

  const voltarLogin = () => {
    router.dismissAll();
  };

  const options = ["Sobre", "logout"];
  const destructiveButtonIndex = options.indexOf("logout");

  const abrir = () => {
    showActionSheetWithOptions(
      {
        options,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        if (buttonIndex === 1) {
          voltarLogin();
        }
         (buttonIndex === 2) 
          router.navigate('/sobre')
        
      }
    );
  };

  // Fim sobre

  const arrayBrand: string[] = [];

  data.map((item) => {
    if (!arrayBrand.includes(item.brand)) {
      arrayBrand.push(item.brand);
    }
  });

  const arrayCar = arrayBrand.map((marca) => ({
    title: marca,
    data: data.filter((car) => car.brand === marca),
  }));

  return (
    <View style={styles.container}>
      <Background>
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
        <SectionList
          style={styles.sectionList}
          sections={arrayCar}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.modelCar}>
                <Text style={styles.id}>{item.id}</Text>
                <Text style={styles.h1}>{item.model}</Text>
              </View>
              <Text style={styles.section}>{item.year}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </Background>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    //paddingHorizontal: 20,
    width: "100%",
    height: "100%",
  },
  sectionList: {
    width: "100%",
  },
  header: {
    fontSize: 24, 
    backgroundColor: "#131370",
    padding: 15,
    marginTop: 20,
    marginBottom: 10,
    color: "#fff",
    width: "100%",
    borderRadius: 6,
    alignItems: "center",
  },
  item: {
    backgroundColor: "#090935",
    marginLeft: "7.5%",
    width: "85%",
    borderRadius: 6,
    padding: 6,
    paddingHorizontal: 20,
    marginVertical: 8,
  },
  section: {
    marginBottom: 3,
    backgroundColor: "#7979B5",
    borderRadius: 5,
    padding: 6,
    color: "#fff",
    fontSize: 15,
  },
  h1: {
    fontSize: 18,
    fontWeight: "400",
    color: "white",
  },
  id: {
    color: "white",
    backgroundColor: "#7979B5",
    height: 50,
    width: 50,
    borderRadius: 50,
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 20
  },
  modelCar: {
    flexDirection: "row",
    gap: 10, 
    marginBottom: 20,
    alignItems: 'center'
  }
});
