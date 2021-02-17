import React from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import MapView from "react-native-maps";


export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.page}>
      <Text style={styles.texto}>
        Se puder, fique em casa. Mas se precisar, saia seguro
      </Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -22.8289336,
          longitude: -43.0567354,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      
      <TouchableOpacity style={styles.botao} title="Alertas">
        <Text style={{ color: "#fff" }}>Alertas</Text>
      </TouchableOpacity>
    
      
      <TouchableOpacity style={styles.botao} title="Novo Alerta">
        <Text style={{ color: "#fff" }}>Novo Alerta</Text>
      </TouchableOpacity>

    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#c8e1e5",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: 600,

    marginBottom:40,
  },
  texto: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  botao: {
    backgroundColor: "#4e6872",
    width: "90%",
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,

    marginBottom: 10,
    
  },
});
