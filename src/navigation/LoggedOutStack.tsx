import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingScreen from '../screens/OnBoarding';
import LoginScreen from '../screens/Login';
import routes from './routes';

const Stack = createStackNavigator();

const LoggedOutStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.ON_BOARDING}
      options={{ title: 'On Boarding' }}
      component={OnBoardingScreen}
    />
    <Stack.Screen
      name={routes.LOGIN}
      options={{ title: 'Login' }}
      component={LoginScreen}
    />
  </Stack.Navigator>
);

export default LoggedOutStack;
