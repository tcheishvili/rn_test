import ApiService from '../api';
import {mockItem} from '@/components/__tests__/Card.test';

jest.mock('../api.tsx', () => {
  const actualUtils = jest.requireActual('../api.tsx');
  return {
    ...actualUtils,
    fetchPosts: jest.fn(() => Promise.resolve(mockItem)),
  };
});

describe('mocking using jest.mock', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('fetch posts', async () => {
    const post = await ApiService.fetchPosts();
    expect(ApiService.fetchPosts).toHaveBeenCalledTimes(1);
    expect(post.data.title).toBe('mock-title');
  });
});
