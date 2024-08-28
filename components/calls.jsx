import { Text, View, Image, StyleSheet, Pressable } from "react-native";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Ionicons from "@expo/vector-icons/Ionicons";

dayjs.extend(relativeTime);

const Callitems = ({ calldata }) => {
  return (
    <View style={styles.container}>
      <View style={styles.datacontainer}>
        <Image style={styles.image} source={{ uri: calldata.user.image }} />
        <View style={styles.textstyle}>
          <View style={styles.textContainer}>
            <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
              {calldata.user.name}
            </Text>
            <Text style={styles.time}>
              {dayjs(calldata.lastMessage.createdAt).fromNow(true)}
            </Text>
          </View>

          <Ionicons name="call-outline" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 60,
    margin: 5,
    paddingLeft: 15,
    flex: 1,
    marginVertical: 16,
  },
  image: {
    height: 50,
    width: 50,
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
    fontSize: 16,
  },
  message: {
    fontSize: 16,
    color: "gray",
    paddingLeft: 5,
  },
  time: {
    alignSelf: "flex-start",

    fontSize: 14,
    color: "gray",
  },
});

export default Callitems;
