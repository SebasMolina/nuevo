import React from "react";
import { View, Text, Button  } from "react-native";
import styles from './Styles'

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
        <View style={styles.container}>
            <Text style={styles.text}> THIRD SCREEN </Text>
            <View style={styles.space}></View>
            <Button title='VOLVER' onPress={() => volver()}/>
            <View style={styles.space}></View>
            <Button  title='Primer Pantalla' onPress={() => goToFirstScreen()} color='blue'/>
            <View style={styles.space}></View>
            <Button title='Segunda Pantalla' onPress={() => goToSecondScreen()} color= 'red'/>            

        </View>
    )
}