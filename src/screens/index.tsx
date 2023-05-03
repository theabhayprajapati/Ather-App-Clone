import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../utils/constants";
import Maps from "./Maps/index";
import Profile from "./Profile/index";
import Settings from "./Profile/settings";
import Service from "./Service/index";
import HomeScreen from "./home/index";


type INITAIL_ROUTES_t = {
    MainStack: keyof MainStackParams;
    AuthStack: keyof AuthStackParams;
    BottomTab: keyof BottomTabParams;
    ProfileScreenStack: keyof ProfileScreenStackParams;
};

const INTITAIL_ROUTES: INITAIL_ROUTES_t = {
    MainStack: "BottomTab",
    AuthStack: "Login",
    BottomTab: "Home",
    ProfileScreenStack: "Profile",
};

export type MainStackParams = {
    BottomTab: undefined;
    AuthStack: undefined;
};

export type AuthStackParams = {
    Login: undefined;
    Register: undefined;
};
export type BottomTabParams = {
    Home: undefined;
    Maps: undefined;
    Service: undefined;
    Profile: undefined;
};

export type ProfileScreenStackParams = {
    Profile: undefined;
    Settings: undefined;
};

const ProfileScreenStack =
    createNativeStackNavigator<ProfileScreenStackParams>();

const ProfileScreenStackScreen = () => {
    return (
        <ProfileScreenStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={INTITAIL_ROUTES.ProfileScreenStack}
        >
            <ProfileScreenStack.Screen name="Profile" component={Profile} />
            <ProfileScreenStack.Screen name="Settings" component={Settings} />
        </ProfileScreenStack.Navigator>
    );
};

const MainStack = createNativeStackNavigator<MainStackParams>();
const AuthStack = createNativeStackNavigator<AuthStackParams>();
const BottomTab = createBottomTabNavigator<BottomTabParams>();

export const MainStackScreen = () => {
    return (
        <MainStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={INTITAIL_ROUTES.MainStack}
        >
            <MainStack.Screen name="BottomTab" component={BottomTabScreen} />
        </MainStack.Navigator>
    );
};

export const BottomTabScreen = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBar={(props) => <BottomNavigation {...props} />}
            initialRouteName={INTITAIL_ROUTES.BottomTab}
        >
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Maps"
                component={Maps}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="location-arrow" size={size} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Service"
                component={Service}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="tool" size={size} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={ProfileScreenStackScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" size={size} color={color} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
};

export const AuthStackScreen = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={INTITAIL_ROUTES.AuthStack}
        >
            <AuthStack.Screen name="Login" component={HomeScreen} />
            <AuthStack.Screen name="Register" component={HomeScreen} />
        </AuthStack.Navigator>
    );
};

interface BottomNavigationProps {
    state: any;
    descriptors: any;
    navigation: any;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
    state,
    descriptors,
    navigation,
}) => {
    return (
        <View style={styles.container}>
            {state.routes.map((route: any, index: any) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const icon = options.tabBarIcon;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={index}
                        style={[styles.tab, isFocused && styles.activeTab]}
                        onPress={onPress}
                    >
                        {icon &&
                            icon({
                                color: isFocused ? COLORS.tabBarActive : COLORS.tabBarInactive,
                                size: 24,
                            })}
                        <View style={styles.tabTextContainer}>
                            <Text style={[styles.tabText, isFocused && styles.activeTabText]}>
                                {label}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 74,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: COLORS.tabBar,
    },
    tab: {
        flex: 1,
        alignItems: "center",
    },
    activeTab: {},
    tabIcon: {
        marginBottom: 2,
        height: 24,
        width: 24,
    },
    tabTextContainer: {
        alignItems: "center",
    },
    tabText: {
        fontSize: 12,
        color: COLORS.tabBarInactive,
    },
    activeTabText: {
        color: COLORS.tabBarActive,
    },
});

export default BottomNavigation;
