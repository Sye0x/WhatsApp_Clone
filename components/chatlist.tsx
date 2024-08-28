import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const ChatItem = ({ chatdata }: any) => {
  const navigation = useNavigation<any>();
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate("Chat", {
          id: chatdata.id,
          name: chatdata.user.name,
        })
      }
    >
      <View style={styles.datacontainer}>
        <Image style={styles.image} source={{ uri: chatdata.user.image }} />
        <View style={styles.textstyle}>
          <View style={styles.textContainer}>
            <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
              {chatdata.user.name}
            </Text>
            <Text style={styles.message} numberOfLines={1} ellipsizeMode="tail">
              {chatdata.lastMessage.text}
            </Text>
          </View>
          <Text style={styles.time}>
            {dayjs(chatdata.lastMessage.createdAt).fromNow(true)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 80,
    margin: 5,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  datacontainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  textstyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  message: {
    fontSize: 12,
    color: "gray",
  },
  time: {
    alignSelf: "flex-start",
    marginTop: 5,
    fontSize: 14,
    color: "gray",
  },
});

export default ChatItem;
