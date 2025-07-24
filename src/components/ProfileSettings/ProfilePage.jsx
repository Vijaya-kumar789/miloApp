import { Image, StyleSheet, Text, View,TouchableOpacity,SafeAreaView } from 'react-native'
import React,{ useState } from 'react'
import { Feather } from '@expo/vector-icons';
const ProfilePage = ({navigation }) => {
 
  return (
    <SafeAreaView>
      <View className="items-center mt-10 mb-6">

        {/* Header with Hamburger */}
        <View className="flex-row items-center p-4">
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Feather name="menu" size={24} color="black" />
          </TouchableOpacity>
          
        </View>
       </View>
    </SafeAreaView>
  )
}

export default ProfilePage


