import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ResultScreen = ({ navigation, route }) => {
    const { score } = route.params

    return (
        <View style={styles.container}>
            <Text>Result</Text>
            <Text style={styles.scoreValue}>{score}</Text>
            <View style={styles.bannerContainer}>
                <Image
                    source={score > 30 ? require('../../assets/success.png') : require('../../assets/failed.png')}
                    style={styles.banner}
                    resizeMode="contain"
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
                <Text style={styles.buttonText}>GO TO HOME</Text>
            </TouchableOpacity>
        </View>
    );
};



export default ResultScreen;

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300,
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
    },
    button: {
        width: '100%',
        backgroundColor: '#009387',
        padding: 10,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 22,
        fontWeight: '600',
        color: 'white',
    },
    scoreValue: {
        fontSize: 24,
        fontWeight: '800',
        alignSelf: 'center'
    }
});