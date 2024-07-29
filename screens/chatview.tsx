import { Text, ImageBackground, StyleSheet, FlatList } from "react-native";
import messages from "../assets/messages.json";
import Message from "@/components/message";
// Import the local image
const bg = require("../assets/images/BG.png");

const ChatView = () => {
  return (
    <ImageBackground source={bg} resizeMode="cover" style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message msg={item} />}
        inverted
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  text: {
    color: "black",
  },
});

export default ChatView;
