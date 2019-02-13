import React, { Component } from "react";
import {createStackNavigator,createAppContainer,createDrawerNavigator} from "react-navigation";
import StackViewStyleInterpolator from "react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator";
import HomeScreen from "./pages/Home";
import DetailsScreen from "./pages/Details";
import DrawerScreen from "./pages/Drawer";


/*
 *   构建导航
 *   
 *   导航结构 ：
 *      >Drawer
 *      >Home 
 *          >>Details  
 */  



// 二级导航
const MainScreen = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    }
  },
  {
    // 设置header默认样式
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#008bed"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontSize: 16
      }
    },
    // 设置转场动画效果（安卓实现类似iOS的push动画)    来源： https://www.jianshu.com/p/dc9df5826651
    transitionConfig: () => ({
      screenInterpolator: StackViewStyleInterpolator.forHorizontal
    })
  }
);

//  根节点抽屉导航
const AppNavigator = createDrawerNavigator({
  Main: {
    screen: MainScreen
  },
  Drawer: {
    screen: DrawerScreen
  }
});

export default createAppContainer(AppNavigator);
