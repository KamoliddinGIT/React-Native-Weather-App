import React, { useState } from "react";
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#757f9a", "#d7dde8"],
    title: "The Clouds!",
    description: "Go for a walk!",
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
    title: "There's a haze outside!",
    description: "It's difficult to see!",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#606c88", "#3f4c6b"],
    title: "You cannot see anything outside!",
    description: "Could you see what's on the street!",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#56ccf2", "#2f80ed"],
    title: "Amazing Weather",
    description: "Go for a walk!",
  },
};

export default function Weather({ temp, name, condition, setWeather }) {
  const [query, setQuery] = useState("");

  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <MaterialCommunityIcons
        name={weatherOptions[condition].iconName}
        size={70}
        style={styles.icon}
      />
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.flex}>
        <Text style={styles.temp}>{temp} ° </Text>
        <Text style={styles.temp}>| {name}</Text>
      </View>
      <View style={styles.seachContainer}>
        <TextInput
          placeholder="search a city!"
          style={styles.input}
          value={query}
          onChangeText={(text) => setQuery(text)}
        />
        <Button
          title="search"
          style={styles.btn}
          onPress={() => setWeather(query)}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.text}>{weatherOptions[condition].description}</Text>
      </View>
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
    fontWeight: "700",
  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "300",
  },
  text: {
    color: "white",
    fontSize: 22,
    margin: 2,
    fontWeight: "700",
  },
  flex: {
    flexDirection: "row",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
  },
  seachContainer: {
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    width: "90%",
    backgroundColor: "#e8e8e8",
    marginTop: 10,
    padding: 10,
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  btn: {
    width: "30%",
    height: 30,
    padding: 10,
    backgroundColor: "blue",
  },
});
