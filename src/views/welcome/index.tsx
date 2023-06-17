import React, {useEffect, useState} from 'react';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {styles} from './style';

export default () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const [captchaCode, setCaptchaCode] = useState<string>('');

  useEffect(() => {
    // /rabbit/login
    getCaptchaCode();
  }, []);

  const getCaptchaCode = () => {
    fetch('https://api.lengnuanit.top/api/v1/rabbit/captcha/get')
      .then(res => res.json())
      .then(res => {
        if (res.data) {
          setCaptchaCode(`data:image/png;base64,${res.data.image}`);
        }
      });
  };
  return (
    <View style={styles.root}>
      <Text>测试页面 PageA</Text>
      <TouchableOpacity onPress={getCaptchaCode}>
        <Image
          source={{
            uri: captchaCode,
          }}
          style={styles.captchaCode}
        />
      </TouchableOpacity>

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
