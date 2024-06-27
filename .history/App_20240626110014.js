import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Loader from "./Components/Loader";
import { useEffect, useState } from "react";
import Weather from "./Components/Weather";
import * as Location from "expo-location";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(null);

  const getLocation = async () => {
    try {
      const response = await Location.requestForegroundPermissionsAsync();
      console.log(res);
    } catch (error) {}
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return isLoading ? <Loader /> : <Weather />;
}

const styles = StyleSheet.create({});
