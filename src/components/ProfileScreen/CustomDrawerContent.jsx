import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
const CustomDrawerContent = (props) => {
const [selectedImage, setSelectedImage] = useState(null);
const { navigation } = props;


 const drawerItems = [
    { label: 'My Profile', icon: 'user', screen: 'MyProfile' },
    { label: 'Basic Information', icon: 'user', screen: 'ProfileSetting' },
    { label: 'Ride History', icon: 'clock', screen: 'TripHistory' },
    { label: 'Saved Location', icon: 'map-pin', screen: 'SavedLocation' },
    { label: 'Help & Support', icon: 'help-circle', screen: 'HelpSupport' },
    { label: 'Log Out', icon: 'log-out', screen: 'Logout' }, 
  ];
 
  return (
    <View className="flex-1 bg-white px-0 pt-8">
      {/* Logo Section */}
      <View className="mb-2">
        <Image
          source={require('../../assets/images/logo.png')}
          className="w-28 h-20"
          resizeMode="contain"
        />
      </View>

      {/* Profile Info Centered */}
      <View className="items-center mt-2">
        <Image
          source={{
            uri: selectedImage
              ? selectedImage
              : 'https://randomuser.me/api/portraits/women/44.jpg',
          }}
          className="w-24 h-24 rounded-full border-4 border-white -mt-6"
        />
        <Text className="text-lg font-semibold mt-2">Nivetha</Text>
        <Text className="text-sm text-gray-500">nivetha@gmail.com</Text>
      </View>


      {/* Menu Items */}
      <View className="mt-10 ml-4">
        {drawerItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              if (item.screen === 'Logout') {
                // handle logout logic here if needed
              } else {
                navigation.navigate(item.screen);
              }
            }}
            className="flex-row items-center px-4 py-3 rounded-lg mb-1"
          >
            <Icon name={item.icon} size={20} color="#333" className="mr-3  mb-6" />
            <Text className="text-lg text-gray-800 mb-6">{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

    </View>
  )
}

export default CustomDrawerContent

