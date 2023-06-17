import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {styles} from './style';
import welcomeBg from '@/assets/images/welcome-bg.jpeg';
export default () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('login');
    }, 3000);
  });
  return (
    <View style={styles.root}>
      <Image source={welcomeBg} style={styles.welcomeBg} />
      <Text style={styles.welcomeTitle}>Welcome To Lee Student</Text>
    </View>
  );
};
