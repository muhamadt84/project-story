import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Beranda, Profil} from '../pages/index';

const Tab = createBottomTabNavigator();

const NavBottom = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Beranda" component={Beranda} />
      <Tab.Screen name="Profil" component={Profil} />
    </Tab.Navigator>
  );
};

export default NavBottom;
