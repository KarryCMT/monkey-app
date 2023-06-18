/**
 *  screenOptions={({route}) => {
          return {
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused, color, size}) => {
              let icon;
              if (route.name === 'home') {
                icon = focused ? iconTabHomeSelected : iconTabHomeNormal;
              }
              if (route.name === 'mine') {
                icon = focused ? iconTabMineSelected : iconTabMineNormal;
              }
              if (route.name === 'message') {
                icon = focused ? iconTabMessageSelected : iconTabMessageNormal;
              }
              return (
                <Image
                  style={{
                    width: size,
                    height: size,
                    tintColor: color,
                  }}
                  source={icon}
                />
              );
            },
          };
        }}
 */
import React from 'react';
import {View} from 'react-native';
// import {useNavigation} from '@react-navigation/core';
import {TransitionPresets} from '@react-navigation/stack';
import {styles} from './style';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Icon
// import iconTabHomeNormal from '@/assets/icon/icon_tab_home_normal.png';
// import iconTabHomeSelected from '@/assets/icon/icon_tab_home_selected.png';

// import iconTabMessageNormal from '@/assets/icon/icon_tab_message_normal.png';
// import iconTabMessageSelected from '@/assets/icon/icon_tab_message_selected.png';

// import iconTabMineNormal from '@/assets/icon/icon_tab_mine_normal.png';
// import iconTabMineSelected from '@/assets/icon/icon_tab_mine_selected.png';

// 模块
import Home from '@/views/home/index.tsx';
import Mine from '@/views/mine/index.tsx';
import Message from '@/views/message/index.tsx';
import Publish from '@/views/publish/index.tsx';
import Category from '@/views/category/index.tsx';
//  自定义Tab
import LeeTabs from './tabs';

const Tab = createBottomTabNavigator();
export default () => {
  // const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <View style={styles.root}>
      <Tab.Navigator tabBar={props => <LeeTabs {...props} />}>
        {/* 页面 首页 Home */}
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            title: '首页',
            headerShown: false, // 去掉默认生成的导航栏标题
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
        {/* 页面 分类 Category */}
        <Tab.Screen
          name="category"
          component={Category}
          options={{
            title: '分类',
            headerShown: false, // 去掉默认生成的导航栏标题
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
        {/* 页面 发布 Publish */}
        <Tab.Screen
          name="publish"
          component={Publish}
          options={{
            title: '发布',
            headerShown: false, // 去掉默认生成的导航栏标题
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
        {/* 页面 消息 Message */}
        <Tab.Screen
          name="message"
          component={Message}
          options={{
            title: '消息',
            headerShown: false, // 去掉默认生成的导航栏标题
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
        {/* 页面 个人中心 Mine */}
        <Tab.Screen
          name="mine"
          component={Mine}
          options={{
            title: '我的',
            headerShown: false, // 去掉默认生成的导航栏标题
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
      </Tab.Navigator>
    </View>
  );
};
