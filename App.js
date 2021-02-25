import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { characterController } from './src/controllers/characterController'

import Heroes from './src/pages/Heroes'

export default function App() {

  const [data, setData] = useState([])

  // useEffect(() => {
  //   async function getData() {
  //     console.log('CHEGUEI useEFFECT')
  //     const controller = new characterController();
  //     await controller.getAllCharacters()
  //     console.log('******** RESPONSE CONTROLLER *******')
  //     console.log(controller.response);
  //     setData(controller.response)
  //   }
  //   getData()
  // }, [])

  return (
    // <View style={styles.container}>
    //   <TouchableOpacity style={styles.button}
    //     onPress={() => {
    //       console.log(JSON.parse(data))
    //     }}>
    //     <Text >GET</Text>
    //   </TouchableOpacity>
    //   <StatusBar style="auto" />
    // </View>
    <Heroes />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 250,
    height: 250,
    alignItems: 'center',
    backgroundColor: 'red'
  }
});
