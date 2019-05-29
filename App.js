import React, { Component } from "react";
import { Text, View } from "react-native";

import Icon from "react-native-vector-icons/Feather";

import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { Trips, Inbox, Saved, Explore } from "@views";

const theme = {};

class App extends Component {
  render() {
    return (
      <View>
        <Text>Hello World</Text>
      </View>
    );
  }
}

const Tabs = createBottomTabNavigator(
  {
    Explore: {
      screen: Explore,
      navigationOptions: {
        tabBarLabel: "EXPLORE",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="search" color={tintColor} size={24} />
        )
      }
    },
    Saved: {
      screen: Saved,
      navigationOptions: {
        tabBarLabel: "SAVED",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="heart" color={tintColor} size={24} />
        )
      }
    },
    Trips: {
      screen: Trips,
      navigationOptions: {
        tabBarLabel: "Trips",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="award" color={tintColor} size={24} />
        )
      }
    },
    Inbox: {
      screen: Inbox,
      navigationOptions: {
        tabBarLabel: "INBOX",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="copy" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "red",
      inactiveTintColor: "grey",
      style: {
        backgroundColor: "white",
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  }
);

export default createAppContainer(Tabs);
