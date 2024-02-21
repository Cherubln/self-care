import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function WelcomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 60,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 25,
        }}
      >
        <Text style={{ fontWeight: "500", fontSize: 24 }}>Self Care</Text>
        <Image
          source={require("../assets/logo-medecine.png")}
          style={{ height: 90, width: 90 }}
        />
      </View>
      <Text style={{ fontWeight: "300" }}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
