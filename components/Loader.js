import LottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';

function Loader() {
    return (
        <AnimatedLoader
            visible={true}
            overlayColor="rgba(255,255,255,0.75)"
            source={require("../assets/animation_lm345c68.json")}
            animationStyle={styles.lottie}
            speed={2}
        >
            {/* <Text>Loading...</Text> */}
        </AnimatedLoader>
    );
}

const styles = StyleSheet.create({
    lottie: {
        width: 300,
        height: 300
    }
});

export default Loader;