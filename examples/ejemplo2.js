import React, { Component } from "react";
import { View, Button, Text } from "react-native";

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            nombre: 'Maria',
            apellido: 'Gonzalez'
        }
    }

    componentDidMount(){
        //this.saludar()
    }

    cambiarNombre = ()=> {
        this.setState({nombre: 'Lucia', apellido: 'Ramirez'})
        console.log('Presiono el boton')
    }
    
    render() {

    
        return(
            <View>
                <Text style= {{MarginTop: 150}}>Hola {this.state.nombre} {this.state.apellido}</Text>
                <Button title='Cambiar Nombre' onPress={()=> this.cambiarNombre}/>
            </View>
        )
    }
}