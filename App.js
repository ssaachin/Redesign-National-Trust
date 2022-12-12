import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BTabs from "./Navigations/BTabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <BTabs />
    </NavigationContainer>
  )
}




