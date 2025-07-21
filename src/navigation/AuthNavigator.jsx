import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native';
import React from 'react'
import WalkthroughScreen1 from '../screens/Walkthrough/WalkthroughScreen1';
import WalkthroughScreen2 from '../screens/Walkthrough/WalkthroughScreen2';
import Splash from '../screens/Splash';
import LoginScreen from '../screens/Auth/ LoginScreen';
import SignupScreen from '../screens/Auth/SignupScreen';
import ForgotScreen from '../screens/Auth/ForgotScreen';
import ResetScreen from '../screens/Auth/ResetScreen';

const Stack = createNativeStackNavigator()

const AuthNavigator = () => (
 <NavigationContainer>
<Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Login' component={LoginScreen}/>
    <Stack.Screen name='ForgotPassword' component={ForgotScreen}/>
    <Stack.Screen name='ResetPassword' component={ResetScreen}/>
    <Stack.Screen name='Signup' component={SignupScreen}/>
    <Stack.Screen name='Splash' component={Splash}/>
    <Stack.Screen name='Walkthrough1' component={WalkthroughScreen1}/>
    <Stack.Screen name='Walkthrough2' component={WalkthroughScreen2}/>
    {/* <Stack.Screen name='walkthrough3' component={WalkthroughScreen3}/>
    <Stack.Screen name='walkthrough4' component={WalkthroughScreen4}/> */}
</Stack.Navigator> 
</NavigationContainer>
)

export default AuthNavigator

const styles = StyleSheet.create({})