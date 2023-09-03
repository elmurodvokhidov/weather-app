import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Weather(props) {
    return (
        <View style={styles.container}>
            <Text>Weather</Text>
        </View>
    );
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})