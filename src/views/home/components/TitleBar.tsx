import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../style';
import iconDaily from '@/assets/icon/icon_daily.png';
import iconSearch from '@/assets/icon/icon_search.png';
type Props = {
  tab: number;
  onTabChange: (tabIndex: number) => void;
};
export default ({tab, onTabChange}: Props) => {
  const [tabIndex, setTabIndex] = useState<number>(1);

  useEffect(() => {
    setTabIndex(tab);
  }, [tab]);

  return (
    <View style={styles.titleLayout}>
      <TouchableOpacity style={styles.dailyButton}>
        <Image style={styles.titleIcon} source={iconDaily} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setTabIndex(0);
          onTabChange?.(0);
        }}
        style={styles.tabButton}>
        <Text style={tabIndex === 0 ? styles.tabSelectedText : styles.tabText}>
          关注
        </Text>
        {tabIndex === 0 && <View style={styles.line} />}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setTabIndex(1);
          onTabChange?.(1);
        }}
        style={styles.tabButton}>
        <Text style={tabIndex === 1 ? styles.tabSelectedText : styles.tabText}>
          发现
        </Text>
        {tabIndex === 1 && <View style={styles.line} />}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setTabIndex(2);
          onTabChange?.(2);
        }}
        style={styles.tabButton}>
        <Text style={tabIndex === 2 ? styles.tabSelectedText : styles.tabText}>
          深圳
        </Text>
        {tabIndex === 2 && <View style={styles.line} />}
      </TouchableOpacity>
      <TouchableOpacity style={styles.searchButton}>
        <Image style={styles.titleIcon} source={iconSearch} />
      </TouchableOpacity>
    </View>
  );
};
