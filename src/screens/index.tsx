import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Maps from "./Maps/index";
import Profile from "./Profile/index";
import Service from "./Service/index";
import HomeScreen from "./home/index";
type MainStackParams = {
    BottomTab: undefined;
    AuthStack: undefined;
}

type AuthStackParams = {
    Login: undefined;
    Register: undefined;
}
type BottomTabParams = {
    Home: undefined;
    Maps: undefined;
    Service: undefined;
    Profile: undefined;
}


const MainStack = createNativeStackNavigator<MainStackParams>();
const AuthStack = createNativeStackNavigator<AuthStackParams>();
const BottomTab = createNativeStackNavigator<BottomTabParams>();


export const MainStackScreen = () => {
    return (
        <MainStack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="BottomTab"
        >
            <MainStack.Screen name="BottomTab" component={BottomTabScreen} />
            <MainStack.Screen name="AuthStack" component={AuthStackScreen} />
        </MainStack.Navigator>
    )
}

export const BottomTabScreen = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='Home'
        >
            <BottomTab.Screen name="Home" component={HomeScreen} />
            <BottomTab.Screen name="Maps" component={Maps} />
            <BottomTab.Screen name="Service" component={Service} />
            <BottomTab.Screen name="Profile" component={Profile} />
        </BottomTab.Navigator>
    )
}

export const AuthStackScreen = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Login"
        >
            <AuthStack.Screen name="Login" component={HomeScreen} />
            <AuthStack.Screen name="Register" component={HomeScreen} />
        </AuthStack.Navigator>
    )
}