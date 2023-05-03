import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { FONT } from '../utils/constants'

type Props = {
    children: string
}

export const H4 = (props: Props) => {
    return (
        <Text
            style={styles.h4}
        >
            {props.children}
        </Text>
    )
}



const styles = StyleSheet.create({
    h4: {
        ...FONT.bold,
        lineHeight: 25,
        fontSize: 20,
    }
})