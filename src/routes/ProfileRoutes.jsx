import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfilePage from '../components/ProfileSettings/ProfilePage';
import ProfileSettings from '../components/ProfileSettings/ProfileSettings'
import TripHistoryScreen from '../components/ProfileScreen/TripHistoryScreen';
import SavedLocationScreen from '../components/ProfileScreen/SavedLocationScreen';
import HelpSupportScreen from '../components/ProfileScreen/HelpSupportScreen';
import CustomDrawerContent from '../components/ProfileScreen/CustomDrawerContent';

const Drawer = createDrawerNavigator();

const ProfileRoutes = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false,drawerStyle: {width: 240,borderTopRightRadius: 30,
      borderBottomRightRadius: 30,
      overflow: 'hidden', 
      backgroundColor: '#fff'}}}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="MyProfile" component={ProfilePage} />
      <Drawer.Screen name="ProfileSetting" component={ProfileSettings}/>
      <Drawer.Screen name="TripHistory" component={TripHistoryScreen} />
      <Drawer.Screen name="SavedLocation" component={SavedLocationScreen} />
      <Drawer.Screen name="HelpSupport" component={HelpSupportScreen} />
    </Drawer.Navigator>
  );
};

export default ProfileRoutes;



// import React from 'react';
// import ProfileSettings from '../components/ProfileSettings/ProfileSettings';
// import { View } from 'react-native';
// import ProfilePage from '../components/ProfileSettings/ProfilePage';

// const ProfileRoutes = () => {
//   return (
//     <View>
//       {/* <ProfileSettings /> */}
//       <ProfilePage />
//     </View>
//   );
// };

// export default ProfileRoutes;
