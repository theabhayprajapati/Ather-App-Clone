import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Dot from "../../components/Dot";
import { COLORS, FONT, PADDING, SECTION } from "../../utils/constants";
type Props = {};

const HomeScreen = (props: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* header */}
                <View
                    style={{
                        height: "100%",
                    }}
                >
                    <TouchableOpacity>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 10,
                            }}
                        >
                            <Text
                                style={{
                                    ...FONT.extraBold,
                                    fontSize: 28,
                                    color: "#262D37",
                                    lineHeight: 35,
                                    fontWeight: "bold",
                                    fontStyle: "normal",
                                }}
                            >
                                My 450X
                            </Text>

                            <Ionicons
                                name="chevron-down-outline"
                                size={24}
                                color={COLORS.secondary}
                            />
                        </View>
                    </TouchableOpacity>
                    <Text
                        style={{
                            ...FONT.regular,
                            fontSize: 12,
                            lineHeight: 15,
                            color: "#262D3799",
                        }}
                    >
                        Last synced 1 min ago
                    </Text>
                </View>
                <TouchableOpacity>
                    <View style={{ position: "relative" }}>
                        <Ionicons
                            name="notifications-outline"
                            size={24}
                            color={COLORS.secondary}
                        />
                        <Dot />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.Status}>
                {/* status */}
                <View>

                </View>

            </View>
            <View style={styles.useMaps}>
                <View>
                    <Text>Use Maps</Text>
                </View>
                {/* horizontalscroll */}

                {/* maps */}
            </View>
            <View style={styles.recentRides}>
                {/* recent ride */}
            </View>
            <View style={styles.features}>
                {/* features  */}
            </View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: PADDING.primary,
    },
    Status: {
        ...SECTION,
        position: 'relative',
        borderWidth: 1,
        height: (200),
        backgroundColor: 'green',
        borderRadius: 10,
    },
    useMaps: {
        ...SECTION,

        height: 151,
        backgroundColor: 'gray'
    },
    recentRides: {
        ...SECTION,
        height: 151,
        backgroundColor: 'blue'
    },
    features: {
        ...SECTION,
        height: 151,
        backgroundColor: 'yellow'
    },

    header: {
        flexDirection: "row",
        height: 54,
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerFirst: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
