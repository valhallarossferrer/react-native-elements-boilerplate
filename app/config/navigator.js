import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer, createDrawerNavigator, createMaterialTopTabNavigator, } from "react-navigation";
import Home from "../screens/Home"
import Page2 from "../screens/Page2"

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home
    }
});


const Tabs = createMaterialTopTabNavigator({
    TabA: { screen: Home },
    TabB: { screen: Home },
    TabC: { screen: Home },
}, {
        order: ['TabA', 'TabB', 'TabC']
    })

const Drawer = createDrawerNavigator({
    Home: { screen: Home },
    Page2: { screen: Page2 },
    Tabs: { screen: Tabs },
})

export default createAppContainer(Drawer);