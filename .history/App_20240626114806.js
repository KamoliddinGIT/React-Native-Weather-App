import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";
import Loader from "./Components/Loader";
import { useEffect, useState } from "react";
import Weather from "./Components/Weather";
import * as Location from "expo-location";
import axios from "axios";

// https://api.openweathermap.org/data/2.5/weather?lat=40.004039&lon=66.230055&appid=458b0e439f0e0c715ea871c1ef7edcc6

const api_key = "458b0e439f0e0c715ea871c1ef7edcc6";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      const {} = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}lon=${longitude}appid=458b0e439f0e0c715ea871c1ef7edcc6`
      );
    } catch (error) {
      Alert.alert("I cannot find current location!");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      getLocation();
    }, 2000);
  }, []);
  return isLoading ? <Loader /> : <Weather />;
}

const styles = StyleSheet.create({});
