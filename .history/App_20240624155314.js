import { red } from "colorette";
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
    flex: 1,
    backgroundColor: blue,
  },
  box2: {
    flex: 1,
    backgroundColor: red,
  },
  box3: {
    flex: 1,
    backgroundColor: green,
  },
});
