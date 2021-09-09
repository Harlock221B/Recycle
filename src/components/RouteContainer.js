import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function RouteContainer(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.ellipseRow}>
        <Svg viewBox="0 0 18.68 16.6" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(42,164,137,1)"
            cx={9}
            cy={8}
            rx={9}
            ry={8}
          ></Ellipse>
        </Svg>
        <Text style={styles.text}>+?? Rua taltaltal</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6",
    flexDirection: "row"
  },
  ellipse: {
    width: 19,
    height: 17
  },
  text: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 14,
    marginLeft: 14
  },
  ellipseRow: {
    height: 17,
    flexDirection: "row",
    flex: 1,
    marginRight: 228,
    marginLeft: 16,
    marginTop: 5
  }
});

export default RouteContainer;
