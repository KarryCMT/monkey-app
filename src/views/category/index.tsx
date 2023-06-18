import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {styles} from './style';
export default () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <View style={styles.root}>
      <Text style={styles.welcomeTitle}>category</Text>
    </View>
  );
};
