import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {tabbarStyles} from './style';
import iconTabPublish from '@/assets/icon/icon_tab_publish.png';
export default ({state, descriptors, navigation}: any) => {
  const {routes, index} = state;
  return (
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
              onPress={() => {
                navigation.navigate(route.name);
              }}>
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
