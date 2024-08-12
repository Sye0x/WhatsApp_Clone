import React from "react";
import { View, Text, FlatList, TextInput, StyleSheet } from "react-native";
import ChatItem from "@/components/chatlist";
import chat from "../assets/chats.json";
import ChatScreenHeader from "@/components/ChatScreenHeader";
const ChatScreen = () => {
  return (
    <View>
      <ChatScreenHeader />
      <TextInput placeholder="Ask Meta AI or Search" style={styles.inputbox} />
      <FlatList
        data={chat}
        renderItem={({ item }) => <ChatItem chatdata={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  inputbox: {
    backgroundColor: "#DDDDDD",
    width: "85%",
    height: 45,
    marginHorizontal: 30,
    marginVertical: 15,
    borderRadius: 50,
    paddingHorizontal: 15,
  },
});
