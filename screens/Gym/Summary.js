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

import Calendar from "@components/Calendar";

class _GymSummaryScreen extends React.Component {
  static navigationOptions = {
    title: "Workout Summary"
  };

  render() {
    return (
      <Container>
        <Grid>
          <Row size={15} style={{ backgroundColor: "white" }}>
            <Calendar />
          </Row>
          <Row size={85} style={{ backgroundColor: "yellow" }} />
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
