import React from 'react';
import { Text, View, Image} from 'react-native';
import Users from './UserButton';
import More from './More';



export default function LogoHeader() {
    return (
        <View>
          <More/>
          <Users/>
          <Text style={{fontSize: 20,
                        fontWeight: "bold",   
                          top: 20,
                            right: 95,
                              textTransform: "uppercase"}}
                >National </Text>
       
          <Text style={{right: 95,
                        fontWeight: "bold",   
                          top: 18,
                            textTransform: "uppercase"}}
          >Trust</Text>
           
          <Image
            style={{ width: 45,
                      height: 50,
                        right: 140,
                          bottom: 26  }}
            source={require('../Logo/nt-logo.png')}
          /> 
             
        </View>
    );
  }