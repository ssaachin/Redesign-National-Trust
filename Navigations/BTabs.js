import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Discover from '../Components/Screens/Discover';
import Maps from '../Components/Screens/Map';
import Completed from '../Components/Screens/Completed';
import { FontAwesome5, Entypo, Ionicons } from '@expo/vector-icons';
import LogoHeader from '../Components/Screens/Logo/Logo';

const Tab = createBottomTabNavigator();


const BTabs = () => {

    return (
        // Bottom tab
        <Tab.Navigator
            initialRouteName="Discover"
            screenOptions={{
                tabBarActiveTintColor: '#fefae0',

                tabBarStyle:{
                    backgroundColor: '#283618',
                    position: 'absolute',
                    bottom: 35,
                    marginHorizontal: 20,
                    height: 80,
                    paddingBottom: 20,
                    borderRadius: 20,
                    shadowColor: 'black',
                    shadowOpacity: 0.4,
                    shadowOffset: {
                        width: 4,
                        height: 10
                    },
                    paddingHorizontal: 20
                },
                headerTitle: (props) => <LogoHeader {...props}/>
                
            }}
            


        >
                {/* First tab */}
             <Tab.Screen name='Map' component={Maps} 

                options={{
                    tabBarIcon: ({ color, size }) => (
                        <View style={{
                            position: 'absolute',
                            top: '35%'                            
                        }}>
                            <FontAwesome5 name="map-marked-alt" color={color} size={size} />
                        </View>
                    )

                }}
            /> 
                    {/* Second Tab */}
            <Tab.Screen name='Discover' component={Discover}
                options={{
                    

                    tabBarIcon: ({ color , size }) => (
                            <View style={{
                                position: 'absolute',
                                top: '35%'
                            }}>
                                <Entypo name="home" color={color} size={size} />
                            </View>
                    )
                     
                     
                }} 
                     
            />

                {/* Third tab */}
            <Tab.Screen name='Completed' component={Completed}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <View style={{
                            position: 'absolute',
                            top: '35%'
                        }}>
                            <Ionicons name="checkmark-done" size={size} color={color} />
                        </View>
                    )
                }}

            />
        </Tab.Navigator>

    );
}

export default BTabs;
