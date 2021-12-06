import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, View } from 'react-native';
import style from './style';
import routes from '../../navigation/routes';
import { LoggedOutStackNavigationProp } from '../../navigation/types';

const OnBoarding = () => {
  const navigation =
    useNavigation<LoggedOutStackNavigationProp<'ON_BOARDING'>>();
  const navigateToLogin = () => {
    navigation.navigate(routes.LOGIN);
  };

  return (
    <View style={style.container}>
      <Button title="Navigate to Login Screen" onPress={navigateToLogin} />
    </View>
  );
};

export default OnBoarding;
