import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Permissions, Notifications } from "expo";
import NotificationPopup from "./NotificationPopup";

async function register() {
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

  if (status !== "granted") {
    alert("Please, enable notification permissions in settings.");
    return;
  }

  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();
  console.log(token);
}

export default class App extends React.Component {
  state = {
    notification: null
  };

  componentWillMount() {
    register();

    this.notificationListener = Notifications.addListener(
      this.listenForNotification
    );
  }

  componentWillUnmount() {
    this.notificationListener &&
      Notifications.removeListener(this.notificationListener);
  }

  listenForNotification = ({ origin, data: { data } }) => {
    this.setState({
      notification: {
        origin,
        data
      }
    });
  };

  render() {
    const { notification } = this.state;

    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Hello World!</Text>
        <Text>Im working better now</Text>

        {notification && (
          <NotificationPopup
            origin={notification.origin}
            data={notification.data}
          />
        )}
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
