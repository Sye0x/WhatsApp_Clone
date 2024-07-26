import { Text, View, Image, StyleSheet } from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ChatItem = ({ chatdata }: any) => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 80,
    margin: 5,
  },
  image: {
    height: 65,
    width: 65,
    borderRadius: 35,
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
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  message: {
    fontSize: 16,
    color: "gray",
    paddingLeft: 5,
  },
  time: {
    alignSelf: "flex-start",
    marginTop: 5,
    fontSize: 14,
    color: "gray",
  },
});

export default ChatItem;
