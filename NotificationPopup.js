import React, { memo } from "react";
import { Text, View } from "react-native";

const NotificationPopup = ({ origin, data }) => {
  console.log("asdasdasd", origin, data);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Origin: {origin}</Text>
      <Text>Data: {JSON.stringify(data)}</Text>
    </View>
  );
};

export default NotificationPopup;
