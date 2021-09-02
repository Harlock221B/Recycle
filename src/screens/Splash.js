import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Splash(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.myRecycle}>My Recycle</Text>
      <Icon name="recycle" style={styles.icon}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(59,216,144,1)"
  },
  myRecycle: {
    fontFamily: "verdana-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    marginTop: 406,
    marginLeft: 127
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 200,
    marginTop: -244,
    marginLeft: 88
  }
});

export default Splash;
