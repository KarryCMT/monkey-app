import {getHomeList} from '@/apis/home/index.ts';
import {action, observable} from 'mobx';
const pageSize: number = 10;
class HomeStore {
  pageNum: number = 1;
  @observable homeList: any = [];

  @observable refreshing: boolean = false;

  @action
  resetPage = () => {
    this.pageNum = 1;
  };
  // 获取首页列表数据
  requestHomeList = async () => {
    if (this.refreshing) {
      return;
    }
    try {
      this.refreshing = true;
      const payload = {pageSize, pageNum: this.pageNum};
      const {statusCode, data} = await getHomeList(payload);
      if (statusCode === 600) {
        if (data.list?.length) {
          if (data.pageNum === 1) {
            this.homeList = data.list;
          } else {
            this.homeList = [...this.homeList, ...data.list];
          }
          this.pageNum = data.pageNum + 1;
        } else {
          if (data.pageNum === 1) {
            this.homeList = [];
          } else {
            // 加载完了没有更多数据
          }
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.refreshing = false;
    }
  };
}
export default new HomeStore();
