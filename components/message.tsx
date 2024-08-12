import { View, Text, StyleSheet } from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const Message = (props: any) => {
  const isMyMessage = () => {
    return props.msg.user.id === "u1";
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMyMessage() ? "#25D366" : "white",
          alignSelf: isMyMessage() ? "flex-end" : "flex-start",
        },
      ]}
    >
      <Text
        style={[
          styles.messageText,
          {
            color: isMyMessage() ? "white" : "black",
            textAlign: "justify",
            paddingRight: 30,
            fontSize: 15,
          },
        ]}
      >
        {props.msg.text}
      </Text>
      <Text style={[styles.time, { color: isMyMessage() ? "white" : "black" }]}>
        {dayjs(props.msg.createdAt).fromNow(true)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    padding: 10,
    maxWidth: "80%",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  messageText: {
    color: "black", // Default text color
  },
  time: {
    alignSelf: "flex-end",
    paddingLeft: 30,
  },
});

export default Message;
