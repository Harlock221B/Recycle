import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function SearchBar(props) {
  return <View style={[styles.container, props.style]}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 19
  }
});

export default SearchBar;
