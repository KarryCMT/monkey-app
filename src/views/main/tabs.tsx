import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {tabbarStyles} from './style';
import iconTabPublish from '@/assets/icon/icon_tab_publish.png';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';

export default ({state, descriptors, navigation}: any) => {
  const {routes, index} = state;

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
    // <SafeAreaView style={{width: '100%'}}>
    <View style={tabbarStyles.container}>
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
    // </SafeAreaView>
  );
};
