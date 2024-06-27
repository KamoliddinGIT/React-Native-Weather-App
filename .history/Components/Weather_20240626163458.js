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
  Thunderstorm: {
    iconName: "weather-lighting",
    gradient: ["#141e30", "#243b55"],
    title: "Stay home",
    description: "Do you see what's on the street!",
  },
};

export default function Weather({ temp, name, condition }) {
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
      <Text style={styles.temp}>{temp} °C</Text>
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
    fontSize: 18,
    margin: 2,
  },
});
