import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-navigation";

class Details extends PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired
  };

  static navigationOptions = {
    title: "Details Page"
  };

  render() {
    const { navigation } = this.props;

    const { workoutId } = navigation.state.params;

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
            <Text>Details Page ---- {workoutId}</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Details;
