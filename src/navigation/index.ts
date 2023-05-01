import { RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// home, map, servie, profile

export type MainStackParamList = {
    Home: undefined;
    Map: undefined;
    Service: undefined;
    Profile: undefined;
};

export type HomeScreenRouteProp = RouteProp<MainStackParamList, 'Home'>;

const MainStack = createNativeStackNavigator<MainStackParamList>();