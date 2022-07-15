import routes from './routes';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type LoggedOutStackParamList = {
  [routes.ON_BOARDING]: undefined;
  [routes.LOGIN]: undefined;
};

export type LoggedOutStackNavigationProp<
  T extends keyof LoggedOutStackParamList,
> = NativeStackNavigationProp<LoggedOutStackParamList, T>;
