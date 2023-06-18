import {setStorage, getStorage, removeStorage} from '@/utils/storage.ts';

const Token = 'AuthToken';
const AppId = 'App-Id';

export function getToken() {
  return getStorage(Token);
}

export function setToken(token: string) {
  return setStorage(Token, token);
}

export function removeToken() {
  return removeStorage(Token);
}

export function getAppId() {
  return getStorage(AppId) || '';
}

export function setAppId(appId: string) {
  return setStorage(AppId, appId);
}

export function removeAppId() {
  return removeStorage(AppId);
}

export {Token, AppId};
