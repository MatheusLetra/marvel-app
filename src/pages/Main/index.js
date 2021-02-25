import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../../components/DrawerContent';


const Drawer = createDrawerNavigator();

const Main = (props) => {   
    
    return (
        <Drawer.Navigator initialRouteName={"Heroes"} drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Heroes" component={Heroes} />
        </Drawer.Navigator>
    );
}

export default Main;