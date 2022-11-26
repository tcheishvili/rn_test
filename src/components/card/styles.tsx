import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 4,
    marginTop: 16,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 8,
    shadowRadius: 3,
    shadowOpacity: 0.2,
    shadowColor: '#000',
  },
  wrapper: {
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 26,
  },
  author: {
    marginTop: 6,
    fontSize: 14,
    lineHeight: 20,
    color: '#959595',
  },
  info: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subinfo: {
    flexDirection: 'row',
  },
  title: {
    lineHeight: 20,
    marginTop: 2,
    color: '#959595',
  },
  vote: {
    marginLeft: 33,
  },
  videoContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  video: {
    width: 300,
    height: 300,
    borderRadius: 4,
  },
  textContainer: {
    maxHeight: 300,
  },
  marginTop: {
    marginTop: 10,
  },
});

export default styles;
