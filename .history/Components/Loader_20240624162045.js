import React from "react";
import AnimatedLoader from "react-native-animated-loader";

export default function Loader() {
  return (
    <AnimatedLoader
      visible={visible}
      overlayColor="rgba(255,255,255,0.75)"
      source={require("../assets/loader.json")}
      animationStyle={styles.lottie}
      speed={1}
    >
      <Text>Loading</Text>
    </AnimatedLoader>
  );
}
