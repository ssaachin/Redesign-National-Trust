import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

function SearchBtn({ ...otherProps }) {
  return (
    <View >
      <TextInput  {...otherProps} style={styles.search}/>
    </View>
  );
}



const styles = StyleSheet.create({
  search: {
    backgroundColor: "#dda15e",
    height: 40,
    width: "95%",
    margin: 10,
    borderRadius: 10,
    letterSpacing: -1,
    fontSize: 15,
    color: "#283618"
  }
});

export default SearchBtn;