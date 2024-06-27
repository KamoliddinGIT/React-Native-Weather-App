import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    backgroundColor: "blue",
    flex: 1,
  },
  box2: {
    backgroundColor: "red",
    flex: 1,
  },
  box3: {
    backgroundColor: "green",
    flex: 1,
  },
});
