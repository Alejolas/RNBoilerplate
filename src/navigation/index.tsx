import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoggedOutStack from './LoggedOutStack';

const Navigation = () => (
  <NavigationContainer>
    <LoggedOutStack />
  </NavigationContainer>
);

export default Navigation;
