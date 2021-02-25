import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Heroes from '../Heroes'

const Drawer = createDrawerNavigator();

const Main = (props) => {   
    
    return (
        <Drawer.Navigator initialRouteName={"Heroes"} >
            <Drawer.Screen name="Heroes" component={Heroes} />
        </Drawer.Navigator>
    );
}

export default Main;