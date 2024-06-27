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
    description: "Do you see what's on the street?",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#3a7bd5", "#3a6073"],
    title: "Take an umbrella!",
    description: "Perhaps, it'll be raining soon!",
  },
  Rain: {
    iconName: "cloud-rain",
    gradient: ["#000046", "1cb5e0"],
    title: "It's raining outside!",
    description: "So there will be a rainbow soon!",
  },
  Snow: {
    iconName: "snowflake",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "It's snowing outside!",
    description: "Dress warmly, make snowmen",
  },
  Dust: {
    iconName: "weather-windy-variant",
    gradient: ["#b79891", "#94716b"],
    title: "Dusty",
    description: "Better close the windows!",
  },
  Smoke: {
    iconName: "weather-windy",
    gradient: ["#56ccf2", "#2f80ed"],
    title: "Smoky :(",
    description: "Tip: don't go out!",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#3e5151", "#decba4"],
    title: "There's a snow outside!",
    description: "It's difficult to see!",
  },
  Mist: {
    iconName: "weather-flag",
    gradient: ["#b79891", "#94716b"],
    title: "Dusty",
    description: "Better close the windows!",
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
