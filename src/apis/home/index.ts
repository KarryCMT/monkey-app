import {request} from '@/utils/index.ts';

// 获取首页列表数据
export function getHomeList(data: object) {
  return request({
    url: '/rabbit/system/job/find/page',
    method: 'post',
    data,
  });
}
