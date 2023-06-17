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
    marginTop: 12,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    color: '#244f9e',
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

export const stylesInput = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  pwdLoginText: {
    fontSize: 28,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 86,
  },
  tip: {
    fontSize: 12,
    color: '#999',
    marginTop: 8,
  },
  phoneLayout: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: 28,
  },
  phoneType: {
    fontSize: 24,
    color: '#bbb',
  },
  iconTriangle: {
    width: 12,
    height: 6,
    marginLeft: 6,
  },
  phoneInput: {
    flex: 1,
    height: 60,
    backgroundColor: 'transparent',
    textAlign: 'left',
    textAlignVertical: 'center',
    fontSize: 24,
    color: '#333',
    marginLeft: 16,
  },
  pwdLayout: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: 8,
  },
  pwdInput: {
    marginLeft: 0,
    marginRight: 16,
  },
  iconEye: {
    width: 30,
    height: 30,
  },
  changeLayout: {
    width: '100%',
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconExchange: {
    width: 16,
    height: 16,
  },
  codeLogin: {
    fontSize: 14,
    flex: 1,
    color: '#303080',
    marginLeft: 4,
  },
  forgetPwdText: {
    fontSize: 14,
    color: '#303080',
  },
  loginButton: {
    marginTop: 20,
    width: '100%',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    backgroundColor: '#244f9e',
  },
  loginButtonText: {
    fontSize: 20,
    color: 'white',
  },
  wxqqLayout: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 100,
    justifyContent: 'space-around',
  },
  iconWx: {
    width: 50,
    height: 50,
  },
  iconQQ: {
    width: 50,
    height: 50,
  },
  closeLayout: {
    position: 'absolute',
    left: 16,
    top: 54,
  },
  closeIcon: {
    width: 28,
    height: 28,
  },
});
