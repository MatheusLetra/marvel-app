import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { characterController } from './src/controllers/characterController'

export default function App() {

  const [data,setData] = useState([])

  useEffect(() => {
    console.log('CHEGUEI useEFFECT')
    let controller = new characterController();
    let newData = controller.getAllCharacters()
    setData(newData)
  }, [])
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}
        onPress={()=> {
          console.log(JSON.parse(data))
        }}>
          <Text >GET</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    width: 250,
    height: 250,
    alignItems: 'center',
    backgroundColor: 'red'
  }
});
