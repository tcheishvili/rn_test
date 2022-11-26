import React from 'react';
import {render, screen, waitFor} from '@testing-library/react-native';
import ApiService from '@/utils/api';
import HomeScreen from '../home/HomeScreen';
import {mockItem} from '@/components/__tests__/Card.test';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: jest.fn().mockReturnValue({navigate: jest.fn()}),
  };
});

jest.mock('@react-native-community/netinfo', () => {
  return {
    addEventListener: jest.fn(),
  };
});

jest.mock('react-native-video', () => jest.fn());

describe('HomeScreen', () => {
  test('render a loading component initially', () => {
    render(<HomeScreen />);
    screen.getByTestId('loading');
  });

  test('render error message if error thrown from api', async () => {
    jest.spyOn(ApiService, 'fetchPosts').mockRejectedValueOnce(new Error(''));
    render(<HomeScreen />);

    await waitFor(() => {
      screen.getByTestId('error');
    });
  });

  test('render list when data is fetched', async () => {
    jest.spyOn(ApiService, 'fetchPosts').mockResolvedValueOnce(mockItem);
    render(<HomeScreen />);

    await waitFor(() => {
      screen.getByTestId('post-list');
    });
  });
});
