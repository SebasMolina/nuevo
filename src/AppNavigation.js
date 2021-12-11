//importamos el stack navigator
import {createStackNavigator} from "react-navigation-stack";
//importamos las pantallas
import { HomeScreen, FirstScreen,SecondScreen, ThirdScreen } from "./screens/index";
//importamos un contenedor general que va a tener todas nuestras rutas
import { createAppContainer } from "react-navigation";

//

const AppNavigator = createStackNavigator(
    {
        HomeScreen,
        FirstScreen,
        SecondScreen,
        ThirdScreen
    },
    {
        initialRouteName: 'HomeScreen',
        headerMode: 'none'
    }

)

export default createAppContainer(AppNavigator);