import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { AuthContext } from '../../App';

const HomeScreen = () => {
    const { token, user, logoutToken } = React.useContext(AuthContext);
    console.log(token, user)
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeHeader}>Welcome</Text>
            <Button title='Sign Out' onPress={logoutToken} />
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