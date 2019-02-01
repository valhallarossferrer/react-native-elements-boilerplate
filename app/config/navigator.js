import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer, createDrawerNavigator, createMaterialTopTabNavigator, } from "react-navigation";
import Home from "../screens/Home"
import Page2 from "../screens/Page2"
import Avatars from "../screens/Avatars"


const Tabs = createMaterialTopTabNavigator({
    TabA: { screen: Home },
    TabB: { screen: Home },
    TabC: { screen: Home },
}, {
        order: ['TabA', 'TabB', 'TabC']
    })

const Drawer = createDrawerNavigator({
    Avatars: { screen: Avatars },
    Home: { screen: Home },
    Page2: { screen: Page2 },
    Tabs: { screen: Tabs },
})


const AppNavigator = createStackNavigator({
    Drawer: {
        screen: Drawer
    },
    Home: {
        screen: Home
    },
}, {
        headerMode: 'none',
        initialRouteName: 'Drawer',
    });


export default createAppContainer(Drawer);