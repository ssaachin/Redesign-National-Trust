import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';



const LocationCard = (props) => {


// renders out the added cards
  return (
    <View style={styles.item}>
      <Ionicons name="checkmark-done-circle-outline" size={24} color="#283618" />
        <Text style={styles.itemText}>{props.text}</Text>
          <TouchableOpacity onPress={() =>{
            alert("put image picker here")
            }}>
            <MaterialIcons name="add-to-photos" size={24} color="#283618" />
          </TouchableOpacity>
    </View>
    
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#dda15e",
    padding: 20,
    borderRadius: 15,
    marginRight: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemText: {
    color: "#283618",
    maxWidth: "80%",
    fontWeight: "700",
    letterSpacing: -1,
    textTransform: 'uppercase',
    textDecorationLine: 'line-through'
  },
  
});

export default LocationCard;























// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// export default function Task (props) {

//   return (
//     <View style={styles.card}>
//         <View style={styles.item}>
//         {/* <TouchableOpacity style={styles.touch}></TouchableOpacity> */}
//         <Text style={styles.text}>{props.text}</Text>
//         </View>
//         <View style={styles.secondItem}>

//         </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     card:{
//         backgroundColor: "#dda15e",
//         padding: 20,
//         borderRadius: 15,
//         marginRight: 10,
//         marginTop: 10,
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "space-between",
        

//     },
//     item:{

//     },
//     // touch:{
//     //     width: 24,
//     //     height: 24,
//     //     backgroundColor: "black"
//     // },
//     text:{
//         color: "#283618",
//         maxWidth: "100%",
//         fontWeight: "700",
//         letterSpacing: -1,
//         textTransform: 'uppercase',
//         textDecorationLine: 'line-through'

//     },
// });

