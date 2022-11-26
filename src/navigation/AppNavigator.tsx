import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList} from './types';
import HomeScreen from '@/screens/home/HomeScreen';
import DetailsScreen from '@/screens/details/DetailsScreen';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const {Navigator, Screen} = Stack;
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Home" component={HomeScreen} />
        <Screen name="PostDetails" component={DetailsScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
