import React from "react";
import MapView, { Marker }  from 'react-native-maps';
import { StyleSheet, View, Text, ImageBackground, ScrollView } from "react-native";
import { Ionicons, Entypo } from '@expo/vector-icons';
import { Button } from '@rneui/themed';
import { Divider } from "@react-native-material/core";


export default function DetailScreen({route}) {
  let item = route.params.data;
  const {
    text,
    subText,
    imageUrl,
    description,
    time,
    location,
    address
  } = item;

  return (
    
    <View style={styles.screen}>
      <ImageBackground source={{uri:imageUrl}} style={styles.imageurl} ></ImageBackground>
      <Text style={styles.title} >{text}</Text>
      <View>
        {/* ticket button */}
        <Button
                title="Tickets"
                buttonStyle={{
                  borderRadius: 100,
                  backgroundColor: "#283618"
                }}
                type="outline"
                raised
                titleStyle={{ color: "#fefae0"}}
                containerStyle={{
                  width: 90,
                  marginHorizontal: 280,
                  marginl: 2,
                  borderRadius: 100
                }}
            />
        <Text style={styles.subtitle}>
          <Ionicons name="ios-location-outline" size={15} color="#283618" />{subText}
        </Text>
      </View>

      <Divider style={{width: "95%", marginHorizontal: 10, backgroundColor: "black"}}/>
      
      <ScrollView>
        <View>
          <Text style={styles.desc} >{description}</Text>
        </View>

        <Divider style={{width: "95%", marginHorizontal: 10, backgroundColor: "black"}}/>

        <View style={{marginVertical: 10, marginHorizontal: 10}}>
          <Text ><Entypo name="clock" size={20} color="black" />{time} </Text>
        </View>

        <Divider style={{width: "95%", marginHorizontal: 10, backgroundColor: "black"}}/>

                {/* Map */}
                
        <MapView style={{width: "60%", height:"150%", left: 2, borderRadius: 20, margin: 10}}>
          <Marker
          coordinate={location}
          />
        </MapView >

        <View style={{ width: "30%", marginHorizontal: "67%", bottom: 300}}>
          <Text style={{ fontSize: 15, fontWeight: "bold", textTransform: "uppercase", letterSpacing: -1, fontStyle: "italic"}}>
          Address</Text>
          <Text>{address}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fefae0",
    height: "100%"
  },
  imageurl:{
    width: "100%",
     height: "60%" 
  },
  title:{
    color: "#283618",
    fontSize: 25,
    letterSpacing: -1,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontWeight: "900",  
    fontStyle: "italic",
    marginTop: -170,
    textDecorationLine: "underline",
    textDecorationColor: "#bc6c25",
    padding: 10
  },
  subtitle:{
    color: "#283618",
    letterSpacing: -1,
    textTransform: "uppercase",
    marginTop: -15,
    fontStyle: "italic",
    width: "70%",
    padding: 10 
  },
  mapStyle: {
    width: "100%",
    height: "70%",
  },
  activity: {
    borderWidth: 2,
    borderColor: "black",
    width: 100,
    bottom: 100,
    marginBottom: 20
  },
  desc: {
    width: "80%",
    letterSpacing: -1,
    borderRadius: 20,
    margin: 15
  },
  weather: {
    borderColor: "black",
    borderWidth: 1,
    width: "28%",
    height: "30%",
    borderRadius: 20,
    color: "#fefae0",
    backgroundColor: "#283618",
    paddingLeft: 27,
    bottom: 170,
    left: 275
  }
});