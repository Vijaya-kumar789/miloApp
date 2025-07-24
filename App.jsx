import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import AuthNavigator from './src/navigation/AuthNavigator';
import "./global.css";
import AppRoutes from './src/routes/AppRoutes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      
      {/* <AuthNavigator /> */}
      <AppRoutes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});









// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet,View,Text } from 'react-native';
// import AuthNavigator from './src/navigation/AuthNavigator'; 
// import "./global.css"
// import AppRoutes from './src/routes/AppRoutes';

// export default function App() {
//   return (
//     <>
//       <StatusBar style="auto" />
//       {/* <AuthNavigator />  */}
//       <AppRoutes/>
//     </>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
