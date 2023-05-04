import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../utils/constants';

const BatteryIcon = ({ percentage }: { percentage: number }) => {
    const filledPercentage = Math.min(Math.max(percentage, 0), 100);

    return (
        <View style={styles.container}>
            <View style={[styles.battery, { borderColor: '#ccc' }]}>
                <View
                    style={[
                        styles.batteryLevel,
                        { backgroundColor: filledPercentage >= 15 ? COLORS.tabBar : '#f44336' },
                        { width: `${filledPercentage}%` },
                    ]}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    battery: {
        width: 20,
        height: 12,
        borderWidth: 1,
        borderRadius: 2,
        flexDirection: 'row',
    },
    batteryLevel: {
        height: '100%',
        borderRadius: 1,
    },
});

export default BatteryIcon;
