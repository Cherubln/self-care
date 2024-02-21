import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function GetStartedScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/image.png")} />
      <Text style={styles.welcome}>Manage your health and happy future.</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  welcome: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    margin: 10,
    width: "60%",
  },
  text: {
    color: "#F4F6F5",
    fontSize: 18,
    fontWeight: "600",
  },
  btn: {
    paddingVertical: 15,
    paddingHorizontal: 60,
    margin: 10,
    borderRadius: 18,
    backgroundColor: "#66CA98",
    alignItems: "center",
    justifyContent: "center",
  },
});
