import React from "react";
import {
  TextInput as RNTextInput,
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

import logo from "../../../assets/globo.jpg";
import { loginIsValid } from "../../utils/Validators";
import userService from "../../service/UserService";

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

function goToInside(props, userData) {
  props.navigation.navigate("InsideApp", {
    index: 0,
    screen: "Feed",
    params: { user: userData },
  });
}

function goToRegister(props) {
  props.navigation.navigate("Register");
}

export const Login = (props) => {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");

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
          placeholder="Senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <TouchableOpacity
          onPress={() => {
            console.log(user);
            if (loginIsValid(user, password)) {
              userService
                .login({ user: user, password: password })
                .then((userData) => {
                  if (userData) {
                    global.user = userData;
                    goToInside(props, userData);
                  }
                })
                .catch((e) => alert(e));
            }
          }}
        >
          <Text style={styles.button}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            goToRegister(props);
          }}
        >
          <Text style={styles.buttonSecondary}>Registre-se</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
