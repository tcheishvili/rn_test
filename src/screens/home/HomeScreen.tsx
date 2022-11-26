import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItem, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Item} from '@/types/Item';
import ApiService from '@/utils/api';
import Card from '@/components/card';
import Loader from '@/components/loader';
import OfflineSign from '@/components/offline';
import ErrorMessage from '@/components/errorMessage';
import {useNetworkContext} from '@/context/NetworkContext';

import styles from './styles';
import {RootStackNavigationProp} from '@/navigation/types';

const HomeScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp<'PostDetails'>>();
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const isConnected = useNetworkContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ApiService.fetchPosts();
        setData(response);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderItem: ListRenderItem<Item> = ({item}) => {
    const onPress = () => navigation.navigate('PostDetails');
    return <Card item={item} onPress={onPress} />;
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <SafeAreaView testID="home-screen">
      <FlatList
        data={data}
        testID="post-list"
        style={styles.list}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
      {!isConnected && <OfflineSign />}
    </SafeAreaView>
  );
};

export default HomeScreen;
