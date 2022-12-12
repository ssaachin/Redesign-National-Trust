import React, { useState, useRef, useEffect } from "react"
import { StatusBar } from 'expo-status-bar';
import { View, Animated } from "react-native";
import RowCard from "./RowCard";
import LocationData from "../Data/LocationData";
import SearchBtn from "./SearchBtn";
import { Divider } from "@react-native-material/core";
import { FAB } from "@rneui/themed";



export default function Search({ navigation, route }) {
  let items = LocationData();
  const [value, onChangeText] = useState("");
  const [locationData, setLocationData] = useState(items);
  const [refreshing, setRefreshing] = useState(false);
  const [toggleSearchBar, setToggleSearchBar] = useState(false)

  // toggle search bar

  const searchBarAnim = useRef(new Animated.Value(-45)).current
  useEffect(() => {
    if (toggleSearchBar) {
      Animated.timing(searchBarAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start()
    } else {
      Animated.timing(searchBarAnim, {
        toValue: -50,
        duration: 300,
        useNativeDriver: true,
      }).start()
    }
  }, [toggleSearchBar])


  // search filter gets data local data

  const searchFilterFunction = (text) => {
    onChangeText(text);
    items = LocationData();
    let newData = items;

    if (text) {
      newData = items.filter((item) => {
        const itemData = item.text.toLowerCase();

        const textData = text.toLowerCase();

        return itemData.indexOf(textData) > -1;
      });
    }

    setLocationData(newData);
  };

  // Navigate to detail screen 

  const nextScreen = (item) => {
    let locationName = item.text;

    navigation.push("Details", {
      data: item,
      name: locationName,
    });
  };



  return (
  
    <View style={{backgroundColor: "#fefae0"}} >
      <StatusBar />
      <Animated.View style={{ transform: [{ translateY: searchBarAnim }] }}>
        {/* search  */}
        <SearchBtn
          placeholder="Search a Location"
          value={value}
          onChangeText={(text) => searchFilterFunction(text)}
        />
      </Animated.View>

      <Divider style={{backgroundColor: "#283618", width: "94%", marginLeft: 14}}/>

      <Animated.FlatList
        style={{margin: 10, borderColor: 20}}
        data={locationData}
        keyExtractor={(item) => item.id}
        // searchbar disapper
        onScrollBeginDrag={() => setToggleSearchBar(false)}
        style={{ transform: [{ translateY: searchBarAnim }] }}
        renderItem={({ item }) => (
          <RowCard
            articleNumber={item.id}
            title={item.text}
            imageUrl={item.imageUrl}
            subText={item.subText}
            activityTagsAsCsv={item.activityTagsAsCsv}
            description={item.description}
            time={item.time}
            location={item.location}
            address={item.address}

            onPress={() => nextScreen(item)}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setLocationData(LocationData());
        }}
      />
      {/* search bar button */}
      <View style={{bottom: 250, left: 140}}>
        <FAB
        onPress={() => setToggleSearchBar(!toggleSearchBar)}
        icon={{ name: 'search', color: 'white' }}
        style={{color: "red", margin: 10}}
      />
      </View>
    </View>
  );
}

