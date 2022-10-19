import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeHeader}>Welcome</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
})