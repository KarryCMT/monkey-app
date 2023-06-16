import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {styles} from './style';

export default () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <View style={styles.root}>
      <Text>测试页面 PageA</Text>
      <Button
        title="跳转"
        onPress={() => {
          // navigation.push('PageB'); // push 是追加到这个页面 不管前面有没有历史记录
          navigation.navigate('login'); // navigate 是从历史记录找，找到了就跳转没有则新开页面
          // navigation.replace('PageB'); // replace 是替换当前页面为指定页面
        }}
      />
    </View>
  );
};
