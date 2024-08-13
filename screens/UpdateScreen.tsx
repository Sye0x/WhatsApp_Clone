import { View, Text, StyleSheet } from "react-native";
import React from "react";
import UpdatesHeader from "@/components/headers/UpdatesHeader";
const UpdateScreen = () => {
  return (
    <View>
      <UpdatesHeader />
      <Text style={styles.staustext}>Status</Text>
    </View>
  );
};

export default UpdateScreen;

const styles = StyleSheet.create({
  staustext: {
    paddingTop: 10,
    fontSize: 21,
    marginLeft: 20,
    fontWeight: "bold",
  },
});
