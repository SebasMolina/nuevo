import React from "react";
import { View, Text, Button  } from "react-native";

export default function ThirdScreen( {navigation} ) {
    /*
    volver = ()=>{
        navigation.navigate.goBack()
    }
    */
    goToFirstScreen = () => {
        console.log('Presiono el boton de la primer pantalla')
        navigation.navigate('FirstScreen')
    }
    goToSecondScreen = () => {
        console.log('Presiono el boton de la segunda pantalla')
        navigation.navigate('SecondScreen')
    }
    const  volver = () => {
        console.log('vuelvo')
        navigation.goBack()
    }
    
    return(
        <View>
            <Text style={{ marginTop: 150, fontSize: 34 }}> THIRD SCREEN </Text>
            
            <Button title='VOLVER' onPress={() => volver()}/>

            <Button title='Primer Pantalla' onPress={() => goToFirstScreen()}/>
            
            <Button title='Segunda Pantalla' onPress={() => goToSecondScreen()}/>            

        </View>
    )
}