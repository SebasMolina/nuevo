import React from "react";
import { View, Text, Button  } from "react-native";

export default function FirstScreen( {navigation} ) {
    goToSecondScreen = () => {
        console.log('Presiono el boton de la segunda pantalla')
        navigation.navigate('SecondScreen')
    }
    goToThirdScreen = () => {
        console.log('Presiono el boton de la tercer pantalla')
        navigation.navigate('ThirdScreen')
    }
    const  volver = () => {
        console.log('vuelvo')
        navigation.goBack()
    }

    return(
        <View>
            <Text style={{ marginTop: 150, fontSize: 34 }}> FIRST SCREEN </Text>

            <Button title='VOLVER' onPress={() => volver()}/>
            
            <Button title='Segunda Pantalla' onPress={() => goToSecondScreen()}/>
            
            <Button title='Tercer Pantalla' onPress={() => goToThirdScreen()}/>
            
        </View>
    )
}