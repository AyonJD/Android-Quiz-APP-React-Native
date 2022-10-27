import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

const ResultScreen = ({ navigation, route }) => {
    const { score } = route.params

    return (
        <View style={styles.container}>
            <Text style={styles.testResult}>Quiz Result</Text>

            <View style={styles.counter}>
                <View>
                    <CircularProgress
                        value={score}
                        title={`${score}%`}
                        radius={80}
                        inActiveStrokeOpacity={0.5}
                        activeStrokeWidth={15}
                        inActiveStrokeWidth={20}
                        textColor="#009387"
                        activeStrokeColor="#009387"
                        progressValueStyle={{ fontWeight: 'bold', color: '#009387' }}
                        activeStrokeSecondaryColor="yellow"
                        inActiveStrokeColor="black"
                        duration={2000}
                        dashedStrokeConfig={{
                            count: 50,
                            width: 4,
                        }}
                    />
                    <Text style={styles.counterText}>Right Answer</Text>
                </View>
                <View>
                    <CircularProgress
                        value={100 - score}
                        radius={80}
                        duration={2000}
                        progressValueColor={'#F73094'}
                        activeStrokeColor="#F73094"
                        maxValue={100}
                        title={`${100 - score}%`}
                        titleStyle={{ fontWeight: 'bold' }}
                    />
                    <Text style={[styles.counterText, { color: "#F73094" }]}>Wrong Answer</Text>
                </View>
            </View>

            {/* <Text style={styles.scoreValue}>{score}</Text> */}
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
    counter: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    counterText: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        color: '#009387',
        marginTop: 10,
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