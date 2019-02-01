import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer, createDrawerNavigator, createMaterialTopTabNavigator, } from "react-navigation";
import Avatars from "../screens/Avatars";
import Badges from "../screens/Badges";
import Buttons from "../screens/Buttons";
import Cards from "../screens/Cards";
import CheckBoxes from "../screens/CheckBoxes";


const Tabs = createMaterialTopTabNavigator({
    TabA: { screen: Avatars },
    TabB: { screen: Avatars },
    TabC: { screen: Avatars },
}, {
        order: ['TabA', 'TabB', 'TabC']
    })

const Drawer = createDrawerNavigator({
    Avatars: { screen: Avatars },
    Badge: { screen: Badges },
    Buttons: { screen: Buttons },
    Cards: { screen: Cards },
    CheckBox: { screen: CheckBoxes },
})


const AppNavigator = createStackNavigator({
    Drawer: {
        screen: Drawer
    },
    Avatars: {
        screen: Avatars
    },
}, {
        headerMode: 'none',
        initialRouteName: 'Drawer',
    });


export default createAppContainer(Drawer);