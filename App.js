import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Routes from './src/routes/routes';



export default function App() {

  return (
    <>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#9933ff"/>
    </>
  );
}

