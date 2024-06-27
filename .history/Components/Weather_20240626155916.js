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
        style={styles.icon}
      />

      <Text style={styles.temp}>{temp}°C</Text>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{weatherOptions[condition].title}</Text>
      <Text style={styles.text}>{weatherOptions[condition].description}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: "white",
    marginBottom: 10,
  },
  temp: {
    fontSize: 30,
    marginBottom: 10,
    color: "white",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
