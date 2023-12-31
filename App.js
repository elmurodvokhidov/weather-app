import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Loader from './components/Loader';
import { useEffect, useState } from 'react';
import Weather from './components/Weather';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = "db53a00eee2da0ebe4ab04359ba97ddf";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(null);

  const getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    setIsLoading(false);
    setLocation(data);
  };

  async function setWeather(query) {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`)
    setIsLoading(false);
    setLocation(data);
  }


  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert("Permission to access location was denied");
        return
      }

      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});
      getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Something's went wrong here!");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);


  return (
    isLoading ? <Loader /> : location ? <Weather setWeather={setWeather} temp={Math.round(location.main.temp)} name={location.name} condition={location.weather[0].main} /> : <Text>Loading location...</Text>
  );
}

const styles = StyleSheet.create({

});
