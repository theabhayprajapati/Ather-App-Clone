import { AntDesign, Entypo } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { ServiceScreenStackParams } from "..";
import { H4 } from "../../components/Typography";
import { COLORS, FONT, MARGIN, PADDING } from "../../utils/constants";

type Props = {};

const Booking = (props: Props) => {
    const navigation = useNavigation<NavigationProp<ServiceScreenStackParams, "Booking">>();
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                flex: 1,
                backgroundColor: "#FAFDFF",
                padding: PADDING.primary,
                paddingBottom: 100,
            }}
        >
            <View
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    paddingVertical: PADDING.primary,
                    paddingHorizontal: PADDING.medium,
                    gap: 12,
                    height: 80,
                    borderBottomWidth: 1,
                    borderBottomColor: "rgba(44, 51, 61, 0.2)",
                }}
            >
                <H4>Ather Gen 1.5_450</H4>

                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        padding: 0,
                        gap: PADDING.small,
                    }}
                >
                    <Text
                        style={{
                            ...FONT.bold,
                            fontSize: 12,
                            lineHeight: 15,
                            textTransform: "uppercase",
                            color: "rgba(38, 45, 55, 0.8)",
                        }}
                    >
                        KA02kfg4269
                    </Text>
                    <Text
                        style={{
                            ...FONT.bold,
                            fontSize: 12,
                            lineHeight: 15,
                            textTransform: "uppercase",
                            color: "rgba(38, 45, 55, 0.8)",
                        }}
                    >
                        Odo - 21000.8 km
                    </Text>
                </View>
                <TouchableOpacity
                    style={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name="close" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View
                style={{
                    marginTop: MARGIN.primary,
                }}
            >
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <View
                        style={{
                            width: 25,
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <AntDesign name="leftcircle" size={24} color="black" />
                    </View>
                    <View>
                        <Image
                            source={require("../../assets/images/scooter.png")}
                            style={{
                                width: 200,
                                height: 200,
                                resizeMode: "contain",
                            }}
                        />
                    </View>
                    <View
                        style={{
                            width: 25,
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <AntDesign name="rightcircle" size={24} color="black" />
                    </View>
                </View>
                <View>
                    <Text>last seen on</Text>
                    <Text>22/03/22 @ 19000.4 km</Text>
                </View>
                <View
                    style={{
                        marginTop: MARGIN.medium,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Entypo name="dot-single" size={24} color="black" />
                    <Entypo name="dot-single" size={24} color={COLORS.gray} />
                </View>
            </View>
            <View
                style={{
                    marginTop: MARGIN.primary,
                    backgroundColor: "rgba(30, 75, 138, 0.05)",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }}
            >
                <View>
                    <H4>Select Service</H4>
                    <View
                        style={{
                            flexDirection: 'row',

                            marginTop: MARGIN.medium,
                        }}
                    >
                        <TouchableOpacity>
                            <Chip text="23 Feb, 2023" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={{
                        marginTop: MARGIN.primary,
                    }}
                >
                    <H4>Select Time</H4>
                    <FlatList
                        data={CHIPS}
                        renderItem={({ item }) => <Chip text={item} />}
                        keyExtractor={(item) => item}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{
                            marginTop: MARGIN.small,
                            flexDirection: 'row',
                            gap: 10,
                        }}
                    />

                </View>
                <View>details</View>
            </View>
            <TouchableOpacity onPress={() => { console.log("Pressed") }} style={styles.button}>
                <Text style={styles.text}>Confirm booking</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default Booking;

const styles = StyleSheet.create({
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


const CHIPS = [
    '8:00 AM ', '9:00 AM',
    '9:00 AM ', '10:00 AM',
    '10:00 AM', '11:00 AM',

]

type ChipProps = {
    text: string;
};
const Chip = (props: ChipProps) => {
    return (
        <View
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: PADDING.small,
                backgroundColor: "rgba(30, 75, 138, 0.4)",
                borderRadius: 5,
                marginRight: MARGIN.small,
            }}
        >
            <Text
                style={{
                    ...FONT.bold,
                    fontSize: 14,
                    lineHeight: 15,
                    color: "#FAFDFF",
                    alignItems: "center",
                }}
            >
                {props.text}
            </Text>
        </View>
    );
};
