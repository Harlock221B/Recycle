import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Senha from "./src/components/Senha";
import BtnEntrar from "./src/components/BtnEntrar";
import Email from "./src/components/Email";

function Login(props) {
  return (
    <View style={styles.container}>
      <View style={styles.myRecycleStack}>
        <Text style={styles.myRecycle}>My Recycle</Text>
        <MaterialCommunityIconsIcon
          name="recycle"
          style={styles.icon}
        ></MaterialCommunityIconsIcon>
        <MaterialCommunityIconsIcon
          name="recycle"
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
      </View>
      <View style={styles.senhaStack}>
        <Senha style={styles.senha}></Senha>
        <Text style={styles.txt_senha}>Senha</Text>
      </View>
      <View style={styles.btnEntrarStack}>
        <BtnEntrar style={styles.btnEntrar}></BtnEntrar>
        <Text style={styles.entrar}>Entrar</Text>
      </View>
      <View style={styles.emailStack}>
        <Email style={styles.email}></Email>
        <Text style={styles.txt_email}>Email</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  myRecycle: {
    top: 200,
    left: 19,
    position: "absolute",
    fontFamily: "verdana-regular",
    color: "rgba(59,216,144,1)",
    fontSize: 29
  },
  icon: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(59,216,144,1)",
    fontSize: 200
  },
  icon1: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(59,216,144,1)",
    fontSize: 200
  },
  myRecycleStack: {
    width: 200,
    height: 235,
    marginTop: 125,
    marginLeft: 88
  },
  senha: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 46,
    width: 275
  },
  txt_senha: {
    top: 14,
    left: 11,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15
  },
  senhaStack: {
    width: 275,
    height: 46,
    marginTop: 103,
    marginLeft: 50
  },
  btnEntrar: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 40,
    width: 124,
    backgroundColor: "rgba(59,216,144,1)"
  },
  entrar: {
    top: 8,
    left: 38,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(247,247,247,1)",
    fontSize: 19
  },
  btnEntrarStack: {
    width: 124,
    height: 40,
    marginTop: 115,
    marginLeft: 125
  },
  email: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 46,
    width: 275
  },
  txt_email: {
    top: 14,
    left: 11,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15
  },
  emailStack: {
    width: 275,
    height: 46,
    marginTop: -258,
    marginLeft: 50
  }
});

export default Login;
