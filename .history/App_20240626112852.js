import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";
import Loader from "./Components/Loader";
import { useEffect, useState } from "react";
import Weather from "./Components/Weather";
import * as Location from "expo-location";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState({
    latitude: null,
    longtitude: null,
  });

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
      setLocation({
        latitude: latitude,
        longtitude: longitude,
      });
    } catch (error) {
      Alert
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
