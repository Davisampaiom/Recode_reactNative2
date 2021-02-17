import React from 'react';
import { Text, SafeAreaView,View, TouchableOpacity, StyleSheet, Image } from "react-native";

import { Input} from '../../Components'
import map from '../../../assets/map.png'

export default function Login ({ navigation }){
    return(
<SafeAreaView style={styles.page}>
    <Image source={map} style={{width:200, height:200, marginBottom:40,}}/>
<Text style={styles.texto}>
    Se puder, fique em casa.
Mas se precisar, saia seguro.
</Text>
<View style={styles.input}>
<Input placeholder="  Usuario" />
<Input placeholder="  Senha"  />
</View>


<TouchableOpacity
          style={styles.botao}
          title="Login"
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={{ color: "#fff" }}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          title="Cadastrar"
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={{ color: "#fff" }}>Cadastrar</Text>
        </TouchableOpacity>



</SafeAreaView>

    )
}
const styles = StyleSheet.create({
    page:{ 
        flex:1,
        backgroundColor:'#c8e1e5',
        alignItems: 'center',
        justifyContent:'center',
    },
    botao:{
        backgroundColor: "#4e6872",
        width: '90%',
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        
        marginBottom: 10,
        
      },
      input:{ marginBottom:20,},
      texto:{
        
          marginBottom:40,
          fontSize: 25,
          justifyContent:'center',
          textAlign:'center'
      }
      
})