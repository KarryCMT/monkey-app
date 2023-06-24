import {request, requestNoToken} from '@/utils/index.ts';

interface Config {
  payload: object;
  options: object;
}
// 登录方法
export function login(config: Config) {
  const {payload = {}, options = {}} = config;
  return requestNoToken({
    url: '/rabbit/login',
    ...options,
    data: payload,
  });
}

// 获取用户详细信息
export const getInfo = () =>
  request({
    url: '/rabbit/system/member/get/current',
  });

// 退出方法
export const logout = () => request({url: '/rabbit/logout'});

// 获取所有字典
export const getDictAll = () =>
  request({url: '/rabbit/data/dictionary/option/all'});

// 获取验证码
export function getCodeImg() {
  return requestNoToken({
    url: '/rabbit/captcha/get',
    method: 'get',
  });
}

// 钉钉第三方登录 获取appid
export const getAppid = () =>
  requestNoToken({
    url: '/rabbit/auth/dingding/info/get',
    method: 'post',
  });

// 获取登录二次验证
export const checkAgain = (data: any) =>
  requestNoToken({
    url: '/rabbit/code/check',
    method: 'post',
    data,
  });
