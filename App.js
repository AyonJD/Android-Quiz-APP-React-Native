import React, { createContext, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogBox } from 'react-native';

import AuthNavigation from './Src/Components/Navigation/AuthNavigation';
import ScreenNavigation from './Src/Components/Navigation/ScreenNavigation';

export const AuthContext = createContext();

LogBox.ignoreAllLogs()

const App = () => {
  const [token, setToken] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const loginToken = async (userToken, userData) => {
    try {
      setLoading(true);
      await AsyncStorage.setItem('token', userToken);
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      setToken(userToken);
      setUser(userData);
      setLoading(false);
    } catch (e) { }
  };

  const logoutToken = async () => {
    try {
      setLoading(true);
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('user');
      setToken(null);
      setUser(null);
      setLoading(false)
    } catch (e) { }
  };

  const _retrieveToken = async () => {
    try {
      setLoading(true);
      const userToken = await AsyncStorage.getItem('token');
      const userData = await AsyncStorage.getItem('user');
      setToken(userToken);
      setUser(JSON.parse(userData));
      setLoading(false);
    } catch (e) { }
  };

  useEffect(() => {
    _retrieveToken()
  }, []);

  return (
    <AuthContext.Provider value={{ loginToken, logoutToken, user, token, loading }}>
      <NavigationContainer>
        {token ? (<ScreenNavigation />) : (<AuthNavigation />)}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App
