import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import FlowList from '@/components/FlowList/index.js';
import ItemIcon from '@/assets/images/welcome-bg.jpeg';
import {styles} from './style';
import HomeStore from '@/stores/HomeStore.ts';
import {observer} from 'mobx-react';
import ResizeImage from '@/components/ResizeImage/index.tsx';
import Heart from '@/components/Heart/index.tsx';
import TitleBar from '@/views/home/components/TitleBar.tsx';
type Props = {
  remark: string;
  name: string;
};
export default observer(() => {
  const renderItem = ({item, index}: {item: Props; index: number}) => {
    return (
      <View style={styles.item}>
        <ResizeImage
          uri={
            'https://picx.zhimg.com/v2-7cf9bbdfd5884694757eea5d325babc6_1440w.jpg' ||
            ItemIcon
          }
        />
        <Text style={styles.titleText}>{item.remark}</Text>
        <View style={styles.nameLayout}>
          <Image style={styles.avatarImage} source={ItemIcon} />
          <Text style={styles.nameText}>{item.name}</Text>
          <Heart />
          <Text style={styles.countText}>{99}</Text>
        </View>
      </View>
    );
  };

  // 下拉刷新
  const refreshNewData = () => {
    HomeStore.resetPage();
    HomeStore.requestHomeList();
  };

  // 上拉加载
  const loadMoreData = () => {
    HomeStore.requestHomeList();
  };

  // 列表底部
  const renderFooter = () => {
    return <Text style={styles.footerText}>没有更多数据</Text>;
  };

  useEffect(() => {
    HomeStore.requestHomeList();
  }, []);

  return (
    <View style={styles.root}>
      <TitleBar
        tab={1}
        onTabChange={(tab: number) => {
          console.log(tab);
        }}
      />
      <FlowList
        style={styles.flatList}
        data={HomeStore.homeList}
        extraData={[HomeStore.refreshing]}
        contentContainerStyle={styles.container}
        renderItem={renderItem}
        numColumns={2}
        refreshing={HomeStore.refreshing}
        onRefresh={refreshNewData}
        onEndReachedThreshold={0.1} // 距离底部0.1距离时触发
        onEndReached={loadMoreData} //
        ListFooterComponent={renderFooter}
      />
    </View>
  );
});
