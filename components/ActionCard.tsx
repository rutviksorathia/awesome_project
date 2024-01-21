import { StyleSheet, Text, View , TouchableOpacity, Linking} from 'react-native'
import React from 'react'

export default function ActionCard() {
    function onTap(url: string) {
        Linking.openURL(url);
    }
    
  return (
    <View>
          <Text style={styles.headingText}>ActionCard</Text>
          <View style={styles.container}>
              <TouchableOpacity onPress={() => onTap('https://reactnative.dev/')}>
                  <Text> Click here..</Text>
                  </TouchableOpacity>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 12,
    },
    container: {
        backgroundColor: '#FEEECD',
        alignItems: 'center',
        
    },

})