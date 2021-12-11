import React from "react";
import { View, Text, Button } from "react-native";
import styles from './Styles'

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
        <View style={styles.container}>
            <Text style={styles.text}> HOME SCREEN </Text>
            <View style={styles.space}></View>
            <Button  title='Primer Pantalla' onPress={() => goToFirstScreen()} color='blue'/>
            <View style={styles.space}></View>
            
            <Button title='Segunda Pantalla' onPress={() => goToSecondScreen()} color= 'red'/>
            <View style={styles.space}></View>
            
            <Button title='Tercer Pantalla' onPress={() => goToThirdScreen()} color= 'green'/>
        </View>
    )
}