import React from "react";
import { View } from "react-native";

const Pulse = require('react-native-pulse').default;

 export default function Ripple() {
  {
    return (
      <View >
        <Pulse color='green' numPulses={1} height={5} width={5} speed={30} duration={1} />
      </View>
    );
  }  
}