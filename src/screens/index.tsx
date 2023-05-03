import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../utils/constants';
import Maps from "./Maps/index";
import Profile from "./Profile/index";
import Service from "./Service/index";
import HomeScreen from "./home/index";

const INITAIL_BOTTOM_ROUTE_NAME: keyof BottomTabParams = 'Profile';

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
const BottomTab = createBottomTabNavigator<BottomTabParams>();


export const MainStackScreen = () => {
    return (
        <MainStack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="BottomTab"
        >
            <MainStack.Screen name="BottomTab" component={BottomTabScreen} />
        </MainStack.Navigator>
    )
}

export const BottomTabScreen = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false
            }}


            tabBar={props => <BottomNavigation {...props} />}
            initialRouteName={INITAIL_BOTTOM_ROUTE_NAME}>
            <BottomTab.Screen name="Home" component={HomeScreen}
                options={
                    {
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home-outline" size={size} color={color} />
                        ),
                    }
                }
            />
            <BottomTab.Screen name="Maps" component={Maps}
                options={
                    {
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome5 name="location-arrow" size={size} color={color} />
                        ),
                    }
                }
            />
            <BottomTab.Screen name="Service" component={Service}
                options={
                    {
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="person-outline" size={size} color={color} />
                        ),
                    }
                }
            />
            <BottomTab.Screen name="Profile" component={Profile}
                options={
                    {
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home-outline" size={size} color={color} />
                        ),
                    }
                }
            />
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
                        {icon && icon({ color: isFocused ? COLORS.tabBarActive : COLORS.tabBarInactive, size: 24 })}
                        <View style={styles.tabTextContainer}>
                            <Text
                                style={[
                                    styles.tabText,
                                    isFocused && styles.activeTabText,
                                ]}
                            >
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
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 74,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: COLORS.tabBar,
    },
    tab: {
        flex: 1,
        alignItems: "center",
    },
    activeTab: {
    },
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