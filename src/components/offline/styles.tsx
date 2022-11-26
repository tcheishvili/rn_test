import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  offlineContainer: {
    width,
    top: 50,
    height: 30,
    backgroundColor: '#b52424',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
  },
  offlineText: {
    color: '#fff',
  },
});

export default styles;
