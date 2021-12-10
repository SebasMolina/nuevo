import React, { Component } from "react";
import { View } from "react-native";

export default class App extends Component{
    
    componentDidMount(){} //ejecutar funciones desde el inicio    
    componentDidCatch(){} //cachear un error desde el comienzo de la aplicacion
    componentDidUpdate(){} //obtener cambios cuando la app se actualice
    componentWillUnmount(){} // ejecutar la muerte de alguna suscripcion, 
                             // api o algo encolado ejecutandose en la app


    render() {

    /* necesario para poder renderizar lo que queremos mostrar*/
        return(
            <View>
            
            </View>
        )
    }
}