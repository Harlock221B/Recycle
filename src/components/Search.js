import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import SearchBar from "./SearchBar";

function Search(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.iconRow}>
        <FontAwesomeIcon name="recycle" style={styles.icon}></FontAwesomeIcon>
        <View style={styles.searchBarStack}>
          <SearchBar style={styles.searchBar}></SearchBar>
          <FontAwesomeIcon name="search" style={styles.icon2}></FontAwesomeIcon>
          <TextInput
            placeholder="Procure o material"
            style={styles.placeholder}
          ></TextInput>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  icon: {
    color: "rgba(42,164,137,1)",
    fontSize: 38,
    marginTop: 3
  },
  searchBar: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 41,
    width: 297
  },
  icon2: {
    top: 8,
    left: 258,
    position: "absolute",
    color: "rgba(9,9,9,1)",
    fontSize: 25
  },
  placeholder: {
    top: 3,
    left: 22,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 38,
    width: 234
  },
  searchBarStack: {
    width: 297,
    height: 41,
    marginLeft: 12
  },
  iconRow: {
    height: 41,
    flexDirection: "row",
    flex: 1,
    marginLeft: -50
  }
});

export default Search;
