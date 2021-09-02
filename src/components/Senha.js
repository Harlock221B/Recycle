import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function Senha(props) {
  return <View style={[styles.container, props.style]}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "rgba(199,195,195,1)"
  }
});

export default Senha;
