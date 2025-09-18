import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
 
export type RootStackParamList = {
Home:undefined;
Details:undefined;
}
 
const Stack = createNativeStackNavigator<RootStackParamList>();
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= "Home">
        <Stack.Screen name = "Home" component ={HomeScreen}></Stack.Screen>
        <Stack.Screen name = "Details" component ={DetailScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
