import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import AppButton from "../components/AppButton";

export default function GetStartedScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/image.png")} />
      <Text style={styles.welcome}>Manage your health and happy future.</Text>
      <AppButton title="Get started" />
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
});
