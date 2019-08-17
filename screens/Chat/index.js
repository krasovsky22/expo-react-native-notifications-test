import { inject, observer } from "mobx-react";
import {
  Card,
  CardItem,
  Content,
  Container,
  Header,
  Body,
  Grid,
  Row,
  Col,
  View
} from "native-base";
import React from "react";
import { Text } from "react-native";

class _ChatScreen extends React.Component {
  static navigationOptions = {
    title: "Chat"
  };

  render() {
    return (
      <Container>
        <Grid>
          <Row style={{ backgroundColor: "#635DB7" }} size={90} />
          <Row style={{ backgroundColor: "#00CE9F" }} size={10} />
        </Grid>
      </Container>
    );
  }
}

export const ChatScreen = inject(
  ({ rootStore: { navigationStore, repoStore } }) => ({
    navigationStore,
    repoStore
  })
)(observer(_ChatScreen));
