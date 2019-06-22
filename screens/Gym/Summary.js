import { inject, observer } from "mobx-react";
import {
  Card,
  CardItem,
  Content,
  Container,
  Header,
  Body,
  Grid,
  Row
} from "native-base";
import React from "react";
import { Text } from "react-native";

class _GymSummaryScreen extends React.Component {
  static navigationOptions = {
    title: "Workout Summary"
  };

  render() {
    return (
      <Container>
        <Grid>
          <Row size={20}>
            <Content>
              <Text>aaaaaaaaa</Text>
            </Content>
          </Row>
          <Row size={80}>
            <Text>Body</Text>
          </Row>
        </Grid>
      </Container>
    );
  }
}

export const GymSummaryScreen = inject(
  ({ rootStore: { navigationStore, repoStore } }) => ({
    navigationStore,
    repoStore
  })
)(observer(_GymSummaryScreen));
