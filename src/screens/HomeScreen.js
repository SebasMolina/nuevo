import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
    goToFirstScreen = () => {
        console.log('Presiono el boton de la primer pantalla')
        navigation.navigate('FirstScreen')
    }
    goToSecondScreen = () => {
        console.log('Presiono el boton de la segunda pantalla')
        navigation.navigate('SecondScreen')
    }
    goToThirdScreen = () => {
        console.log('Presiono el boton de la tercer pantalla')
        navigation.navigate('ThirdScreen')
    }


    return(
        <View>
            <Text style={{ marginTop: 150, fontSize: 34 }}> HOME SCREEN </Text>
            
            <Button title='Primer Pantalla' onPress={() => goToFirstScreen()}/>
            
            
            <Button title='Segunda Pantalla' onPress={() => goToSecondScreen()}/>
            
            
            <Button title='Tercer Pantalla' onPress={() => goToThirdScreen()}/>
        </View>
    )
}