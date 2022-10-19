import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigation from './Src/Components/Navigation/AuthNavigation';
import ScreenNavigation from './Src/Components/Navigation/ScreenNavigation';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <AuthNavigation />
      {/* <ScreenNavigation /> */}
    </NavigationContainer>
  );
}

export default App
