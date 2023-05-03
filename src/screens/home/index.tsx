import {
    Entypo,
    Feather,
    FontAwesome5,
    Ionicons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";
import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import Dot from "../../components/Dot";
import { H4 } from "../../components/Typography";
import { COLORS, FONT, MARGIN, PADDING, SECTION } from "../../utils/constants";
import { hexWithOpacity } from "../../utils/helpers";
type Props = {};

const MAPS_ITEMS = [
    {
        title: "Find a Charger",
        icon: <FontAwesome5 name="charging-station" size={24} color="black" />,
    },
    {
        title: "Locate  Scooter",
        icon: <Feather name="map-pin" size={24} color="red" />,
    },
    {
        title: "Search a place",
        icon: <Feather name="search" size={24} color="black" />,
    },
    {
        title: "Find a Charger",
        icon: <MaterialCommunityIcons name="cable-data" size={24} color="black" />,
    },
];

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
                            marginTop: 4,
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
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, paddingBottom: 80 }}
            >
                <View style={styles.Status}>
                    <View
                        style={{
                            position: "relative",
                            height: 151,
                            borderRadius: 10,
                            flexDirection: "row",
                            width: "100%",
                        }}
                    >
                        <BatteryStatus percentage={50} />
                        <View
                            style={{
                                padding: PADDING.medium,
                                flexDirection: "column",
                                justifyContent: "space-between",
                                height: 151,
                                width: "50%",
                            }}
                        >
                            <Text
                                style={{
                                    ...FONT.medium,
                                    fontSize: 28,
                                    color: "#2C333D",
                                }}
                            >
                                31 km
                            </Text>
                            <View style={{ flexDirection: "row", width: "100%" }}>
                                <View
                                    style={{
                                        width: "50%",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: "#262D37",
                                            ...FONT.regular,
                                            fontSize: 12,
                                            lineHeight: 15,
                                        }}
                                    >
                                        20 KM
                                    </Text>{" "}
                                    <Text
                                        style={{
                                            color: "#262D37",
                                            ...FONT.regular,
                                            fontSize: 12,
                                            lineHeight: 15,
                                        }}
                                    >
                                        30 min
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width: "50%",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: "#262D37",
                                            ...FONT.regular,
                                            fontSize: 12,
                                            lineHeight: 15,
                                        }}
                                    >
                                        2 hr 09 min
                                    </Text>{" "}
                                    <Text
                                        style={{
                                            color: "#262D37",
                                            ...FONT.regular,
                                            fontSize: 12,
                                            lineHeight: 15,
                                        }}
                                    >
                                        80%
                                    </Text>
                                </View>
                            </View>
                            <Text
                                style={{
                                    color: "#262D37",
                                    ...FONT.bold,
                                    fontSize: 14,
                                    lineHeight: 17,
                                }}
                            >
                                Charging Now
                            </Text>
                        </View>

                        <TouchableOpacity
                            style={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                flexDirection: "row",
                                backgroundColor: hexWithOpacity(COLORS.secondary, 0.1),
                                borderRadius: 10,
                                padding: PADDING.primary,
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 10,
                            }}
                        >
                            <Entypo name="battery" size={24} color={COLORS.secondary} />
                            <Text>69%</Text>
                        </TouchableOpacity>
                        {/* image ./assets/image/asdf.png */}
                        <Image
                            source={require("../../assets/images/scooter.png")}
                            style={{
                                backgroundColor: "red",
                                borderColor: 'red',
                                borderWidth: 1,
                                position: "absolute",
                            }}
                        />

                    </View>
                </View>
                <View style={styles.useMaps}>
                    <H4>Use Maps to</H4>
                    {/* horizontalscroll */}
                    <View>
                        {/* vertical flatlist */}
                        <FlatList
                            data={MAPS_ITEMS}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.mapsItem}>
                                    {item.icon}
                                    <Text
                                        style={{
                                            ...FONT.medium,
                                            fontSize: 12,
                                            lineHeight: 15,
                                            color: "#262D3799",
                                            marginTop: 4,
                                        }}

                                    >{item.title}</Text>
                                </TouchableOpacity>
                            )}
                            style={{ marginTop: MARGIN.primary }}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    {/* maps */}
                </View>
                <View style={styles.recentRides}>
                    <H4>Your Recent Rides</H4>
                    <View>
                        {/* horixonal flat list */}
                        <FlatList
                            data={RIDES}
                            renderItem={({ item }) => <RidesDetail {...item} />}
                            style={{ marginTop: MARGIN.primary }}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
                <View style={styles.features}>
                    <H4>Features</H4>
                    <View>
                        <FlatList
                            data={FEATURES}
                            renderItem={({ item }) => <Feature {...item} />}
                            style={{ paddingVertical: 10 }}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </View>
            </ScrollView>
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
        position: "relative",
        height: 151,
        backgroundColor: "#80FF8A40",
        borderRadius: 10,
        marginBottom: 50,
    },
    useMaps: {
        ...SECTION,
    },
    recentRides: {
        ...SECTION,
        height: 151,
    },
    features: {
        ...SECTION,
    },

    header: {
        flexDirection: "row",
        height: 54,
        justifyContent: "space-between",
        alignItems: "center",
    },
    mapsItem: {
        width: 120,
        height: 74,
        borderRadius: 10,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        elevation: 5,
        shadowColor: "rgba(91, 112, 140, 0.2)",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 15,
        marginRight: PADDING.small,
    },
});

type BatteryStatusProps = {
    percentage: number;
};

const BatteryStatus = ({ percentage }: BatteryStatusProps) => {
    return (
        <View
            style={{
                position: "absolute",
                height: 151,
                width: `${percentage}%`,
                backgroundColor: "#80FF8A",
                borderRadius: 10,
            }}
        />
    );
};

type RideDetailProps = {
    Efficiency: {
        value: number;
        name: "Efficiency";
        metric: "Wh/km";
    };
    Duration: {
        value: number;
        name: "Duration";
        metric: "min";
    };
    TopSpeed: {
        value: number;
        name: "Top Speed";
        metric: "km/h";
    };
};

const RIDES: RideDetailProps[] = [
    {
        Efficiency: {
            value: 4.5,
            name: "Efficiency",
            metric: "Wh/km",
        },
        Duration: {
            value: 50,
            name: "Duration",
            metric: "min",
        },
        TopSpeed: {
            value: 80,
            name: "Top Speed",
            metric: "km/h",
        },
    },
    {
        Efficiency: {
            value: 4.5,
            name: "Efficiency",
            metric: "Wh/km",
        },
        Duration: {
            value: 50,
            name: "Duration",
            metric: "min",
        },
        TopSpeed: {
            value: 80,
            name: "Top Speed",
            metric: "km/h",
        },
    },
    {
        Efficiency: {
            value: 4.5,
            name: "Efficiency",
            metric: "Wh/km",
        },
        Duration: {
            value: 50,
            name: "Duration",
            metric: "min",
        },
        TopSpeed: {
            value: 80,
            name: "Top Speed",
            metric: "km/h",
        },
    },
];

const RidesDetail = (props: RideDetailProps) => {
    return (
        <View style={RidesDetailStyles.container}>
            <View style={RidesDetailStyles.time}>
                <Text style={RidesDetailStyles.timeText}>50 min ago</Text>
            </View>
            <View style={RidesDetailStyles.item}>
                <Text style={RidesDetailStyles.info}>Efficiency</Text>
                <Text style={RidesDetailStyles.text}>4.5</Text>
                <Text style={RidesDetailStyles.info}>Wh/km</Text>
            </View>
            <View style={RidesDetailStyles.item}>
                <Text style={RidesDetailStyles.info}>Efficiency</Text>
                <Text style={RidesDetailStyles.text}>4.5</Text>
                <Text style={RidesDetailStyles.info}>Wh/km</Text>
            </View>
            <View style={RidesDetailStyles.item}>
                <Text style={RidesDetailStyles.info}>Efficiency</Text>
                <Text style={RidesDetailStyles.text}>4.5</Text>
                <Text style={RidesDetailStyles.info}>Wh/km</Text>
            </View>
        </View>
    );
};
const RidesDetailStyles = StyleSheet.create({
    container: {
        position: "relative",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: PADDING.primary,
        borderRadius: 10,
        height: 100,
        // 0px 5px 15px rgba(91, 112, 140, 0.2)
        backgroundColor: "#FFFFFF",

        elevation: 5,
        shadowColor: "rgba(91, 112, 140, 0.2)",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 15,
        width: 300,
        marginRight: PADDING.small,
    },
    time: {
        position: "absolute",
        top: 0,
        right: 0,
        backgroundColor: hexWithOpacity("#1E4B8A", 20),
        paddingLeft: PADDING.small,
        padding: 2,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    timeText: {
        ...FONT.semiBold,
        fontSize: 10,
        lineHeight: 15,
        color: "#2C333D",
    },
    item: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    info: {
        fontSize: 12,
        lineHeight: 18,
        color: "#262D37CC",
        ...FONT.medium,
    },
    text: {
        fontSize: 16,
        lineHeight: 20,
        color: "#262D37",
        ...FONT.bold,
    },
});

type FeatureProps = {
    title: string;
    desc: string;
    onPress: () => void;
    buttonText: string;
    icon: React.ReactNode;
    backgroundColor?: string;
};

const FEATURES: FeatureProps[] = [
    {
        title: "Ather Labs",
        desc: "Try the Latest New Features",
        onPress: () => { },
        buttonText: "Explore Now",
        icon: <Feather name="arrow-up-right" size={15} color="black" />,
        backgroundColor: "lightblue",
    },
    {
        icon: <FontAwesome5 name="angle-right" size={15} color="black" />,
        title: "Savings Tracker",
        desc: "Track your savings and reduced carbon emissions",
        onPress: () => { },
        buttonText: "View now",
        backgroundColor: "lightgreen",
    },
];

const Feature = ({
    title,
    desc,
    onPress,
    buttonText,
    icon,
    backgroundColor,
}: FeatureProps) => {
    return (
        <View style={[featuresStyles.container, { backgroundColor }]}>
            <View>
                <Text style={featuresStyles.buttonText}>{title}</Text>
                <Text>{desc}</Text>
            </View>
            <TouchableOpacity style={featuresStyles.button}>
                <Text style={featuresStyles.buttonText}>{buttonText}</Text>
                <View>{icon}</View>
            </TouchableOpacity>
        </View>
    );
};

const featuresStyles = StyleSheet.create({
    container: {
        height: 112,
        padding: PADDING.primary,
        justifyContent: "space-between",
        marginTop: MARGIN.primary,
        borderRadius: 10,
        shadowColor: "rgba(91, 112, 140, 0.2)",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 15,
        marginRight: PADDING.small,
    },
    desc: {
        ...FONT.medium,
        fontSize: 14,
        lineHeight: 18,
        color: "rgba(38, 45, 55, 0.8)",
    },
    button: {
        marginTop: PADDING.small,
        flexDirection: "row",
        alignItems: "center",
        gap: PADDING.small,
    },
    buttonText: {
        ...FONT.bold,
        fontSize: 14,
        lineHeight: 18,
        color: "#262D37",
    },
});
