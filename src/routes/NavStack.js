import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavBottom from './NavBottom';

const Stack = createNativeStackNavigator();

const NavStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={NavBottom} />
    </Stack.Navigator>
  );
};

export default NavStack;
