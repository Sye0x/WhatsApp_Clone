import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
const CallHistoryHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Calls</Text>
      <View style={styles.icons}>
        <Feather
          name="camera"
          size={20}
          color="black"
          style={{ paddingRight: 30 }}
        />
        <Fontisto
          name="search"
          size={20}
          color="black"
          style={{ paddingRight: 30 }}
        />
        <SimpleLineIcons name="options-vertical" size={20} color="black" />
      </View>
    </SafeAreaView>
  );
};

export default CallHistoryHeader;

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "100%",
    marginVertical: 12,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 21,
  },
  icons: {
    flexDirection: "row",
    paddingTop: 8,
  },
});
