import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppLogo from "../components/AppLogo";

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
        <AppLogo width={90} />
      </View>
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontWeight: "300",
  },
});
