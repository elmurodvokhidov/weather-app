import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const weatherOptions = {
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#56CCF2', '#2F80ED'],
        title: 'Amazing weather',
        description: 'Go for a walk, stop staying at home!',
    },
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#141E30', '#243B55'],
        title: 'Stay home!',
        description: "Do you see what's on the street?",
    },
    Drizzle: {
        iconName: 'weather-rainy',
        gradient: ['#3a7bd5', '#3a6073'],
        title: 'Take an umbrella',
        description: 'Perhaps the rain will increase soon',
    },
    Rain: {
        iconName: 'weather-pouring',
        gradient: ['#000046', '#1CB5E0'],
        title: "It's raining outside",
        description: 'So there will be a rainbow soon!',
    },
    Snow: {
        iconName: 'snowflake',
        gradient: ['#83a4d4', '#b6fbff'],
        title: "There's a snow outside!",
        description: 'Dress warmly, make snowmen',
    },
    Dust: {
        iconName: 'weather-windy-variant',
        gradient: ['#B79891', '#94716B'],
        title: 'Dusty',
        description: 'Better close the windows',
    },
    Smoke: {
        iconName: 'weather-windy',
        gradient: ['#56CCF2', '#2F80ED'],
        title: 'On the street smog :(',
        description: 'I do not advise going out unnecessarily',
    },
    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#3E5151', '#DECBA4'],
        title: "There's a snow outside!",
        description: 'Dress warmly, make snowmen',
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#606c88', '#3f4c6b'],
        title: "You can't see a damn thing in the fog",
        description: "Do you see what's on the street?",
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#757F9A', '#D7DDE8'],
        title: 'The clouds',
        description: 'Go for a walk, stop staying at home!',
    },
};

function Weather({ temp, name, condition }) {
    return (
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.mainContainer}>
            <StatusBar barStyle={"light-content"} />
            <View style={styles.container}>
                <MaterialCommunityIcons name={weatherOptions[condition].icon} size={96} color={"white"} />
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.temp}>{temp}°C</Text>
                    <Text style={styles.temp}> | {name}</Text>
                </View>
            </View>
            <View style={{ ...styles.container, ...styles.textContainer }}>
                <Text style={styles.text}>{weatherOptions[condition].title}</Text>
                <Text style={styles.description}>{weatherOptions[condition].description}</Text>
                <View style={styles.searchContainer}>
                    <TextInput placeholder="Search by city name..." style={styles.input} />
                    <Button title='Search' style={styles.btn} />
                </View>
            </View>
        </LinearGradient>
    );
}

export default Weather;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp: {
        fontSize: 42,
        color: 'white',
    },
    textContainer: {
        flex: 1,
    },
    text: {
        color: 'white',
        fontSize: 44,
        fontWeight: 300,
        marginBottom: 10,
    },
    description: {
        color: 'white',
        fontSize: 24,
        fontWeight: 600,
    },
    searchContainer: {
        backgroundColor: '#e8e8e8e',
        width: '100%',
        padding: 10,
        marginTop: 10,
        position: 'relative',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
    },
    input: {
        width: '70%',
    },
    btn: {
        width: '30%',
    }
})