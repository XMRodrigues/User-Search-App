import React from 'react';
import { View, Text, AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './src/Pages/Home.js'
import Profile from './src/Pages/Profile.js'

const Stack = createStackNavigator();
AppRegistry.registerComponent('api', () => App);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}