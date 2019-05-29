import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-navigation";

export default class Explore extends React.Component {
  render() {
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
      </SafeAreaView>
    );
  }
}
