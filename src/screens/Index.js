import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import MaterialCard121 from "../components/MaterialCard121";
import Menu from "../components/Menu";
import Search from "../components/Search";

function Index(props) {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <MaterialCard121 style={styles.materialCard123}></MaterialCard121>
            <MaterialCard121 style={styles.materialCard122}></MaterialCard121>
          </ScrollView>
        </View>
      </View>
      <View style={styles.footer}>
        <Menu style={styles.menu}></Menu>
      </View>
      <Search style={styles.search}></Search>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 21
  },
  main: {
    width: 375,
    height: 626,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 98
  },
  scrollArea: {
    width: 375,
    height: 615,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 11
  },
  scrollArea_contentContainerStyle: {
    height: 615,
    width: 375
  },
  materialCard123: {
    height: 193,
    width: 349,
    borderRadius: 12,
    marginTop: 70,
    marginLeft: 13
  },
  materialCard122: {
    height: 193,
    width: 349,
    borderRadius: 12,
    marginTop: 22,
    marginLeft: 13
  },
  footer: {
    width: 375,
    height: 88
  },
  menu: {
    height: 88,
    width: 375
  },
  search: {
    width: 297,
    height: 41,
    marginTop: -755,
    marginLeft: 64
  }
});

export default Index;
