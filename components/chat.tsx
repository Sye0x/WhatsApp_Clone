import { Text, View, Image, StyleSheet } from "react-native";

const ChatItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.datacontainer}>
        <Image
          style={styles.image}
          source={{ uri: "./assets/images/Flower.jpg" }}
        />
        <View style={styles.textstyle}>
          <View>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", paddingBottom: 12 }}
            >
              Sara
            </Text>
            <Text>Message</Text>
          </View>

          <Text>1:00</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: "8%",
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
  },
  textstyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 13,
    marginTop: 2,
  },
});

export default ChatItem;
