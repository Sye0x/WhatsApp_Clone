import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Inp = () => {
  const [inputHeight, setInputHeight] = useState(50);

  const handleContentSizeChange = (event: any) => {
    setInputHeight(event.nativeEvent.contentSize.height + 20);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.inputarea, { height: inputHeight }]}>
        <MaterialIcons name="emoji-emotions" size={24} color="grey" />
        <TextInput
          placeholder="Message"
          style={styles.inputbox}
          multiline
          onContentSizeChange={handleContentSizeChange}
        />
        <Ionicons
          name="attach"
          size={24}
          color="grey"
          style={{ paddingHorizontal: 5 }}
        />
        <Feather name="camera" size={24} color="grey" />
      </View>
      <View style={styles.submitContainer}>
        <MaterialIcons
          name="mic"
          size={24}
          color="white"
          style={styles.submit}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingTop: 5,
    marginRight: 5,
    paddingBottom: 10,
  },
  inputarea: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 12,
    marginRight: 5,
  },
  inputbox: {
    flex: 1,
    fontSize: 20,
    paddingHorizontal: 10,
  },
  submitContainer: {
    justifyContent: "center",
  },
  submit: {
    backgroundColor: "#25D366",
    padding: 10,
    borderRadius: 30,
  },
});

export default Inp;
