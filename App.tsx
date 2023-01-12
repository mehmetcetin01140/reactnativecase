
import React from 'react';
import type {Node} from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack" 
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/Home-Screen';
import DummyScreen from './Screens/Dummy-Screen';
import { RootStackParamList } from './Types/NavigationTypes';



const App: () => Node = () => {
  const stack = createNativeStackNavigator<RootStackParamList>()
  return (
 

      <NavigationContainer>
    <stack.Navigator initialRouteName="Home">
      <stack.Screen name="Home" component={HomeScreen}/>
      <stack.Screen name="Dummy" component={DummyScreen}/>
    </stack.Navigator>
  </NavigationContainer>
   
  );
};


export default App;
