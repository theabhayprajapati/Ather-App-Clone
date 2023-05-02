import React from 'react'
import { StyleSheet, View } from 'react-native'

type Props = {}

const Dot = (props: Props) => {
    return (
        <View style={{
            position: 'absolute',
            top: 0,
            right: 0,
            backgroundColor: 'red',
            width: 8,
            height: 8,
            borderRadius: 4
        }} />
    )
}

export default Dot

const styles = StyleSheet.create({})