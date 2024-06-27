import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Clear: {
    icon: 
  }
}

export default function Weather({ temp, name, condition }) {
  console.log("temp", temp);
  console.log("name", name);
  console.log("condition", condition);
  return (
    <LinearGradient colors={["#56ccf2", "#2f80ed"]} style={styles.container}>
      <Text>{name}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
