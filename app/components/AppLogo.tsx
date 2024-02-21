import { Image } from "react-native";
import React from "react";

type Dimension = {
  width: number;
  height?: number;
};

export default function AppLogo({ width, height }: Dimension) {
  return (
    <Image
      source={require("../assets/logo-medecine.png")}
      style={{
        width: width,
        height: height ?? width,
      }}
    />
  );
}
