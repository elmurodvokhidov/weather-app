import LottieView from 'lottie-react-native';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

function Loader() {
    return (
        <LottieView
            autoPlay
            style={{
                flex: 1,
                alignContent: 'center',
                justifyContent: 'center',
                backgroundColor: '#eee',
            }}
            source={require('../assets/animation_lm345c68')}
        />
    );
}

// const styles = StyleSheet.create({
//     lottie: {
//         width: 300,
//         height: 300
//     }
// });

export default Loader;