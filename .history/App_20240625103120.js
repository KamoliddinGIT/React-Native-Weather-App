import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Loader from "./Components/Loader";

export default function App() {
  return (
    <View>
      <Loader />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({});
