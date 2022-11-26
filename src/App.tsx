import React from 'react';
import AppNavigator from './navigation/AppNavigator';

import NetworkProvider from './context/NetworkContext';

const App = () => {
  return (
    <NetworkProvider>
      <AppNavigator />
    </NetworkProvider>
  );
};

export default App;
