import * as React from 'react';
import { BackHandler, Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import NotificationsScreen from './HomeScreen/NotificationsScreen';
import ProfileScreen from './HomeScreen/ProfileScreen';

const Drawer = createDrawerNavigator();




export default function App() {

  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress',() => {
      return true
    })
  })
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Profile">
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}