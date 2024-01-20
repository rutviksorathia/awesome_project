import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function FlatCards() {
    return (
        <View>
            <Text style={styles.headingText}>FlatCards</Text>

            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Green</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Green</Text>
                </View>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 8,


    },
    container: {
        flex: 1,
        flexDirection: 'row',

    },
    card: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        borderRadius: 4,
        margin: 8,
    }
    ,
    cardOne: {
        backgroundColor: 'red',
    },
    cardTwo: {
        backgroundColor: 'green',
    },
    cardThree: {
        backgroundColor: 'blue',
    },
})