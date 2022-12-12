import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "./Discover/ListOfLocation";
import DetailScreen from "./Discover/DetailScreen";


const Root = createStackNavigator();

export default function Dicover() {
  return (
    
      <Root.Navigator>
        <Root.Screen 
          name="Search"
          component={Search}
          options={{
            headerShown: false
          }}



        />
        <Root.Screen
          name="Details"
          component={DetailScreen}
          options={({ route }) => ({
            title: route.params.name,
          })}
        />
      </Root.Navigator>
  );
}
