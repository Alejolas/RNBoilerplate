import React, { FC } from 'react';
import { SafeAreaView, Text } from 'react-native';

const LoginScreen: FC = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
    </SafeAreaView>
  );
};
export default LoginScreen;
