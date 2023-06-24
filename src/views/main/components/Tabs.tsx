import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import iconTabPublish from '@/assets/icon/icon_tab_publish.png';
import {launchImageLibrary} from 'react-native-image-picker';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default ({state, descriptors, navigation}: any) => {
  const {routes, index} = state;
  const insets = useSafeAreaInsets();
  // 选择相册
  const selectPhoto = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
        includeBase64: false,
      },
      res => {
        if (res.didCancel) {
          return false;
        }
        const {assets} = res;
        console.log(assets);
      },
    );
  };

  return (
    <View style={[tabbarStyles.container, {paddingBottom: insets.bottom}]}>
      {routes.map((route: any, i: number) => {
        const {options} = descriptors[route.key];
        const label = options.title;
        const isFocused = index === i;
        if (i === 2) {
          return (
            <TouchableOpacity
              key={label}
              style={tabbarStyles.tabItem}
              onPress={selectPhoto}>
              <Image
                style={tabbarStyles.iconTabPublish}
                source={iconTabPublish}
              />
            </TouchableOpacity>
          );
        }
        return (
          <TouchableOpacity
            key={label}
            style={tabbarStyles.tabItem}
            onPress={() => {
              navigation.navigate(route.name);
            }}>
            <Text
              style={
                isFocused ? tabbarStyles.selectText : tabbarStyles.normalText
              }>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const tabbarStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 72,
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
