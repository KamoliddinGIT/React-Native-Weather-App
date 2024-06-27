import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Clouds: {
    iconName: "weather-sunny",
    gradient: ["#56ccf2", "#2f80ed"],
    title: "Amazing weather",
    description: "Go for a walk, stop staying at home!",
  },
};

export default function Weather({ temp, name, condition }) {
  console.log("temp", temp);
  console.log("name", name);
  console.log("condition", condition);
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <MaterialCommunityIcons
        name={weatherOptions[condition].iconName}
        size={50}
      />
      <br />
      <Text>{temp}°C</Text>
      <Text>{name}</Text>
      <Text>{weatherOptions[condition].title}</Text>
      <Text>{weatherOptions[condition].description}</Text>
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
