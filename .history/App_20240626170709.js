import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";
import Loader from "./Components/Loader";
import { useEffect, useState } from "react";
import Weather from "./Components/Weather";
import * as Location from "expo-location";
import axios from "axios";

const api_key = "458b0e439f0e0c715ea871c1ef7edcc6";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(null);

  const getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=russia&appid=${api_key}&units=metric`
    );
    setLocation(data);
    setIsLoading(false);
  };

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        return;
      }

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("I cannot find your current location!");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <Weather
      temp={Math.round(location.main.temp)}
      name={location.name}
      condition={location.weather[0].main}
    />
  );
}

const styles = StyleSheet.create({});
