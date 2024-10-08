import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import CallHistoryHeader from "@/components/headers/CallHistoryHeader";
import Feather from "@expo/vector-icons/Feather";
import callsdata from "@/assets/Calls.json";
import Callitems from "@/components/calls";

const Calls = () => {
  return (
    <View style={styles.container}>
      <CallHistoryHeader />
      <View style={styles.calllink}>
        <Feather
          name="link-2"
          size={24}
          color="white"
          style={styles.linkbutton}
        />
        <View style={{ marginLeft: 14, marginTop: 5, marginBottom: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            Create call link
          </Text>
          <Text style={{ color: "#777777" }}>
            Share a link for your WhatsApp call
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginLeft: 22,
          marginVertical: 10,
        }}
      >
        Recent
      </Text>
      <FlatList
        data={callsdata}
        renderItem={({ item }) => <Callitems calldata={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }} // Adds some padding at the bottom
      />
    </View>
  );
};

export default Calls;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes up the full available space
  },
  linkbutton: {
    backgroundColor: "#11D366",
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 20,
    padding: 13,
  },
  calllink: {
    marginTop: 12,
    flexDirection: "row",
  },
});
