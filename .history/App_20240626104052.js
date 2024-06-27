import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Loader from "./Components/Loader";
import { useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View>
      <Loader />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
