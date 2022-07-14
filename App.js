import React from "react";
import { StyleSheet } from "react-native";
import Home from "./screens/Home";
import * as Font from "expo-font";

const getFonts = () => {
  return Font.loadAsync({ menlo: require("./assets/fonts/Monaco.ttf") });
};

export default function App() {
  return <Home />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
