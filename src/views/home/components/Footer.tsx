import React from 'react';
import {StyleSheet, Text} from 'react-native';

// 列表顶部
export default () => {
  return <Text style={styles.footerText}>没有更多数据</Text>;
};
const styles = StyleSheet.create({
  footerText: {
    width: '100%',
    fontSize: 12,
    color: '#999',
    marginVertical: 12,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
