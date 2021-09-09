import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function Splash(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.myRecycles}>MyRecycles</Text>
      <Icon name="recycle" style={styles.icon}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(249,249,249,1)"
  },
  myRecycles: {
    fontFamily: "roboto-700",
    color: "rgba(42,164,137,1)",
    fontSize: 26,
    marginTop: 440,
    marginLeft: 123
  },
  icon: {
    color: "rgba(42,164,137,1)",
    fontSize: 200,
    marginTop: -230,
    marginLeft: 88
  }
});

export default Splash;
