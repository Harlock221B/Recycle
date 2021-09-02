import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function Search(props) {
  return <View style={[styles.container, props.style]}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "rgba(199,195,195,1)"
  }
});

export default Search;
