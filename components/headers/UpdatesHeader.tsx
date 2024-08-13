import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Feather } from "@expo/vector-icons";
const UpdatesHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Updates</Text>
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

export default UpdatesHeader;

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
