import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
const ChatScreenHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>WhatsApp</Text>
      <View style={styles.icons}>
        <Feather
          name="camera"
          size={20}
          color="grey"
          style={{ paddingRight: 30 }}
        />
        <SimpleLineIcons name="options-vertical" size={20} color="black" />
      </View>
    </SafeAreaView>
  );
};

export default ChatScreenHeader;

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
    color: "#36D222",
    fontSize: 24,
    fontWeight: "bold",
  },
  icons: {
    flexDirection: "row",
    paddingTop: 8,
  },
});
