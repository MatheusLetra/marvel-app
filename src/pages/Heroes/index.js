import React from 'react';
import { ImageBackground, FlatList, View, Text } from 'react-native';
import { styles } from './styles';

import { characterController } from '../../controllers/characterController';
import { HeroDetails } from '../../components/HeroDetails'

const image = require('../../images/heroesBackground.jpg');

export default function Heroes() {

  const [data, setData] = React.useState([])

  React.useEffect(() => {
    async function getData() {
      const controller = new characterController();
      await controller.getAllCharacters()
      setData(JSON.parse(controller.response))
    }
    getData()
  }, [])

  const renderItem = ({ item }) => (
    <HeroDetails {...item} />
  );

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <FlatList
          style={styles.list}
          data={data.results}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ImageBackground>
    </View>
  );
}