import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {StyleSheet} from 'react-native';
import iconDaily from '@/assets/icon/icon_daily.png';
import iconSearch from '@/assets/icon/icon_search.png';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
type Props = {
  tab: number;
  onTabChange: (tabIndex: number) => void;
};
export default ({tab, onTabChange}: Props) => {
  const [tabIndex, setTabIndex] = useState<number>(1);
  const {top}: {top: number} = useSafeAreaInsets();

  useEffect(() => {
    setTabIndex(tab);
  }, [tab]);

  return (
    <View style={[styles.titleLayout, {marginTop: top}]}>
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

const styles = StyleSheet.create({
  titleLayout: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  titleIcon: {
    width: 28,
    height: 28,
  },
  dailyButton: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 12,
    marginRight: 42,
  },
  searchButton: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 12,
    marginLeft: 42,
  },
  tabButton: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 15,
    color: '#999',
  },
  tabSelectedText: {
    fontSize: 17,
    color: '#333',
  },
  line: {
    width: 28,
    height: 2,
    backgroundColor: '#244f9e',
    borderRadius: 1,
    position: 'absolute',
    bottom: 6,
  },
});
