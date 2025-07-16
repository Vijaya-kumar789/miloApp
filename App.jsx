import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import AuthNavigator from './src/navigation/AuthNavigator'; // 👈 make sure this path is correct
import "./global.css"

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AuthNavigator /> 
      
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
