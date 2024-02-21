import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function AppButton({ title }: { title: string }) {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
