import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";

function Menu(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.newsRow}>
        <FontAwesomeIcon
          name="newspaper-o"
          style={styles.news}
        ></FontAwesomeIcon>
        <FeatherIcon name="map" style={styles.map}></FeatherIcon>
        <FontAwesomeIcon name="trophy" style={styles.routes}></FontAwesomeIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(42,164,137,1)",
    flexDirection: "row"
  },
  news: {
    color: "rgba(252,252,252,1)",
    fontSize: 30
  },
  map: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginLeft: 60
  },
  routes: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginLeft: 58
  },
  newsRow: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 86,
    marginLeft: 78,
    marginTop: 14
  }
});

export default Menu;
