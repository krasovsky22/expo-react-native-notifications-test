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
          <Text>CHAT HERE</Text>
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
