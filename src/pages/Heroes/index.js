import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { styles } from './styles'

const image = require('src\images\heroesBackground.jpg');

export default function Heroes() {
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri:image}} style={styles.image}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
    </View>
  );
}