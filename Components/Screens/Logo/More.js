import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function More()  {
    return(
        <TouchableOpacity style={{position: "absolute", top: 25, left: 210, borderRadius: "10" }}>
               <Feather name="more-vertical" size={30} color="black" />
        </TouchableOpacity>
    );
}