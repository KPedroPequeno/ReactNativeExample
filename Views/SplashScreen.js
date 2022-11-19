import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';


export default function SplashScreen() {
    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Lottie source={require('../assests/splash.json')} autoPlay loop={false}
                onAnimationFinish={navigation.navigate("Home")} />
        </View>
    );
}