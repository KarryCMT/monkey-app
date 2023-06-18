import {login} from '@/apis/login/index.ts';
import {encrypt} from '@/utils/index.ts';

class UserStore {
  userInfo: any;

  requestLogin = async (
    username: string,
    password: string,
    captcha: string,
    callback: (success: boolean) => void,
  ) => {
    try {
      const payload = {
        appId: '1',
        phone: '',
        captcha,
        type: 'captcha',
        uuid: '',
        username,
        password: encrypt(password),
        notips: true,
      };
      console.log(payload, 'payload');

      const {data} = await login(payload);
      if (data) {
        this.userInfo = data;
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
}

export default new UserStore();
