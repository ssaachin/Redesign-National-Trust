import React, { useEffect, useState } from 'react';
import MapView, { Marker }  from 'react-native-maps';
import { StyleSheet } from 'react-native';
import * as Location from "expo-location";
import LocationData from './Data/LocationData';
import Ripple from './Pulse';



export default function Map() {
  let items = LocationData();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapRegion, setMapRegion] = useState(null);
  const [locationData, setLocationData] = useState(items);

  useEffect(() => {
    (async () => {
      // Current location permission
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      
      let location = await Location.getCurrentPositionAsync({});
      setMapRegion({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
        longitudeDelta: 0.0922,
        latitudeDelta: 0.0421
      })
    })();
  }, []);




  return(
    // Current location of the user
    <MapView initialRegion={mapRegion} style={styles.maps}>
      <Marker coordinate={mapRegion}><Ripple /></Marker>
      {/* marker added from the data */}
      {locationData ? locationData.map((locationData , index)=> (
        <Marker key={index} coordinate={locationData.location} title={locationData.text} description={locationData.subText}>
        </Marker>
      )): null}
    </MapView>
  );
}





const styles = StyleSheet.create({
  maps: {
    width: "100%",
    height: "100%"

  },
  card:{
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10
  },
  title:{
    backgroundColor: "black",
    color: "white"
  },
  desc: {
    backgroundColor: "black",
    color: "white",
    margin: 2
  },
  image:{
    height: 50,
    width: 50
  }
});






























