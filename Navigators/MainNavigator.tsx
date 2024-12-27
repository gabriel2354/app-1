import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pagina1Screen from '../screens/Pagina1Screen';
import Pagina2Screen from '../screens/Pagina2Screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';

const tab = createBottomTabNavigator();

function MyTabs(){
    return (
        <tab.Navigator>
            <tab.Screen name='Pagina1' component={Pagina1Screen} />
            <tab.Screen name='Pagina2' component={Pagina2Screen} />
        </tab.Navigator>
    )
}

//

const Stack = createStackNavigator();
function MyStack(){
    return (
    <Stack.Navigator screenOptions={ ()=> ({ headerShown: false})}>
        <Stack.Screen name='Welcome' component={ WelcomeScreen }/>
        <Stack.Screen name='Bottom' component={ MyTabs }/>
    </Stack.Navigator>
    )
}

export default function MainNavigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    );
    }      


        



