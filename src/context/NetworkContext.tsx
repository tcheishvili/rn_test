import React, {FC, useEffect, useState, useContext} from 'react';
import NetInfo from '@react-native-community/netinfo';

interface Props {
  children: React.ReactNode;
}

export const NetworkContext = React.createContext<null | boolean>(true);

export const useNetworkContext = () => useContext(NetworkContext);

const NetworkProvider: FC<Props> = ({children}) => {
  const [isConnected, setIsConnected] = useState<boolean | null>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <NetworkContext.Provider value={isConnected}>
      {children}
    </NetworkContext.Provider>
  );
};

export default NetworkProvider;
