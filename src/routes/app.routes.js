import React from 'react';
import { Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Settings from '../screens/Settings';


const { Navigator, Screen } = createBottomTabNavigator();


const AppRoutes = () => {
    return(
        <Navigator 
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#000000',
                tabBarInactiveTintColor: '#808080',
                tabBarStyle: {
                    height: 88,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    backgroundColor: '#FFFFFF'

                }
            }}
        >
            <Screen 
            name="Home"
            component={Home}
            options={{
                tabBarIcon: (({size, color}) => {
                    return <AntDesign name="clockcircleo" size={size} color={color} />
                })
            }}
            />
            <Screen name="Settings" component={Settings}
             options={{
                tabBarIcon: (({size, color}) => {
                    return <FontAwesome name="user-o" size={size} color={color} />
                })
            }}
            />
        </Navigator>
    )
}

export default AppRoutes;