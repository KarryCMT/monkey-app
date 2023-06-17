import React, {useState} from 'react';
import {Image, Linking, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {styles, stylesOther, stylesPrivacyAgreement} from './style';
import welcomeBg from '@/assets/images/welcome-bg.jpeg';
import iconUnselected from '@/assets/icon/icon_unselected.png';
import iconSelected from '@/assets/icon/icon_selected.png';
import iconArrow from '@/assets/icon/icon_arrow.png';
import iconWx from '@/assets/icon/icon_wx_small.png';
export default () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [loginType, setLoginType] = useState<'quick' | 'input'>('quick');
  const [check, setCheck] = useState<boolean>(false);

  // 快捷登录
  const renderQuickLogin = () => {
    return (
      <View style={styles.root}>
        <Image source={welcomeBg} style={styles.welcomeBg} />
        {/* 隐私协议 */}
        {renderPrivacyAgreement()}
      </View>
    );
  };
  // 账号密码登录
  const renderInputLogin = () => {
    return (
      <View style={styles.root}>
        <Image source={welcomeBg} style={styles.welcomeBg} />
        {/* 隐私协议 */}
        {renderPrivacyAgreement()}
      </View>
    );
  };
  // 隐私协议
  const renderPrivacyAgreement = () => {
    return (
      <View style={stylesPrivacyAgreement.root}>
        {/* 《用户协议》《隐私政策》 */}
        <View style={stylesPrivacyAgreement.privacyAgreement}>
          <TouchableOpacity
            onPress={() => {
              setCheck(!check);
            }}>
            <Image
              style={stylesPrivacyAgreement.privacyImage}
              source={check ? iconSelected : iconUnselected}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={stylesPrivacyAgreement.privacyLabelText}>
            我已阅读并同意
          </Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://baidu.com');
            }}>
            <Text style={stylesPrivacyAgreement.privacyProtocolText}>
              《用户协议》《隐私政策》
            </Text>
          </TouchableOpacity>
        </View>
        {/* 其它登录方式 */}
        <TouchableOpacity style={stylesPrivacyAgreement.otherLoginType}>
          <Text style={stylesPrivacyAgreement.otherText}>其它登录方式</Text>
          <Image source={iconArrow} style={stylesPrivacyAgreement.otherArrow} />
        </TouchableOpacity>
        {/* 微信登录 */}
        <TouchableOpacity
          style={stylesPrivacyAgreement.wxLogin}
          activeOpacity={0.7}>
          <Image style={stylesPrivacyAgreement.wxLoginIcon} source={iconWx} />
          <Text style={stylesPrivacyAgreement.wxLoginText}>微信登录</Text>
        </TouchableOpacity>
        {/* 一键登录 */}
        <TouchableOpacity
          style={stylesPrivacyAgreement.oneKeyLogin}
          activeOpacity={0.7}>
          <Text style={stylesPrivacyAgreement.oneKeyLoginText}>一键登录</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.root}>
      {/* 登录类型 */}
      {loginType === 'quick' ? renderQuickLogin() : renderInputLogin()}
    </View>
  );
};
