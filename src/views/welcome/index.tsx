import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {styles} from './style';
import welcomeBg from '@/assets/images/welcome-bg.jpeg';
import {setAppId, appId, getToken} from '@/utils/index.ts';
export default () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  // 设置AppId
  const settingAppId = async (value: string) => {
    await setAppId(value);
  };
  // 跳转页面
  const goMain = async () => {
    const token = await getToken();
    if (token) {
      navigation.replace('main');
    } else {
      setTimeout(() => {
        navigation.replace('login');
      }, 3000);
    }
  };
  useEffect(() => {
    settingAppId(appId);
    goMain();
  });
  return (
    <View style={styles.root}>
      <Image source={welcomeBg} style={styles.welcomeBg} />
      <Text style={styles.welcomeTitle}>Welcome To Lee Student</Text>
    </View>
  );
};
