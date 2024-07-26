import React from "react";
import { View, Text, FlatList } from "react-native";
import ChatItem from "@/components/chatlist";
import chat from "../assets/chats.json";

const ChatScreen = () => {
  return (
    <FlatList
      data={chat}
      renderItem={({ item }) => <ChatItem chatdata={item} />}
    />
  );
};

export default ChatScreen;
