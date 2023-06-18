import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
});

export const tabbarStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  tabItem: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  normalText: {
    fontSize: 16,
    color: '#999',
    fontWeight: 'normal',
  },
  iconTabPublish: {
    width: 58,
    height: 40,
    resizeMode: 'contain',
  },
});
