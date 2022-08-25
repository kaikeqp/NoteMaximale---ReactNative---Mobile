import React from "react";
import {
  TextInput as RNTextInput,
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    padding: 40,
    width: null,
    height: null,
  },
  textInput: {
    borderRadius: 16,
    backgroundColor: "#ddd",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 8,
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 16,
  },
  button: {
    borderRadius: 16,
    backgroundColor: "#E91C5D",
    marginTop: 40,
    fontSize: 24,
    color: "#ddd",
    textAlign: "center",
  },
  buttonSecondary: {
    marginTop: 40,
    fontSize: 24,
    color: "#ddd",
    textAlign: "center",
  },
});

import logo from "../../../assets/globo.jpg";

import { registerIsValid } from "../../utils/Validators";
import userService from "../../service/UserService";

function goToLogin(props) {
  props.navigation.navigate("Login");
}

export const Register = (props) => {
  const [user, setUser] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");

  return (
    <View style={styles.container}>
      <ImageBackground source={logo} style={styles.imageBackground}>
        <RNTextInput
          style={styles.textInput}
          placeholder="Usuário"
          value={user}
          onChangeText={(text) => setUser(text)}
        />
        <RNTextInput
          style={styles.textInput}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          autoComplete="email"
        />
        <RNTextInput
          style={styles.textInput}
          placeholder="Senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <RNTextInput
          style={styles.textInput}
          placeholder="Confirme a Senha"
          value={passwordConfirm}
          onChangeText={(text) => setPasswordConfirm(text)}
          secureTextEntry
        />
        <TouchableOpacity
          onPress={() => {
            if (registerIsValid(user, email, password, passwordConfirm)) {
              userService.register({ user, email, password }).then(() => {
                goToLogin(props);
              });
            }
          }}
        >
          <Text style={styles.button}>Registrar-se</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            goToLogin(props);
        }}
        >
          <Text style={styles.buttonSecondary}>voltar para Login</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
