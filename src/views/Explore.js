import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-navigation";

import { Button } from "react-native-elements";

export default class Explore extends React.Component {
  static navigationOptions = {
    title: "Explore Main Page"
  };

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              height: 80,
              backgroundColor: "white",
              borderBottomWidth: 1,
              borderBottomColor: "#ddddd"
            }}
          >
            <Text>Explore</Text>
          </View>
        </View>
        <View style={{ flex: 2 }}>
          <Button
            title="To go Details"
            onPress={() =>
              navigation.push("Details", {
                workoutId: 100
              })
            }
          />
        </View>
      </SafeAreaView>
    );
  }
}
