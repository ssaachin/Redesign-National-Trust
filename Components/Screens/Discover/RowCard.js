import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ImageBackground
} from "react-native";
import { Ionicons } from '@expo/vector-icons';



const RowCard = ({
  onPress,
  title,
  imageUrl,
  subText
}) => {
  return (
    
      <TouchableHighlight
        style={styles.rowCard}
        activeOpacity={0.7}
        underlayColor={"white"}
        onPress={onPress}
      >
        
        <ImageBackground source={{uri:imageUrl}} style={{borderRadius: 20, overflow: "hidden" }} > 
          <View style={styles.titleRow}> 
            <Text style={styles.titleText}>{title}</Text>
            <Text style={{color: "#fefae0", textTransform: "uppercase", letterSpacing: -1}}>
              <Ionicons name="ios-location-outline" size={15} color="white" />{subText}
            </Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  rowCard: {
    margin: 10,
    borderRadius: 50,
  },
  titleRow: {
    flexDirection: "column",
    padding: 20,
    justifyContent: "space-between"

  },
  titleText: {
    color: "#fefae0",
    fontSize: 20,
    fontWeight: "900",
    textTransform: 'uppercase',
    letterSpacing: -1,
    marginTop: "20%",
    textDecorationLine: "underline",
    textDecorationColor: "#bc6c25",
    fontStyle: "italic"
  },
});

export default RowCard;