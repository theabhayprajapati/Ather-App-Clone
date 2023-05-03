import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS, FONT, MARGIN } from '../utils/constants';
import { hexWithOpacity } from '../utils/helpers';

type ICONSProps = {
    name: string;
    iconName: IoniconsName;
}

const ICONS: ICONSProps[] = [
    {
        name: 'Explore',
        iconName: 'search-outline',
    },
    {
        name: 'Saved',
        iconName: 'bookmark-outline',
    },
    {
        name: 'Contribute',
        iconName: 'add-outline',
    },
    {
        name: 'Updates',
        iconName: 'time-outline',
    },
    // chargers, service, accessories, more
    {
        name: 'Chargers',
        iconName: 'battery-charging-outline',
    },
    {
        name: 'Service',
        iconName: 'construct-outline',
    },
    {
        name: 'More',
        iconName: 'ellipsis-horizontal-outline',
    },

];

type IconsListItemProps = {
    name: string;
    iconName: string;
};

type IoniconsName = React.ComponentProps<typeof Ionicons>['name'];

const IconListItem = ({ name, iconName }: IconsListItemProps) => {
    return (
        <TouchableOpacity style={styles.iconItem}>
            {/* @ts-ignore */}
            <Ionicons name={iconName} size={18} color={'gray'} />
            <Text style={styles.iconName}>{name}</Text>
        </TouchableOpacity>
    );
};

const IconList = () => {
    return (
        <FlatList
            data={ICONS}
            renderItem={({ item }) => <IconListItem name={item.name} iconName={item.iconName} />}
            keyExtractor={(item) => item.name}
            horizontal
            style={{
                marginTop: MARGIN.primary,
            }}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.iconList}
        />
    );
};

const styles = StyleSheet.create({
    iconList: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        paddingVertical: 8,
        gap: 10
    },
    iconItem: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        justifyContent: 'center',

    },
    iconName: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
        ...FONT.regular,
        marginLeft: 8,
    },
});

export default IconList;
