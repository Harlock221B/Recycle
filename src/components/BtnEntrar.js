import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function BtnEntrar(props) {
  return <View style={[styles.container, props.style]}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(89,163,119,1)",
    borderRadius: 13
  }
});

export default BtnEntrar;
