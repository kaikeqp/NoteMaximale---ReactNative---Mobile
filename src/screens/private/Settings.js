import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { removeAll } from "../../Storage";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingHorizontal: 32,
  },
  buttomDanger: {
    backgroundColor: "red",
    paddingVertical: 14,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#bbb",
    marginVertical: 7,
    marginBottom: 16,
  },
  text: {
    color: "#fff",
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "500",
  },
});

export function Settings(props) {
  const isAdmin = user.user === "fiap" ? true : false;

  return (
    <View style={styles.container}>
      {isAdmin && (
        <TouchableOpacity
          style={styles.buttomDanger}
          onPress={() => {
            props.navigation.navigate("Login");
            removeAll();
          }}
        >
          <Text style={styles.text}>Limpar o banco de dados</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={styles.buttomDanger}
        onPress={() => props.navigation.navigate("Login")}
      >
        <Text style={styles.text}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
