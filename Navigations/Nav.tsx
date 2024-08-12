// Navigation.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatScreen from "@/screens/chatscreen";
import ChatView from "@/screens/chatview";
import { NavigationContainer } from "@react-navigation/native";
import MainTabNav from "./MainTabNav";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Chat" component={ChatView} />
      <Stack.Screen
        name="Home"
        component={MainTabNav}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
