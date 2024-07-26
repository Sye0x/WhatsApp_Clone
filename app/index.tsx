import { Text, View } from "react-native";
import ChatItem from "@/components/chatlist";

const chat = {
  id: "1",
  user: {
    name: "Sara",
    image: "./assets/images/Flower.jpg",
  },
  lastmessage: {
    message: "Hello",
    time: "1:50 am",
  },
};

export default function Index() {
  return (
    <View>
      <ChatItem chatdata={chat} />
    </View>
  );
}
