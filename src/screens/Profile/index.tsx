import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FONT, PADDING } from "../../utils/constants";
import { hexWithOpacity } from "../../utils/helpers";

type Props = {};

const Profile = (props: Props) => {
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
            <View style={styles.bottomContainer}>
                <View style={styles.vehicleContainer}></View>
                <View style={styles.info}></View>
                <View style={styles.vehicleControls}></View>
                <View style={styles.controlls}></View>
                <View style={styles.logout}></View>
            </View>
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
    },


    bottomContainer: {
        flex: 1,
        padding: PADDING.primary,
    },
    vehicleContainer: {
        height: 191,
        marginTop: 20,
    },
    info: {
        marginTop: 20,
        height: 80,
    },
    vehicleControls: {
        marginTop: 20,
        height: 80,
    },
    controlls: {},
    logout: {},
});
