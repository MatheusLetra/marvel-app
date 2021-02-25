import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { styles } from './styles'

const image = require('../../images/heroesBackground.jpg');

export default function Heroes() {
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
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
      </ImageBackground>
    </View>
  );
}