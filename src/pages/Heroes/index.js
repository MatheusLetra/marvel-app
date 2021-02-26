import React, { useState, useEffect } from 'react';
import { ImageBackground, FlatList, View, ActivityIndicator, TextInput } from 'react-native';
import filter from 'lodash.filter';
import { styles } from './styles';

import { characterController } from '../../controllers/characterController';
import { HeroDetails } from '../../components/HeroDetails'

const image = require('../../images/heroesBackground.jpg');

export default function Heroes() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([])
  const [fullData, setFullData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const controller = new characterController();
        await controller.getAllCharacters()
        setData(JSON.parse(controller.response))
        setFullData(JSON.parse(controller.response))
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err);
      }
    }
    console.log('passei use effect ')
    getData()
  }, [])

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#5500dc" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.error}>
        <Text style={{ fontSize: 18 }}>
          Error fetching data... Check your network connection!
        </Text>
      </View>
    );
  }

  function renderHeader() {
    return (
      <View style={styles.containerSearchHeader}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => handleSearch(queryText)}
          placeholder="Search"
          style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
        />
      </View>
    );
  }

  const handleSearch = text => {
    if (text) {
      const formattedQuery = text.toLowerCase();
      const filteredData = filter(fullData.results, item => {
        if( contains(item, formattedQuery))
          return item
      });
      console.log(filteredData)
      setData(filteredData);
    } else {
      setData(fullData)
    }
    setQuery(text);
  };

  const contains = ({ name }, query) => {
    if (name.toLowerCase().includes(query)) {
      console.log(query + ' - ' + name)
      return true;
    }

    return false;
  };



  const renderItem = ({ item }) => (
    <HeroDetails {...item} />
  );

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <FlatList
          ListHeaderComponent={renderHeader}
          style={styles.list}
          data={data.results}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </ImageBackground>
    </View>
  );
}