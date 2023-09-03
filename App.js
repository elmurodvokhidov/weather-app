import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Loader from './components/Loader';
import { useEffect, useState } from 'react';
import Weather from './components/Weather';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [])


  return (
    isLoading ? <Loader /> : <Weather />
  );
}

const styles = StyleSheet.create({

});
