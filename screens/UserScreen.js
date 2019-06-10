import React from "react";
import { Image, Text, View } from "react-native";
import { inject, observer } from "mobx-react";
import NavigationService from "../navigation/NavigationService";
import { ScreenWrapper } from "./Components";

class _UserScreen extends React.Component {
  static navigationOptions = ({ screenProps, navigation }) => {
    const { user } = screenProps.navigationStore.getParamsForCurrentRoute(
      navigation
    );
    return {
      title: user.login
    };
  };

  render() {
    const { navigation, navigationStore } = this.props;
    const { user } = navigationStore.getParamsForCurrentRoute(navigation);

    return (
      <ScreenWrapper>
        <Image
          css={`
            height: 50px;
            width: 50px;
          `}
          source={{ uri: user.avatar_url }}
        />
        <Text>username: {user.login}</Text>
      </ScreenWrapper>
    );
  }
}

export const UserScreen = inject(({ rootStore: { navigationStore } }) => ({
  navigationStore
}))(observer(_UserScreen));
