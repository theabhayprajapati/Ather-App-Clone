import { Entypo, EvilIcons, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ProfileScreenStackParams } from "..";
import { COLORS, FONT, PADDING } from "../../utils/constants";
import { hexWithOpacity } from "../../utils/helpers";

type Props = {
    navigation: any;
};

const Profile = (props: Props) => {
    const { navigation } = props;

    const moveTo = (screen: string) => {
        navigation.navigate(screen);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text
                    style={{
                        fontSize: 24,
                        color: hexWithOpacity('#262D37', 80),
                        fontWeight: 'bold',
                        ...FONT.regular,
                    }}
                >
                    ANOOP
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        gap: 10,
                    }}>
                    <Text
                        style={{
                            color: hexWithOpacity('#262D37', 80),
                            height: 14,
                            fontStyle: 'normal',
                            fontWeight: '600',
                            ...FONT.regular,
                        }}>

                        +91 9876543210
                    </Text>
                    <Text>
                        abhayprajapati@unknown.planet
                    </Text>

                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, borderWidth: 1, padding: PADDING.primary, paddingBottom: 80 }}>
                <View style={styles.vehicleContainer}></View>
                <View style={styles.info}></View>
                <View style={styles.vehicleControls}></View>
                <View style={styles.controlls}>
                    {CONTROL_MENUS.map((item, index) => (
                        <QuickLinks key={index} name={item.title} icon={item.icon(24, '#262D37')} />
                    ))}
                </View>
                <TouchableOpacity onPress={() => { console.log("Pressed") }} style={styles.button}>
                    <Text style={styles.text}>Logout</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 80,
        backgroundColor: '#EFF4F9',
        padding: PADDING.primary,
        borderBottomWidth: 1,
    },

    bottomContainer: {
        flex: 1,
        padding: PADDING.primary,
        marginBottom: 80
    },
    vehicleContainer: {
        height: 191,
        marginTop: 20,
        backgroundColor: COLORS.tabBar,
    },
    info: {
        marginTop: 20,
        height: 80,
        backgroundColor: COLORS.tabBar,
    },
    vehicleControls: {
        marginTop: 20,
        backgroundColor: COLORS.tabBar,
        height: 80,
    },
    controlls: {
        marginTop: 20,
    },
    button: {
        marginTop: 20,
        height: 48,
        backgroundColor: COLORS.tabBar,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});


const CONTROL_MENUS = [
    {
        title: 'Create Guest Profile',
        icon: (size: number, color: string) => <EvilIcons name="user" size={size} color={color} />,
        moveTo: 'CreateGuestProfile'
    },
    {
        title: 'Set Charging limit',
        icon: (size: number, color: string) => <MaterialCommunityIcons name="battery-charging-80" size={size} color={color} />,
        moveTo: 'SetChargingLimit'
    },
    {
        title: 'Settings',
        icon: (size: number, color: string) => <Ionicons name="settings-outline" size={size} color={color} />,
        moveTo: 'Settings'
    },
]


type QuickLinkProps = {
    icon?: React.ReactNode;
    name: string;
    moveTo?: string;
}

export const QuickLinks = ({ name, icon, moveTo }: QuickLinkProps) => {
    const navigation = useNavigation<NavigationProp<ProfileScreenStackParams>>();
    return (
        <TouchableOpacity style={QuickLinkstyle.container}
            onPress={
                () => navigation.navigate("Settings")
            }>
            <View style={QuickLinkstyle.icon}>
                {icon}
            </View>
            <Text style={QuickLinkstyle.name}>
                {name}
            </Text>
            {/* right arrow */}

            <Entypo name="chevron-right" size={24} color="black" />

        </TouchableOpacity>)
}


const QuickLinkstyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 56,
        paddingVertical: PADDING.primary,
        borderBottomWidth: 1,
        borderColor: '#262D3766'
    },
    icon: {
        width: 30,
        height: 24,
    },
    name: {
        ...FONT.regular,
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '600',
        color: '#262D37',

    }
})