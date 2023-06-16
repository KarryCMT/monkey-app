import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
export default () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>测试页面 PageB</Text>
      <Button
        title="跳转"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};
