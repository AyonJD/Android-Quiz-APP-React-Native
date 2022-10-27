import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../Screens/HomeScreen';
import QuizScreen from '../../Screens/QuizScreen';



const Stack = createNativeStackNavigator();

const ScreenNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="QuizScreen" component={QuizScreen} />
        </Stack.Navigator>
    )
}

export default ScreenNavigation