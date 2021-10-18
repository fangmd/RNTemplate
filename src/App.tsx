import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Router} from './router';

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
