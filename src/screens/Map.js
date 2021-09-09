import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Menu from "../components/Menu";
import Search from "../components/Search";
import MapView from "react-native-maps";

function Map(props) {
  return (
    <View style={styles.container}>
      <Menu style={styles.menu}></Menu>
      <Search style={styles.search}></Search>
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        customMapStyle={[]}
        style={styles.mapView}
      ></MapView>
      <Text style={styles.loremIpsum}>
        Imformações{"\n"}Postos de Reciclagem perto:{"\n"}
        {"\n"}Posto de *****{"\n"}Posto de *****{"\n"}Posto de *****{"\n"}Posto
        de *****
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  menu: {
    width: 375,
    height: 88,
    marginTop: 724
  },
  search: {
    width: 297,
    height: 41,
    marginTop: -753,
    marginLeft: 61
  },
  mapView: {
    height: 403,
    width: 375,
    marginTop: 30
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 155,
    width: 344,
    marginTop: 25,
    marginLeft: 14
  }
});

export default Map;
