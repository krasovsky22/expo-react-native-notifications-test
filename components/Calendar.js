import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback
} from "react-native";
import {
  Container,
  Grid,
  Row,
  Col,
  Header,
  Tabs,
  Tab,
  List,
  ListItem
} from "native-base";
import { FlatList, ScrollView } from "react-native-gesture-handler";

const week = [
  { key: "Mon" },
  { key: "Tue" },
  { key: "Wed" },
  { key: "Thu" },
  { key: "Fri" },
  { key: "Sat" },
  { key: "Sun" },
  { key: "Mon" },
  { key: "Tue" },
  { key: "Wed" },
  { key: "Thu" },
  { key: "Fri" },
  { key: "Sat" },
  { key: "Sun" }
];

class Calendar extends React.Component {
  state = {
    activeIndex: 0
  };

  _pressCalendarDay = index => {
    this.setState({ activeIndex: index });
  };

  _onScrollEvent = () => {
    console.log("asdasd");
  };

  _onEndEvent = () => {
    console.log("END");
  };
  renderItem = ({ item, index }) => {
    const { activeIndex } = this.state;
    const listItemStyle = [
      styles.listItem,
      index === activeIndex && styles.active
    ];

    return (
      <TouchableWithoutFeedback
        onPress={() => this._pressCalendarDay(index)}
        style={{ backgroundColor: "red" }}
      >
        <Col style={listItemStyle}>
          <Text style={styles.listItemText}>{item.key}</Text>
        </Col>
      </TouchableWithoutFeedback>
    );
  };

  render() {
    return (
      <Container>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={this._onScrollEvent}
        >
          <FlatList
            contentContainerStyle={styles.container}
            data={week}
            renderItem={this.renderItem}
            numColumns={week.length}
            onEndReached={this._onEndEvent}
            onEndReachedThreshold={0.5}
            initialNumToRender={6}
          />
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",
    width: "100%",
    flexDirection: "column"
  },
  listItem: {
    backgroundColor: "#4D243D",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    flex: 1,
    flexWrap: "nowrap",
    width: Dimensions.get("window").width / 6
  },
  listItemText: {
    fontSize: 20,
    color: "white"
  },
  active: {
    backgroundColor: "pink"
  }
});

export default Calendar;
