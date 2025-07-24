import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileRoutes from './ProfileRoutes';
import FeedBackPage from '../components/Booking/FeedBackPage';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
      <Stack.Navigator initialRouteName="Feedback">
        {/* <Stack.Screen name="Profile" component={ProfileRoutes} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Feedback" component={FeedBackPage} options={{ headerShown: false }} />
      </Stack.Navigator>
  );
};

export default AppRoutes;

