import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box4}></View>
      <View style={styles.box5}></View>

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
  },
  box2: {
    backgroundColor: "red",
    flex: 0.2,
  },
  box3: {
    backgroundColor: "white",
    flex: 1,
  },
  box4: {
    backgroundColor: "red",
    flex: 0.2,
  },
  box5: {
    backgroundColor: "#1EB53A",
    flex: 1,
  },
});
