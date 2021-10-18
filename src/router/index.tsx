import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomePage} from '../pages/home';
import {MinePage} from '../pages/mine';

const Stack = createNativeStackNavigator();

export const Router: React.FC<any> = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Profile" component={MinePage} />
    </Stack.Navigator>
  );
};
