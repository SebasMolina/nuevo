import React from "react";
import { View, Text, Button  } from "react-native";
import styles from './Styles'

export default function SecondScreen( {navigation} ) {
    goToFirstScreen = () => {
        console.log('Presiono el boton de la primer pantalla')
        navigation.navigate('FirstScreen')
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
            <Text style={styles.text}> SECOND SCREEN </Text>
            <View style={styles.space}></View>
            <Button title='VOLVER' onPress={() => volver()} color='purple'/>
            <View style={styles.space}></View>
            <Button  title='Primer Pantalla' onPress={() => goToFirstScreen()} color='blue'/>
            <View style={styles.space}></View>
            <Button title='Tercer Pantalla' onPress={() => goToThirdScreen()} color='green'/>
            
        </View>
    )
}