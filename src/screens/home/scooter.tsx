import { AntDesign, Entypo } from '@expo/vector-icons'
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { H4 } from '../../components/Typography'
import { COLORS, FONT, MARGIN, PADDING } from '../../utils/constants'
import { SERVICES, ServiceItem } from '../Service'

type Props = {}

const Scooter = (props: Props) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                flex: 1,
                backgroundColor: "#FAFDFF",
                marginBottom: 80,
                padding: PADDING.primary,
            }}
        >
            <View


                style={
                    {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 0,
                        height: 54,
                        position: "relative",
                    }
                }
            >
                <View>
                    <Text
                        style={{
                            ...FONT.extraBold,
                            fontSize: 28,
                            lineHeight: 35,
                            color: "#262D37",
                        }}
                    >
                        My 450X
                    </Text>
                </View>
                <View>
                    <Text
                        style={{
                            ...FONT.regular,
                            fontSize: 12,
                            lineHeight: 15,
                            color: "rgba(38, 45, 55, 0.6)",
                        }}
                    >Last synced 1 min ago</Text>
                </View>
                <TouchableOpacity
                    style={{
                        position: "absolute",
                        right: 0,
                        top: 0,

                    }}
                >

                    <AntDesign name="close" size={24} color="black" />

                </TouchableOpacity>
            </View>
            <View
                style={{
                    marginTop: MARGIN.primary
                }}
            >
                <View
                    style={{
                        display: "flex",
                        flexDirection: 'row',
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <View
                        style={
                            {
                                width: 25,
                                flexDirection: 'column',
                                justifyContent: "center",
                                alignItems: "center",
                            }
                        }
                    >
                        <AntDesign name="leftcircle" size={24} color="black" />
                    </View>
                    <View>

                        <Image
                            source={require('../../assets/images/scooter.png')}
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
                            flexDirection: 'column',
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <AntDesign name="rightcircle" size={24} color="black" />
                    </View>
                </View>
                <View
                    style={{
                        marginTop: MARGIN.medium,
                        display: "flex",
                        flexDirection: 'row',
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Entypo name="dot-single" size={24} color="black" /><Entypo name="dot-single" size={24} color={COLORS.gray} />
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
                {/* info */}
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
                    <H4>
                        Ather Gen 1.5_450
                    </H4>

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
                </View>
                <View
                >
                    {SERVICES.map((service) => (
                        <ServiceItem {...service} />
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}

export default Scooter

const styles = StyleSheet.create({})