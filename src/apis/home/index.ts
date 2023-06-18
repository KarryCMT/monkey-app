import {request} from '@/utils/index.ts';

// 登录方法
export function getHomeList(data: object) {
  return request({
    url: '/rabbit/login',
    method: 'post',
    data,
  });
}
