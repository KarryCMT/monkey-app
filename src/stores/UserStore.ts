import {login, getInfo, getDictAll} from '@/apis/login/index.ts';
import {encrypt, setToken, getAppId, setStorage} from '@/utils/index.ts';
interface loginPayload {
  username: string;
  password: string;
  captcha: string;
  uuid: string;
}
class UserStore {
  userInfo: any;
  // 登录方法
  requestLogin = async (
    {username, password, captcha, uuid}: loginPayload,
    callback: (success: boolean) => void,
  ) => {
    try {
      const payload = {
        appId: await getAppId(),
        phone: '',
        captcha,
        type: 'captcha',
        uuid,
        username,
        password: encrypt(password),
        notips: true,
      };

      const {data, statusCode} = await login({payload, options: {}});
      if (statusCode === 600) {
        await setToken(data);
        this.requestGetInfo((success: boolean) => {
          if (success) {
            callback?.(true);
          } else {
            callback?.(false);
          }
        });
      } else {
        this.userInfo = null;
        callback?.(false);
      }
    } catch (error) {
      console.log(error);
      this.userInfo = null;
      callback?.(false);
    }
  };

  // 获取用户信息
  requestGetInfo = async (callback: (success: boolean) => void) => {
    try {
      const {statusCode, data} = await getInfo();
      if (statusCode && statusCode === 600) {
        const {
          account,
          id,
          avatar,
          deptId,
          code,
          gender,
          jobId,
          name,
          nickName,
        } = data;
        const userInfo = {
          account,
          id,
          avatar,
          deptId,
          code,
          gender,
          jobId,
          name,
          nickName,
        };
        this.userInfo = userInfo;

        await setStorage('userInfo', JSON.stringify(userInfo));

        callback?.(true);
      } else {
        this.userInfo = null;
        callback?.(false);
      }
    } catch (error) {
      console.log(error);
      this.userInfo = null;
      callback?.(false);
    }
  };

  // 获取所有字典数据
  requestDictData = async (callback: (success: boolean) => void) => {
    try {
      const {statusCode, data} = await getDictAll();
      if (statusCode && statusCode === 600) {
        await setStorage('dictList', JSON.stringify(data));
        callback?.(true);
      } else {
        callback?.(false);
      }
    } catch (error) {
      console.log(error);
      callback?.(false);
    }
  };
}

export default new UserStore();
