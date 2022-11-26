import React from 'react';
import Card from '../card';

import {fireEvent, render, screen} from '@testing-library/react-native';

export const mockItem = {
  data: {
    title: 'mock-title',
    author: 'mock-author',
    is_video: true,
    selftext: 'mock-text',
    num_comments: 0,
    ups: 0,
    media: {
      reddit_video: {
        bitrate_kbps: 0,
        fallback_url: 'mock-fallback_url',
        height: 0,
        width: 0,
        scrubber_media_url: 'mock_scrubber_media_url',
        dash_url: 'mock_dash_url',
        duration: 0,
        hls_url: 'mock_hls_url',
        is_gif: true,
        transcoding_status: 'mock_transcoding_status',
      },
    },
  },
};

jest.mock('react-native-video', () => jest.fn());

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: jest.fn().mockReturnValue({navigate: jest.fn()}),
  };
});

describe('Card Component', () => {
  test('should render correctly', () => {
    render(<Card item={mockItem} />);
    screen.getByTestId('card');
  });

  test('should render video when is_video equals to true', () => {
    render(<Card item={mockItem} />);
    screen.getByTestId('video-container');
  });

  test('should call give onPress method', () => {
    const mockOnPress = jest.fn();
    render(<Card item={mockItem} onPress={mockOnPress} />);
    const button = screen.getByTestId('button');
    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalled();
  });
});
