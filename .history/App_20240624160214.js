import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}>
        <Text style={styles.text}>UZBEKISTAN</Text>
      </View>
      <View style={styles.box4}></View>
      <View style={styles.box5}></View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0099B5",
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
    justifyContent: "center",
    alignItems: "center",
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
