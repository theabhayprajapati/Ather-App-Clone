import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { FONT } from '../utils/constants';

const GoogleMapsSearch = () => {
    const [searchText, setSearchText] = useState('');

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Ionicons name="search-outline" size={24} color="gray" style={styles.searchIcon} />
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                placeholder="Search here"
                placeholderTextColor="gray"
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
            />
            <TouchableOpacity>
                <Ionicons name="mic-outline" size={24} color="gray" style={styles.micIcon} />
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        elevation: 4, // add shadow on Android
        shadowColor: '#000', // add shadow on iOS
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    searchIcon: {
        marginRight: 12,
    },
    input: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        // outline
        outlineWidth: 0,
        ...FONT.regular,
    },
    micIcon: {
        marginLeft: 12,
    },
});

export default GoogleMapsSearch;
