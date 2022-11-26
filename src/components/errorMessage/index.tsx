import React from 'react';
import {Text, View} from 'react-native';

import globalStyles from '../../globalStyle';

const ErrorMessage = () => {
  return (
    <View style={globalStyles.container} testID="error">
      <Text>Error occured!</Text>
    </View>
  );
};

export default ErrorMessage;
