import routes from './routes';
import type { StackNavigationProp } from '@react-navigation/stack';

export type LoggedOutStackParamList = {
  [routes.ON_BOARDING]: undefined;
  [routes.LOGIN]: undefined;
};

export type LoggedOutStackNavigationProp<
  T extends keyof LoggedOutStackParamList,
> = StackNavigationProp<LoggedOutStackParamList, T>;
