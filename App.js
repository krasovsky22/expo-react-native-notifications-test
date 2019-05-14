import React, { Component } from "react";
import { Text, View } from "react-native";
import { Link, NativeRouter, Route } from "react-router-native";

import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./src/view/Home";
import About from "./src/view/About";

class App extends Component {
  render() {
    return (
      <NativeRouter>
        <View>
          <View>
            <Link to="/" underlayColor="#f0f4f7">
              <Text>Home</Text>
            </Link>
            <Link to="/about" underlayColor="#f0f4f7">
              <Text>About</Text>
            </Link>
            <Link to="/topics" underlayColor="#f0f4f7">
              <Text>Topics</Text>
            </Link>
          </View>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </View>
      </NativeRouter>
    );
  }
}

export default App;
