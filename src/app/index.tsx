import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";

import Input from "../components/inputs/Input";
import Button from "../components/Button";
import FormContainer from "../components/containers/FormContainer";
import Background from "../components/Backgroud/Background";

export default function index() {
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [loginValido, setLoginValido] = useState(false);
  const router = useRouter();

  const valorUser = (text: string) => {
    setUsername(text);
  };

  const valorSenha = (text: string) => {
    setSenha(text);
  };

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Senha:", senha);

    if (username === "teste" && senha === "123") {
      setLoginValido(true);
    }
  };

  const navigateToHome = () => {
    router.navigate("/home");
  };

  if (loginValido) {
    navigateToHome();
  }

  return (
    <Background>
      <FormContainer>
        <View style={styles.card}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.imagem}
          />
          <Input onChangeText={valorUser} />
          <Input onChangeText={valorSenha} eSenha={true} />
          <Button onPress={handleLogin} />
        </View>
      </FormContainer>
    </Background>
  );
}

const styles = StyleSheet.create({
  imagem: {
    width: "12%",
    height: 50,
    marginBottom: 20,
    margin: "auto"
  },
  card: {
    width: "70%"
  }
});
