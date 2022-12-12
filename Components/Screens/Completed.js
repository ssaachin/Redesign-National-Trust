import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard, ScrollView} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import LocationCard from "./Comp"
import { Feather } from '@expo/vector-icons';



export default function Completed() {
  const [location, setLocation] = useState();
  const [locationItems, setLocationItems] = useState([]);

  // Delete Function

  const deleteItem = (index) => {
    let itemsCopy = [...locationItems];
    itemsCopy.splice(index, 1),
    setLocationItems(itemsCopy);
  };

  // Swipeable button
  
  const leftSwipe = () =>{
    return(
      <TouchableOpacity style={styles.delete} onPress={deleteItem}>
        <View >
          <Text><Feather name="trash-2" size={24} color="black" /></Text>
        </View>
      </TouchableOpacity>
    );
  }

  // adds the input

  const AddLocation = () => {
    Keyboard.dismiss();
    setLocationItems([...locationItems, location])
    setLocation(null);
  }

  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
      >

      {/* Title */}
      
        <View style={styles.locationWrapper}>
          <Text style={styles.sectionTitle}>Location Visited</Text>
          
          
          <View style={styles.items}>
            
            {/* Where the location cards renders */}
              {
              locationItems.map((item, index) =>{
                return <Swipeable renderRightActions={leftSwipe}>
                  <LocationCard key={index} text={item} handleDelete={()=> deleteItem(index)} />
                  </Swipeable>
            })
            }
          </View>
        </View>
      </ScrollView>

      {/* input location */}
      <View style={styles.writeWrapper}>
      
        <TextInput style={styles.input} placeholder={'Write a Location'} placeholderTextColor="#fefae0" 
          value={location} onChangeText={text => setLocation(text)} />
        <TouchableOpacity onPress={() => AddLocation()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefae0",
  },
  locationWrapper: {
    paddingTop: 15,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: "30",
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: -2,
    color: "#283618",
    textDecorationColor: "#dda15e",
    textDecorationLine: "underline"
  },
  items: {
    marginTop: 20
  },
  writeWrapper: {
    position: "absolute",
    top: 65 ,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  input: {
    backgroundColor: "#283618",
    color: "#fefae0",
    width: "60%",
    padding: 18,
    borderRadius: 25,
    marginVertical: 500
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#283618",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  addText: {
    color: "#fefae0"
  },
  delete:{
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 60,
    marginTop: 13
  }
});
