import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer, createDrawerNavigator, createMaterialTopTabNavigator, } from "react-navigation";
import AvatarScreen from "../screens/AvatarScreen";
import BadgeScreen from "../screens/BadgeScreen";
import ButtonScreen from "../screens/ButtonScreen";
import CardScreen from "../screens/CardScreen";
import CheckBoxScreen from "../screens/CheckBoxScreen";
import DividerScreen from "../screens/DividerScreen"
import HeaderScreen from "../screens/HeaderScreen"
import IconsScreen from "../screens/IconsScreen"
import ImagesScreen from "../screens/ImagesScreen"
import InputScreen from "../screens/InputScreen"
import ListItemScreen from "../screens/ListItemScreen"
import OverlayScreen from "../screens/OverlayScreen"
import PricingScreen from "../screens/PricingScreen"
import RatingScreen from "../screens/RatingScreen"
import SearchBarScreen from "../screens/SearchBarScreen"
import SliderScreen from "../screens/SliderScreen"
import SocialIconScreen from "../screens/SocialIconScreen"
import TextScreen from "../screens/TextScreen"
import TileScreen from "../screens/TileScreen"
import TooltipScreen from "../screens/TooltipScreen"


const Tabs = createMaterialTopTabNavigator({
    TabA: { screen: AvatarScreen },
    TabB: { screen: AvatarScreen },
    TabC: { screen: AvatarScreen },
}, {
        order: ['TabA', 'TabB', 'TabC']
    })

const Drawer = createDrawerNavigator({
    Avatars: { screen: AvatarScreen },
    Badge: { screen: BadgeScreen },
    Buttons: { screen: ButtonScreen },
    Cards: { screen: CardScreen },
    CheckBox: { screen: CheckBoxScreen },
    Divider: { screen: DividerScreen },
    Header: { screen: HeaderScreen },
    Icons: { screen: IconsScreen },
    Images: { screen: ImagesScreen},
    Inputs: { screen: InputScreen },
    ListItem: { screen: ListItemScreen },
    Overlay: { screen: OverlayScreen },
    Pricing: { screen: PricingScreen },
    Rating: { screen: RatingScreen },
    SearchBar: { screen: SearchBarScreen },
    Slider: { screen: SliderScreen },
    SocialIcon: { screen: SocialIconScreen },
    Text: { screen: TextScreen },
    Tile: { screen: TileScreen },
    Tooltip: { screen: TooltipScreen },
})


const AppNavigator = createStackNavigator({
    Drawer: {
        screen: Drawer
    },
    Avatars: {
        screen: AvatarScreen
    },
}, {
        headerMode: 'none',
        initialRouteName: 'Drawer',
    });


export default createAppContainer(Drawer);