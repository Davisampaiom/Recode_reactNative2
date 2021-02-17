import React from 'react';
import { Text, SafeAreaView,View, TouchableOpacity, StyleSheet, Image } from "react-native";

import { Input} from '../../Components'
import map from '../../../assets/map.png'

export default function Cadastro ({ navigation }){
    return(
<SafeAreaView style={styles.page}>
    <Image source={map} style={{width:100, height:100, marginBottom:40,}}/>
    <Text style={styles.texto}>
    Informe seus dados para o cadastro</Text>
<View style={styles.input}>
<Input placeholder="  Nome completo" />
<Input placeholder="  Usuario" />
<Input placeholder="  Data de nascimento" />
<Input placeholder="  Email" />
<Input placeholder="  Senha"  />
</View>




        <TouchableOpacity
          style={styles.botao}
          title="Cadastrar"
          onPress={() => navigation.navigate("Login")}
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
          marginBottom:20,
          fontSize: 20,
      }
      
})