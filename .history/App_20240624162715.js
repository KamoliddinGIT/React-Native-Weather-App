import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}>
        <Text style={styles.text1}>UZBEKISTAN</Text>
      </View>
      <View style={styles.box4}></View>
      <View style={styles.box5}></View>

    </View>
  );
}

const styles = StyleSheet.create({});
