import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const list = [
        {
            id: '1',
            name: 'Rutvik',
            phone: '1234567890',
            email: 'rutvik@gmail.com,'
        },
        {
            id: '2',
            name: 'Raj',
            phone: '7874408892',
            email: 'raj@gmail.com',
        },
        {
            id: '3',
            name: 'Sagar',
            phone: '7744229933',
            email: 'sagar@gmail.com',
        },
    ]
  return (
    <View>
          <Text>Contact List</Text>
          {list.map((item) => (
                <View key = {item.id} style={styles.container}>
                    <Text>{item.name}</Text>
                    <Text>{item.phone}</Text>
                    <Text>{item.email}</Text>
                </View>
          ))}
          <View>
              
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
    }
})