import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from "./Home";
import Perfil from "./Perfil";


const Tab = createBottomTabNavigator();

export default function Routes() {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#000000",
                    borderTopColor: "transparent",
                    paddingVertical: 8, 
                    height: 60,

                },
                tabBarActiveTintColor: "#FFFFFF",
                tabBarLabelStyle: {
                    paddingBottom: 5,
                    paddingTop: -2,
                },
                headerShown: false, // Esconder o cabeçalho por padrão
            }}
        >

            <Tab.Screen
                name="HOME"
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Icon name="home" solid size={size} color={color} />
                    ),
                    
                }}
            />

            <Tab.Screen
                name="PERFIL"
                component={Perfil}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Icon name="user" solid size={size} color={color} />
                    )
                }}
            />

        </Tab.Navigator>
    )
}