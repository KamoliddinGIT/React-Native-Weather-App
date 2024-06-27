import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Loader from "./Components/Loader";

export default function App() {
  return (
    <>
      {" "}
      <Loader />
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({});
