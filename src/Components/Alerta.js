import React from 'react';
import { View , Text } from 'react-native';


const Alerta = ({nome, alerta}) => {
  return (
<View style={{flex:1,width:210, padding:10, margin:10, borderRadius:10, backgroundColor:'#fff'}}>
  <Text>Usuario: {nome}</Text>
  <Text>Diz: {alerta}</Text>

</View>
  )
}

export default Alerta;