import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>Elevated Cards</Text>
            
            <ScrollView horizontal ={true} style = {styles.container}>
                <View style = {[styles.card,styles.cardOne]}>
                    <Text>Hello</Text>
                </View>
                <View style = {[styles.card,styles.cardOne]}>
                    <Text>Sorathia</Text>
                </View>
                <View style = {[styles.card,styles.cardOne]}>
                    <Text>Rutvik</Text>
                </View>
                <View style = {[styles.card,styles.cardOne]}>
                    <Text>Prabhulal</Text>
                </View>
            </ScrollView>
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
        
    },
    card: {
        height: 100,
        width: 100,
        margin: 8,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardOne: {
        backgroundColor: 'black',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height:1,
        },
        shadowColor: 'red',
        
        
    },
})