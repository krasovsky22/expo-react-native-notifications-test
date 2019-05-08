import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Permissions } from "expo";

async function register() {
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

  if (status !== "granted") {
    alert("Please, enable notification permissions in settings.");
    return;
  }
}

export default class App extends React.Component {
  componentWillMount() {
    register();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app! wwwwwwwwww</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
