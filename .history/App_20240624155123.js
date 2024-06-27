import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textSize}>Hello World!</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "crimson",
    alignItems: "center",
    justifyContent: "center",
  },
  textSize: {
    fontSize: 25,
    fontFamily: "monospace",
    color: "white",
  },
});
