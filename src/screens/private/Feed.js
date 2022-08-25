import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 16,
  },
  box: {
    backgroundColor: "#fff",
    elevation: 16,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    padding: 24,
    borderRadius: 20,
  },
  citacao: {
    top: -30,
    fontSize: 12,
    letterSpacing: 1,
  },
  bold: {
    fontWeight: "bold",
  },
  image: {
    borderRadius: 100,
    top: -40,
    left: -30,
    width: 70,
    height: 70,
  },
});

const douglas = require("../../../assets/douglas.jpg");


export function Feed() {
  return (
    <View style={styles.container}>
      <Text>Bem Vindo, {user.user} ({user.email})</Text>
      <Text style={styles.titulo}>Citação do dia</Text>
      <TouchableOpacity onPress={() => alert("NOTA 10")}>
        <View style={styles.box}>
          <Image source={douglas} style={styles.image} />
          <Text style={styles.citacao}>
            Posso dizer que o aplicativo{" "}
            <Text style={styles.bold}>NoteMaximale</Text>, do francês 'Nota
            Máxima' foi o App que mudou minha vida, para melhor. Coma abacaxi.
          </Text>
          <Text>~ Cabral, Douglas</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
