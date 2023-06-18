import {getHomeList} from '@/apis/home/index.ts';

export default class HomeStore {
  // 获取首页列表数据
  requestHomeList = async () => {
    try {
      const {statusCode, data} = await getHomeList();
      if (statusCode === 600) {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
}
