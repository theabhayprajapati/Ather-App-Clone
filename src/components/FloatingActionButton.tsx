import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

type FloatingActionButtonProps = {
    onPress: () => void;
    icon: MaterialIconName;
    iconColor?: string;
    backgroundColor: string;
};
type MaterialIconName = keyof typeof MaterialIcons.glyphMap;

type FloatingActionButtonContainerProps = {
    children: React.ReactNode;
};

const FloatingActionButton = ({ onPress, icon, backgroundColor ,iconColor}: FloatingActionButtonProps) => {
    const isIconValid = MaterialIcons;
    const iconName = isIconValid ? icon : 'add';

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <MaterialIcons name={iconName} size={28} color={iconColor || 'white'} />
            </TouchableOpacity>
        </View>
    );
};

const FloatingActionButtonContainer = ({ children }: FloatingActionButtonContainerProps) => {
    return <View style={styles.fabContainer}>{children}</View>;
};

const styles = StyleSheet.create({
    fabContainer: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        marginBottom: 100,
    },
    container: {
        width: 56,
        height: 56,
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export { FloatingActionButton, FloatingActionButtonContainer };