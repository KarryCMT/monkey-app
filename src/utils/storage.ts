import AsyncStorage from '@react-native-async-storage/async-storage';
/**
 * 设置缓存
 * @param key
 * @param value
 */
export const setStorage = async (key: string, value: string) => {
  try {
    return await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error(e);
  }
};

/**
 * 获取缓存
 * @param key
 * @returns
 */
export const getStorage = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.error(e);
    return null;
  }
};

/**
 * 删除缓存
 * @param key
 * @returns
 */
export const removeStorage = async (key: string) => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error(e);
  }
};

/**
 * 清空缓存
 * @param key
 * @returns
 */
export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.error(e);
  }
};
