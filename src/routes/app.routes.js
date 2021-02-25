import React from 'react';
import Main from '../pages/Main';
import { createStackNavigator } from '@react-navigation/stack';

const MainStack = createStackNavigator();

const MainRoutes = () => {
    return (
        <MainStack.Navigator screenOptions={{headerShown: false}}>
            <MainStack.Screen name="Main" component={Main} />
        </MainStack.Navigator>
    );
}

export default MainRoutes;