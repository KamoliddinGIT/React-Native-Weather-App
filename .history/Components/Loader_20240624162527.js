import React from "react";
import AnimatedLoader from "react-native-animated-loader";
import { StyleSheet, Text } from "react-native";

export default function Loader() {
  return (
    <AnimatedLoader
      visible={true}
      overlayColor="rgba(255,255,255,0.75)"
      source={require("../assets/loader.json")}
      animationStyle={styles.lottie}
      speed={1}
    >
      <Text></Text>
    </AnimatedLoader>
  );
}

const styles = StyleSheet.create({
  lottie: {
    width: 200,
    height: 200,
  },
});
