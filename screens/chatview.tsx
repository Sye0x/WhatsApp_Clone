import { Text, ImageBackground, StyleSheet, FlatList } from "react-native";
import messages from "../assets/messages.json";
import Message from "@/components/message";
import Inp from "@/components/inputbox";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

// Import the local image
const bg = require("../assets/images/BG.png");

const ChatView = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  useEffect(() => {
    if (route.params?.name) {
      navigation.setOptions({ title: route.params.name });
    }
  }, [navigation, route.params.name]);

  return (
    <ImageBackground source={bg} resizeMode="cover" style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message msg={item} />}
        inverted
        style={styles.messages}
      />
      <Inp />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },

  text: {
    color: "black",
  },
  messages: {},
});

export default ChatView;
