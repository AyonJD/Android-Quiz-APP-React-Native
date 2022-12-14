import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.testResult}>Start your test</Text>
            <View style={styles.bannerContainer}>
                <Image
                    source={require('../../assets/quiz_home.png')}
                    style={styles.banner}
                    resizeMode="contain"
                />
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('QuizScreen')}
                style={styles.button}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    testResult: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 40,
        textAlign: 'center',
        borderBottomColor: '#009387',
        borderBottomWidth: 2,
        paddingBottom: 10,
        width: '50%',
        alignSelf: 'center',
    },
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
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
    },
});