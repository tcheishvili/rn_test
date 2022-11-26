import React, {useEffect} from 'react';
import {View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {render, screen, waitFor} from '@testing-library/react-native';

import AppNavigator from '../AppNavigator';
import HomeScreen from '@/screens/home/HomeScreen';
import DetailsScreen from '@/screens/details/DetailsScreen';

jest.mock('@/screens/home/HomeScreen.tsx', () => jest.fn());
jest.mock('@/screens/details/DetailsScreen.tsx', () => jest.fn());

describe('AppNavigator', () => {
  test('should render HomeScreen by default', async () => {
    (HomeScreen as jest.Mock).mockReturnValueOnce(
      <View testID="mock-home-screen" />,
    );
    render(<AppNavigator />);

    await waitFor(() => {
      screen.getByTestId('mock-home-screen');
    });
  });

  test('Should render DetailsScreen on "Details" route', async () => {
    (HomeScreen as jest.Mock).mockImplementationOnce(() => {
      const navigation = useNavigation();

      useEffect(() => {
        navigation.navigate('PostDetails');
      }, [navigation]);

      return null;
    });

    (DetailsScreen as jest.Mock).mockReturnValueOnce(
      <View testID="mock-details-screen" />,
    );

    render(<AppNavigator />);

    await waitFor(() => {
      screen.getByTestId('mock-details-screen');
    });
  });
});
