import React, {useEffect, useState, useRef} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import iconArrow from '@/assets/icon/icon_arrow.png';
import HomeStore from '@/stores/HomeStore.ts';
import {getDictOption} from '@/utils/index.ts';
import CategoryModal, {CategoryModalRef} from '@/views/home/components/Modal';
// 列表顶部
export default () => {
  const modalRef = useRef<CategoryModalRef>(null);
  const [categoryOptions, setCategoryOptions] = useState<any>([]);
  const [category, setCategory] = useState<any>();
  // 获取首页分类
  const categoryList = async () => {
    const data = await getDictOption('category_code');
    data.sort((a: any, b: any) => a.sortNumber - b.sortNumber);
    setCategoryOptions(data);
    setCategory(categoryOptions.find((i: any, index: number) => index === 0));
  };
  // 点击⌚️
  const onCategoryPress = (item: any) => {
    console.log(item);
    setCategory(item);
  };

  useEffect(() => {
    HomeStore.requestHomeList();
    categoryList();
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.scrollView}>
        {categoryOptions.map((item: any) => {
          const isSelected = category?.name === item.name;
          return (
            <TouchableOpacity
              onPress={() => onCategoryPress(item)}
              key={item.name}
              style={styles.tabItem}>
              <Text style={isSelected ? styles.tabSelectText : styles.tabText}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          modalRef.current?.show();
        }}
        style={styles.openButton}>
        <Image style={styles.openImg} source={iconArrow} />
      </TouchableOpacity>

      <CategoryModal ref={modalRef} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 36,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 6,
  },
  scrollView: {
    flex: 1,
    height: '100%',
  },
  openButton: {
    width: 40,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  openImg: {
    width: 18,
    height: 18,
    transform: [{rotate: '-90deg'}],
  },
  tabItem: {
    // width: 48,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 14,
    marginRight: 14,
  },
  tabText: {
    fontSize: 16,
    color: '#999',
  },
  tabSelectText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
});
