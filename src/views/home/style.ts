import {Dimensions, StyleSheet} from 'react-native';
const {width: SCREEN_WIDTH} = Dimensions.get('window');
export const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  flatList: {
    width: '100%',
    height: '100%',
  },
  container: {
    paddingTop: 6,
  },
  item: {
    width: (SCREEN_WIDTH - 18) >> 1,
    backgroundColor: 'white',
    marginLeft: 6,
    marginBottom: 6,
    borderRadius: 8,
    overflow: 'hidden',
  },
  itemImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  titleText: {
    fontSize: 14,
    color: '#333',
    marginHorizontal: 10,
    marginVertical: 4,
  },
  nameLayout: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  avatarImage: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  nameText: {
    fontSize: 12,
    color: '#999',
    marginLeft: 4,
    flex: 1,
  },
  iconImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  countText: {
    fontSize: 14,
    color: '#999',
    marginLeft: 4,
  },
  titleLayout: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  titleIcon: {
    width: 28,
    height: 28,
  },
  dailyButton: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 12,
    marginRight: 42,
  },
  searchButton: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 12,
    marginLeft: 42,
  },
  tabButton: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 15,
    color: '#999',
  },
  tabSelectedText: {
    fontSize: 17,
    color: '#333',
  },
  line: {
    width: 28,
    height: 2,
    backgroundColor: '#244f9e',
    borderRadius: 1,
    position: 'absolute',
    bottom: 6,
  },
});
