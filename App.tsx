import React from "react";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView
} from "react-native";



function App() {

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.container}>
          Hello
        </Text>
      </View>
    </SafeAreaView>
  )




}

const styles = StyleSheet.create({

  container: {


    alignItems: "center",
  }

});





export default App;