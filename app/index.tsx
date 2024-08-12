import { Text, SafeAreaView, StyleSheet } from "react-native";
import Navigation from "@/Navigations/Nav";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
