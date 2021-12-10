import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { backgroundColor } from "react-native";


function App () {
  return (
    // solo una etiqueta se renderiza
    // por eso se escribe una etiqueta global que abarque todo
    <>
    <View style= {styles.container}>
      <Text style= {styles.textTitle}>  HOLA SAMANTA  </Text>
    </View>

    <View style= {styles.containerDos}>
      <Text style= {styles.textTitle}> Como estas? </Text>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    textTitle: {
      
      marginTop: 150,
      fontSize: 24,
      color: 'yellow'
    },

    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'red',
      textAlign: 'center'
    },

    containerDos: {
      flex: 2,
      justifyContent: 'center',
      backgroundColor: 'blue',
      textAlign: 'center'
    }



})

export default App
