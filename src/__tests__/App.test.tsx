import React from 'react';
import {View} from 'react-native';
import {render, screen} from '@testing-library/react-native';

import App from '@/App';
import AppNavigator from '@/navigation/AppNavigator';
import {addEventListener} from '@react-native-community/netinfo';

jest.mock('@/navigation/AppNavigator.tsx', () => jest.fn());
jest.mock('@react-native-community/netinfo', () => {
  return {
    addEventListener: jest.fn(),
  };
});

describe('App', () => {
  test('should render routes', () => {
    (addEventListener as jest.Mock).mockImplementationOnce(() => jest.fn());
    (AppNavigator as jest.Mock).mockReturnValueOnce(
      <View testID="mock-routes" />,
    );
    render(<App />);
    screen.getByTestId('mock-routes');
  });
});
