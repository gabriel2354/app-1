import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pagina1Screen from '../screens/Pagina1Screen';
import Pagina2Screen from '../screens/Pagina2Screen';
import { NavigationContainer } from '@react-navigation/native';


const tab = createBottomTabNavigator();

function MyTabs(){
    return (
        <tab.Navigator>
            <tab.Screen name='Pagina1' component={Pagina1Screen} />
            <tab.Screen name='Pagina2' component={Pagina2Screen} />
        </tab.Navigator>
    )
}

export default function BottomTab(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
        


        

    );
}