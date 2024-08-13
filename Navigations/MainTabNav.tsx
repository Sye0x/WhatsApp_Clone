import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NotImplemented from "@/screens/NotImplemented";
import ChatScreen from "@/screens/chatscreen";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import CallHistory from "@/screens/CallHistory";
import UpdateScreen from "@/screens/UpdateScreen";

const Tab = createBottomTabNavigator();

const MainTabNav = () => {
  return (
    <Tab.Navigator initialRouteName="WhatsApp">
      <Tab.Screen
        name="WhatsApp"
        component={ChatScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <MaterialIcons name="chat" size={24} color="green" />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Updates"
        component={UpdateScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <MaterialCommunityIcons
                name="shape-circle-plus"
                size={24}
                color="black"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Communities"
        component={NotImplemented}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <MaterialIcons name="groups-3" size={24} color="black" />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Calls"
        component={CallHistory}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Ionicons name="call-outline" size={24} color="black" />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNav;
