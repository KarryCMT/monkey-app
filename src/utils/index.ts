export * from './storage';
export * from './type';
export * from './request';
export * from './crypte';
export * from './auth';
export * from './config';

export const formatPhone = (phone: string): string => {
  const trim: string = phone.replace(/\s+/g, '');
  const result = [trim.slice(0, 3), trim.slice(3, 7), trim.slice(7, 11)]
    .filter(item => !!item)
    .join(' ');
  return result;
};

export const replacePhone = (phone: string): string => {
  return phone ? phone.replace(/\s+/g, '') : '';
};
