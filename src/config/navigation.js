import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, Button, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import Home from '../screens/home';
import Contact from '../screens/contact';
import PersonalParcel from '../screens/personalParcel';
import QuickQuote from '../screens/quickQuote';
import Commercial from '../screens/commercial';
import DrawerScreen from '../screens/drawerScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MainNav() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#ea6618" />
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        drawerContent={props => <DrawerScreen {...props} />}>
        <Drawer.Screen name="home" component={Home} />
        <Drawer.Screen name="contact" component={Contact} />
        <Drawer.Screen name="personal" component={PersonalParcel} />
        <Drawer.Screen name="commercial" component={Commercial} />
        <Drawer.Screen name="quickquote" component={QuickQuote} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MainNav;
