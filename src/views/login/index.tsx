import React, {useState} from 'react';
import {
  Image,
  LayoutAnimation,
  Linking,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {styles, stylesInput, stylesPrivacyAgreement} from './style';
import welcomeBg from '@/assets/images/welcome-bg.jpeg';
import iconUnselected from '@/assets/icon/icon_unselected.png';
import iconSelected from '@/assets/icon/icon_selected.png';
import iconArrow from '@/assets/icon/icon_arrow.png';
import iconWxSmall from '@/assets/icon/icon_wx_small.png';
import iconTriangle from '@/assets/icon/icon_triangle.png';
import iconEyeOpen from '@/assets/icon/icon_eye_open.png';
import iconEyeClose from '@/assets/icon/icon_eye_close.png';
import iconExchange from '@/assets/icon/icon_exchange.png';
import iconWx from '@/assets/icon/icon_wx.png';
import iconQQ from '@/assets/icon/icon_qq.webp';
import iconCloseModal from '@/assets/icon/icon_close_modal.png';
import {formatPhone, replacePhone} from '@/utils/index.ts';
export default () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  // 手机号
  const [phone, setPhone] = useState<string>('');
  // 密码
  const [password, setPassword] = useState<string>('');
  // 登录类型
  const [loginType, setLoginType] = useState<'quick' | 'input'>('quick');
  // 是否勾选隐私政策
  const [check, setCheck] = useState<boolean>(false);
  // 切换显示PWD
  const [visiblePwd, setVisiblePwd] = useState<boolean>(false);
  // 切换登录方式
  const handleChangeLoginType = () => {
    LayoutAnimation.easeInEaseOut();
    setLoginType((type: 'input' | 'quick') => {
      if (type === 'input') {
        return 'quick';
      }
      return 'input';
    });
  };
  // 用户协议
  const renderUserProtocol = () => {
    // {/* 《用户协议》《隐私政策》 */}
    return (
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
    );
  };
  // 快捷登录
  const renderQuickLogin = () => {
    return (
      <View style={styles.root}>
        <Image source={welcomeBg} style={styles.welcomeBg} />
        {/* 隐私协议 */}
        <View style={stylesPrivacyAgreement.root}>
          {renderUserProtocol()}
          {/* 其它登录方式 */}
          <TouchableOpacity
            style={stylesPrivacyAgreement.otherLoginType}
            onPress={handleChangeLoginType}>
            <Text style={stylesPrivacyAgreement.otherText}>其它登录方式</Text>
            <Image
              source={iconArrow}
              style={stylesPrivacyAgreement.otherArrow}
            />
          </TouchableOpacity>
          {/* 微信登录 */}
          <TouchableOpacity
            style={stylesPrivacyAgreement.wxLogin}
            activeOpacity={0.7}>
            <Image
              style={stylesPrivacyAgreement.wxLoginIcon}
              source={iconWxSmall}
            />
            <Text style={stylesPrivacyAgreement.wxLoginText}>微信登录</Text>
          </TouchableOpacity>
          {/* 一键登录 */}
          <TouchableOpacity
            style={stylesPrivacyAgreement.oneKeyLogin}
            activeOpacity={0.7}>
            <Text style={stylesPrivacyAgreement.oneKeyLoginText}>一键登录</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  // 登录逻辑
  const handleLoginSubmit = () => {
    if (!check) {
      return;
    }
    if (canLogin) {
      return;
    }
    const account = replacePhone(phone);
    console.log(account);
    navigation.replace('home');
  };
  // 登录按钮状态
  const canLogin = phone?.length === 13 && password?.length === 6;
  // 账号密码登录
  const renderInputLogin = () => {
    return (
      <View style={stylesInput.root}>
        <Text style={stylesInput.pwdLoginText}>账号密码登录</Text>
        <Text style={stylesInput.tip}>未注册的手机号登录后将自动注册</Text>
        {/* 手机号 */}
        <View style={stylesInput.phoneLayout}>
          <Text style={stylesInput.phoneType}>+86</Text>
          <Image style={stylesInput.iconTriangle} source={iconTriangle} />
          <TextInput
            style={stylesInput.phoneInput}
            placeholder="请输入手机号码"
            placeholderTextColor={'#bbb'}
            maxLength={13}
            keyboardType="number-pad"
            autoFocus={false}
            value={phone}
            onChangeText={(value: string) => setPhone(formatPhone(value))}
          />
        </View>
        {/* 密码 */}
        <View style={stylesInput.pwdLayout}>
          <TextInput
            style={[stylesInput.pwdInput, stylesInput.phoneInput]}
            placeholder="请输入密码"
            placeholderTextColor={'#bbb'}
            maxLength={11}
            autoFocus={false}
            secureTextEntry={!visiblePwd} // 取反显示 *
            value={password}
            onChangeText={(value: string) => {
              setPassword(value);
            }}
          />
          <TouchableOpacity
            onPress={() => {
              setVisiblePwd(!visiblePwd);
            }}>
            <Image
              style={stylesInput.iconEye}
              source={visiblePwd ? iconEyeOpen : iconEyeClose}
            />
          </TouchableOpacity>
        </View>
        {/* 验证码登录 忘记密码 */}
        <View style={stylesInput.changeLayout}>
          <Image style={stylesInput.iconExchange} source={iconExchange} />
          <Text style={stylesInput.codeLogin}>验证码登录</Text>
          <Text style={stylesInput.forgetPwdText}>忘记密码?</Text>
        </View>
        {/* 登录按钮 */}
        <TouchableOpacity
          onPress={() => {
            handleLoginSubmit();
          }}
          activeOpacity={canLogin ? 0.7 : 1} // 1是没有点击效果
          style={
            canLogin ? stylesInput.loginButton : stylesInput.loginButtonDisabled
          }>
          <Text style={stylesInput.loginButtonText}>登录</Text>
        </TouchableOpacity>
        {/* 用户协议 */}
        {renderUserProtocol()}
        {/* 微信登录 & QQ登录 */}
        <View style={stylesInput.wxqqLayout}>
          <TouchableOpacity activeOpacity={0.8}>
            <Image style={stylesInput.iconWx} source={iconWx} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <Image style={stylesInput.iconQQ} source={iconQQ} />
          </TouchableOpacity>
        </View>
        {/* 关闭 */}
        <TouchableOpacity
          style={stylesInput.closeLayout}
          onPress={() => {
            handleChangeLoginType();
          }}>
          <Image style={stylesInput.closeIcon} source={iconCloseModal} />
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
