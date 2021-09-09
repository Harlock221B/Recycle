import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Search from "../components/Search";
import Menu from "../components/Menu";
import RouteContainer from "../components/RouteContainer";

function Recompensas(props) {
  return (
    <View style={styles.container}>
      <Search style={styles.search}></Search>
      <Menu style={styles.menu}></Menu>
      <View style={styles.main}>
        <View style={styles.pontosStack}>
          <Text style={styles.pontos}>Pontos ???</Text>
          <Text style={styles.loremIpsum}></Text>
        </View>
        <Text style={styles.ultimasColetas}>Ultimas Coletas</Text>
        <RouteContainer style={styles.routeContainer}></RouteContainer>
        <RouteContainer style={styles.routeContainer1}></RouteContainer>
        <RouteContainer style={styles.routeContainer2}></RouteContainer>
        <RouteContainer style={styles.routeContainer3}></RouteContainer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  search: {
    width: 297,
    height: 41,
    marginTop: 53,
    marginLeft: 63
  },
  menu: {
    width: 375,
    height: 88,
    marginTop: 630
  },
  main: {
    width: 375,
    height: 630,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: -718
  },
  pontos: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 48
  },
  loremIpsum: {
    top: 29,
    left: 12,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  pontosStack: {
    width: 231,
    height: 58,
    marginTop: 208,
    marginLeft: 13
  },
  ultimasColetas: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 154,
    marginLeft: 13
  },
  routeContainer: {
    height: 30,
    width: 375,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 15,
    alignSelf: "center"
  },
  routeContainer1: {
    height: 30,
    width: 375,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 7
  },
  routeContainer2: {
    height: 30,
    width: 375,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 4
  },
  routeContainer3: {
    height: 30,
    width: 375,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 6
  }
});

export default Recompensas;
