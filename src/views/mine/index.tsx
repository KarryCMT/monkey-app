import React, {useEffect} from 'react';
import {Button, Image, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {styles} from './style';
import {clearStorage} from '@/utils/index.ts';
export default () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const logout = async () => {
    await clearStorage();
    navigation.replace('login');
  };
  return (
    <View style={styles.root}>
      <Button title="退出" onPress={logout} />
    </View>
  );
};
