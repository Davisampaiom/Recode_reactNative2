import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function Input({placeholder}) {
  return (
    <TextInput
      type="text"
      placeholder=  {placeholder}
      placeholderTextColor="#4e6872"
     style={styles.input}
    />
   
  );
}
const styles = StyleSheet.create({
    input:{ width:370,
           height:35,
           borderRadius:7,
           marginBottom:15,
           color:'#4e6872',
           borderColor: '#4e6872',
            borderWidth: 1,
             }
    
})