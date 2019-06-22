import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import hoistNonReactStatic from "hoist-non-react-statics";

import TabBarIcon from "@components/TabBarIcon";
import {
  HomeScreen,
  SettingsScreen,
  UserScreen,
  RepoDetailScreen,
  GymSummaryScreen
} from "@screens";

const HomeStack = createStackNavigator({
  HomeScreen,
  RepoDetailScreen,
  UserScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

const GymWorkoutStack = createStackNavigator({
  GymSummaryScreen
});

GymWorkoutStack.navigationOptions = {
  tabBarLabel: "GYM",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

export const createMainTabNavigator = rootStore => {
  const TargetComponent = props => {
    return <GymWorkoutStack {...props} screenProps={rootStore} />;
  };

  return createBottomTabNavigator({
    GymWorkoutStack: hoistNonReactStatic(TargetComponent, GymWorkoutStack),
    HomeStack,
    SettingsStack
  });
};
