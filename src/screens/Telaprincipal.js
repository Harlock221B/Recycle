import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Svg, { Ellipse } from "react-native-svg";
import Search from "../components/Search";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import FeatherIcon from "react-native-vector-icons/Feather";

function Telaprincipal(props) {
  return (
    <View style={styles.container}>
      <View style={styles.sejaBemVindoRow}>
        <Text style={styles.sejaBemVindo}>Seja Bem Vindo!</Text>
        <MaterialCommunityIconsIcon
          name="recycle"
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
      </View>
      <Svg viewBox="0 0 69.23 69.23" style={styles.ellipse}>
        <Ellipse
          stroke="rgba(230, 230, 230,1)"
          strokeWidth={0}
          fill="rgba(139,87,42,1)"
          cx={35}
          cy={35}
          rx={35}
          ry={35}
        ></Ellipse>
      </Svg>
      <View style={styles.ellipse2Row}>
        <Svg viewBox="0 0 20.07 20.07" style={styles.ellipse2}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(155,155,155,1)"
            cx={10}
            cy={10}
            rx={10}
            ry={10}
          ></Ellipse>
        </Svg>
        <Svg viewBox="0 0 10.37 10.37" style={styles.ellipse6}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(248,231,28,1)"
            cx={5}
            cy={5}
            rx={5}
            ry={5}
          ></Ellipse>
        </Svg>
      </View>
      <View style={styles.ellipse5Row}>
        <Svg viewBox="0 0 28.59 28.59" style={styles.ellipse5}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(65,117,5,1)"
            cx={14}
            cy={14}
            rx={14}
            ry={14}
          ></Ellipse>
        </Svg>
        <Svg viewBox="0 0 35.12 35.12" style={styles.ellipse3}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(208,2,27,1)"
            cx={18}
            cy={18}
            rx={18}
            ry={18}
          ></Ellipse>
        </Svg>
      </View>
      <Svg viewBox="0 0 12.04 12.04" style={styles.ellipse4}>
        <Ellipse
          stroke="rgba(230, 230, 230,1)"
          strokeWidth={0}
          fill="rgba(74,144,226,1)"
          cx={6}
          cy={6}
          rx={6}
          ry={6}
        ></Ellipse>
      </Svg>
      <View style={styles.searchStack}>
        <Search style={styles.search}></Search>
        <EvilIconsIcon name="search" style={styles.icon}></EvilIconsIcon>
      </View>
      <View style={styles.loremIpsumRow}>
        <Text style={styles.loremIpsum}></Text>
        <View style={styles.rect2}>
          <Text style={styles.listaDeObjetos}>Lista de Objetos</Text>
        </View>
      </View>
      <View style={styles.loremIpsum2Row}>
        <Text style={styles.loremIpsum2}>Veja os postos de coleta perto!</Text>
        <View style={styles.ellipse7Stack}>
          <Svg viewBox="0 0 60.43 60.43" style={styles.ellipse7}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(59,216,144,1)"
              cx={30}
              cy={30}
              rx={30}
              ry={30}
            ></Ellipse>
          </Svg>
          <FeatherIcon name="map-pin" style={styles.icon2}></FeatherIcon>
        </View>
      </View>
      <Text style={styles.loremIpsum3}>Veja as ultimas noticias!</Text>
      <View style={styles.rect3}></View>
      <View style={styles.rect4}></View>
      <View style={styles.rect5}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  sejaBemVindo: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 32,
    marginTop: 2
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 322
  },
  sejaBemVindoRow: {
    height: 43,
    flexDirection: "row",
    marginTop: 90,
    marginLeft: 9,
    marginRight: -228
  },
  ellipse: {
    width: 69,
    height: 69,
    marginTop: 491,
    marginLeft: -5
  },
  ellipse2: {
    width: 20,
    height: 20
  },
  ellipse6: {
    width: 10,
    height: 10,
    marginLeft: 14
  },
  ellipse2Row: {
    height: 20,
    flexDirection: "row",
    marginTop: -136,
    marginLeft: 36,
    marginRight: 295
  },
  ellipse5: {
    width: 29,
    height: 29
  },
  ellipse3: {
    width: 35,
    height: 35,
    marginLeft: 16
  },
  ellipse5Row: {
    height: 35,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: -5,
    marginRight: 300
  },
  ellipse4: {
    width: 12,
    height: 12,
    marginTop: -86,
    marginLeft: 58
  },
  search: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 46,
    width: 277
  },
  icon: {
    top: 0,
    left: 9,
    position: "absolute",
    color: "rgba(59,216,144,1)",
    fontSize: 40
  },
  searchStack: {
    width: 277,
    height: 46,
    marginTop: -391,
    marginLeft: 43
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 48
  },
  rect2: {
    width: 299,
    height: 56,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 17,
    marginLeft: 17
  },
  listaDeObjetos: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 21,
    marginTop: 16,
    marginLeft: 74
  },
  loremIpsumRow: {
    height: 56,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 24,
    marginRight: 35
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 28
  },
  ellipse7: {
    top: 0,
    left: 0,
    width: 60,
    height: 60,
    position: "absolute"
  },
  icon2: {
    top: 14,
    left: 15,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 29
  },
  ellipse7Stack: {
    width: 60,
    height: 60,
    marginLeft: 9
  },
  loremIpsum2Row: {
    height: 60,
    flexDirection: "row",
    marginTop: 415,
    marginLeft: 92,
    marginRight: 21
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 19,
    marginTop: -442,
    marginLeft: 41
  },
  rect3: {
    width: 299,
    height: 43,
    backgroundColor: "#E6E6E6",
    borderRadius: 17,
    marginTop: 17,
    marginLeft: 38
  },
  rect4: {
    width: 299,
    height: 43,
    backgroundColor: "#E6E6E6",
    borderRadius: 17,
    marginTop: 9,
    marginLeft: 38
  },
  rect5: {
    width: 299,
    height: 43,
    backgroundColor: "#E6E6E6",
    borderRadius: 17,
    marginTop: 8,
    marginLeft: 38
  }
});

export default Telaprincipal;
