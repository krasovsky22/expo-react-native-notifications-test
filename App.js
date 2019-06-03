import React, { Component } from "react";
import { Text, View, AsyncStorage } from "react-native";

import { AppLoading } from "expo";
import { AppStore } from "@stores";

import Icon from "react-native-vector-icons/Feather";

const appStatePersistenceKey = "appStatePersistenceKey";
const navigationPersistenceKey = __DEV__ ? "NavigationStateDEV" : null;

import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import { Trips, Inbox, Saved, Explore, Details } from "@views";

const theme = {};

class App extends Component {
  state = {
    isLoadingComplete: false
  };

  appStore = AppStore.create({});

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      const AppNavigator = createAppNavigator(this.appStore);
      return (
        <Provider rootStore={this.appStore}>
          <View style={styles.container}>
            {Platform.OS === "ios" && <StatusBar barStyle="default" />}
            <AppNavigator
              persistenceKey={navigationPersistenceKey}
              ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
              }}
            />
          </View>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("@images/robot-dev.png"),
        require("@images/robot-prod.png")
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font
      }),
      this._loadPersistedState()
    ]);
  };

  _loadPersistedState = async () => {
    const retrievedState = await AsyncStorage.getItem(appStatePersistenceKey);

    if (retrievedState) {
      const rootStoreJson = JSON.parse(retrievedState);
      console.log(rootStoreJson);
      // if (RootStore.is(rootStoreJson)) {
      //   applySnapshot(this.rootStore, rootStoreJson);
      // }
    }
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const ExploreStack = createStackNavigator({
  Explore,
  Details
});

const Tabs = createBottomTabNavigator(
  {
    Explore: {
      screen: ExploreStack,
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
