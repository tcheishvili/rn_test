import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

const OfflineSign = () => {
  return (
    <View style={styles.offlineContainer} testID="offline-sign">
      <Text style={styles.offlineText}>No Internet Connection</Text>
    </View>
  );
};

export default OfflineSign;
