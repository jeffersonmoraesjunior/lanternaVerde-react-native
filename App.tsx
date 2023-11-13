import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import symbolOn from "./assets/images/symbol-on.png";
import symbolOff from "./assets/images/symbol-off.png";

export default function App() {
  const [isActive, setIsActive] = useState(true);

  function handleSymbol() {
    setIsActive(!isActive);
  }

  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={handleSymbol}>
        <Image source={isActive ? symbolOn : symbolOff} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  containerOff: {
    flex: 1,
    backgroundColor: "#e4e4e4",
    alignItems: "center",
    justifyContent: "center",
  },
});
