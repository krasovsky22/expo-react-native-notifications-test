import React, { Component } from "react";
import { Text, View } from "react-native";
import { Link, NativeRouter, Route } from "react-router-native";

import { ThemeProvider, Header } from "react-native-elements";

const theme = {};

import Home from "./src/view/Home";
import About from "./src/view/About";

class App extends Component {
  render() {
    return (
      <NativeRouter>
        <ThemeProvider theme={theme}>
          <View>
            <Header
              placement="left"
              leftComponent={{ icon: "menu", color: "#fff" }}
              centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
              rightComponent={{ icon: "home", color: "#fff" }}
            />
            <Link to="/" underlayColor="#f0f4f7">
              <Text>Home</Text>
            </Link>
            <Link to="/about" underlayColor="#f0f4f7">
              <Text>About asdasd</Text>
            </Link>
            <Link to="/topics" underlayColor="#f0f4f7">
              <Text>Topics</Text>
            </Link>
          </View>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </ThemeProvider>
      </NativeRouter>
    );
  }
}

export default App;
