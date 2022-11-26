import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import globalStyles from '../../globalStyle';

const Loader = () => {
  return (
    <View style={globalStyles.container} testID="loading">
      <ActivityIndicator />
    </View>
  );
};

export default Loader;
