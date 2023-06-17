import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 40,
    backgroundColor: 'white',
  },
  welcomeBg: {
    marginTop: 100,
    width: '100%',
    height: '30%',
    resizeMode: 'contain',
    marginBottom: 100,
  },
});
// 隐私协议
export const stylesPrivacyAgreement = StyleSheet.create({
  root: {
    width: '100%',
    flexDirection: 'column-reverse',
    alignItems: 'center',
  },
  privacyAgreement: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  privacyImage: {
    width: 20,
    height: 20,
  },
  privacyLabelText: {
    fontSize: 12,
    color: '#999',
    marginLeft: 6,
  },
  privacyProtocolText: {
    flexWrap: 'wrap',
    fontSize: 12,
    color: '#202fff',
  },
  // 其它登录方式
  otherLoginType: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 100,
  },
  otherText: {
    fontSize: 16,
    color: '#333333',
  },
  otherArrow: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginLeft: 6,
    transform: [{rotate: '180deg'}],
  },
  //
  wxLogin: {
    width: '100%',
    height: 56,
    backgroundColor: '#05c160',
    borderRadius: 28,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wxLoginIcon: {
    width: 40,
    height: 40,
  },
  wxLoginText: {
    fontSize: 18,
    color: 'white',
    marginLeft: 6,
  },
  oneKeyLogin: {
    width: '100%',
    height: 56,
    backgroundColor: '#244f9e',
    borderRadius: 28,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  oneKeyLoginText: {
    fontSize: 18,
    color: 'white',
  },
});
