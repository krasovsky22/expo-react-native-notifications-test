import { Ionicons } from "@expo/vector-icons";
import { AppLoading, Asset, Font } from "expo";
import { Provider } from "mobx-react";
import { applySnapshot } from "mobx-state-tree";
import React from "react";
import {
  AsyncStorage,
  Platform,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import { createAppNavigator } from "./navigation/AppNavigator";
import NavigationService from "./navigation/NavigationService";
import { RootStore } from "./stores/RootStore";

const appStatePersistenceKey = "appStatePersistenceKey";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  constructor(props) {
    super(props);
    this.rootStore = RootStore.create({});
    NavigationService.setNavigationStore(this.rootStore.navigationStore);
  }

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
      const AppNavigator = createAppNavigator(this.rootStore);
      return (
        <Provider rootStore={this.rootStore}>
          <View style={styles.container}>
            {Platform.OS === "ios" && <StatusBar barStyle="default" />}
            <AppNavigator
              _loadPersistedState={this._loadPersistedState}
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
        require("./assets/images/robot-dev.png"),
        require("./assets/images/robot-prod.png")
      ]),
      Font.loadAsync({
        ...Ionicons.font,

        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
      }),
      this._loadPersistedState()
    ]);
  };

  _loadPersistedState = async () => {
    const retrievedState = await AsyncStorage.getItem(appStatePersistenceKey);

    if (retrievedState) {
      const rootStoreJson = JSON.parse(retrievedState);
      if (RootStore.is(rootStoreJson)) {
        applySnapshot(this.rootStore, rootStoreJson);
      }
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
