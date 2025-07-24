import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native';
import React from 'react'
import WalkthroughScreen1 from '../screens/Walkthrough/WalkthroughScreen1';
import WalkthroughScreen3 from '../screens/Walkthrough/WalkthroughScreen3';
import WalkthroughScreen2 from '../screens/Walkthrough/WalkthroughScreen2';
import WalkthroughScreen4 from '../screens/Walkthrough/WalkthroughScreen4';
import Splash from '../screens/Splash';

const Stack = createNativeStackNavigator()

const AuthNavigator = () => (
//  <NavigationContainer>
<Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='splash' component={Splash}/>
    <Stack.Screen name='walkthrough1' component={WalkthroughScreen1}/>
    <Stack.Screen name='walkthrough2' component={WalkthroughScreen2}/>
    <Stack.Screen name='walkthrough3' component={WalkthroughScreen3}/>
    <Stack.Screen name='walkthrough4' component={WalkthroughScreen4}/>
</Stack.Navigator> 
// </NavigationContainer>
)

export default AuthNavigator

const styles = StyleSheet.create({})