import React, { Component } from "react";
import { Button, Text, View } from "react-native";

export default class App extends Component{
    constructor(props){
      super(props);
      this.state = {
        nombre: 'Samanta',
        apellido: 'Molina'
      }
    }


    componentDidMount(){
      //this.saludar()
    } 

    cambiarNombre = () => {
      this.setState({ nombre: 'SEBASTIAN', apellido:'MOLINA' })
      console.log('Boton presionado')
    }
    render() {
        return(
            <View>
              <Text style={{ marginTop: 150, fontSize: 30 }} >Hola {this.state.nombre} {this.state.apellido} </Text>
              <Button title= 'Cambiar Nombre' onPress={() => this.cambiarNombre()}/>

            </View>
        )
    }
}