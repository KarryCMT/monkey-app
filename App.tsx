import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
// 模块
import Welcome from './src/views/welcome'; // 启动页
import Login from './src/views/login'; // 登录页

const Stack = createStackNavigator();
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            cardStyle: {elevation: 1}, // 给页面增加层级防止透过页面
          }}>
          {/* 页面 Welcome */}
          <Stack.Screen
            name="welcome"
            component={Welcome}
            options={{
              headerShown: false, // 去掉默认生成的导航栏标题
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
          {/* 页面 Login */}
          <Stack.Screen
            name="login"
            component={Login}
            options={{
              headerShown: false, // 去掉默认生成的导航栏标题
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
