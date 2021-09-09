import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function ContainerDeNoticias(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.noticia1}>Noticia 1</Text>
      <Text style={styles.descriccao0}>Descricção 0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6",
    borderRadius: 14
  },
  noticia1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 18,
    marginLeft: 12
  },
  descriccao0: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 15,
    marginLeft: 12
  }
});

export default ContainerDeNoticias;
