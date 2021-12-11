import React from "react";
import { View, Text, Button  } from "react-native";
import styles from './Styles'

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
        <View style={styles.container}>
            <Text style={styles.text}> FIRST SCREEN </Text>
            <View style={styles.space}></View>
            <Button title='VOLVER' onPress={() => volver()} color='purple'/>
            <View style={styles.space}></View>
            <Button title='Segunda Pantalla' onPress={() => goToSecondScreen()} color='red'/>
            <View style={styles.space}></View>
            <Button title='Tercer Pantalla' onPress={() => goToThirdScreen()} color='green'/>
            
        </View>
    )
}