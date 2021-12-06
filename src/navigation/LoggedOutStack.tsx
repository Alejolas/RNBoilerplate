import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingScreen from '../screens/OnBoarding';
import LoginScreen from '../screens/Login';
import routes from './routes';
import { LoggedOutStackParamList } from './types';

const Stack = createStackNavigator<LoggedOutStackParamList>();

const LoggedOutStack: FC = () => (
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
