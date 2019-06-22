import React from "react";
import { inject, observer } from "mobx-react";

import {
  TextInput,
  Text,
  View,
  Button,
  FlatList,
  ActivityIndicator
} from "react-native";

class _GymSummaryScreen extends React.Component {
  static navigationOptions = {
    title: "Workout Summary"
  };

  render() {
    return <Text>Summary section is here.</Text>;
  }
}

export const GymSummaryScreen = inject(
  ({ rootStore: { navigationStore, repoStore } }) => ({
    navigationStore,
    repoStore
  })
)(observer(_GymSummaryScreen));
