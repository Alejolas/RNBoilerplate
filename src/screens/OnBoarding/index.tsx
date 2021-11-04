import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import routes from '../../navigation/routes';

const OnBoardingScreen: FC = () => {
  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate(routes.LOGIN);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>On Boarding Screen</Text>
      <Button title="Navigate to Login Screen" onPress={navigateToLogin} />
    </SafeAreaView>
  );
};
export default OnBoardingScreen;
