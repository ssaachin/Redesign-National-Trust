import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Users()  {
    return(
        <TouchableOpacity style={{position: "absolute",top: 25, left: 170, borderRadius: "10" }}>
               <FontAwesome5 name="user-circle" size={30} color="black" />
        </TouchableOpacity>
    );
}