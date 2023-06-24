import {getStorage} from './storage';

// 通过字典编码获取字典项
export const getDictOption = async (code: string) => {
  const list: any = await getStorage('dictList');
  const options = JSON.parse(list)[code];
  return options;
};
export * from './storage';
export * from './type';
export * from './request';
export * from './crypte';
export * from './auth';
export * from './config';
