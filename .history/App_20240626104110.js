import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Loader from "./Components/Loader";
import { useEffect, useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(()=> {

  }, [])
  return (
    <View>
      <Loader />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
