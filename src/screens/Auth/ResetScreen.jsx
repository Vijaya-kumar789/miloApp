import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Pressable,ScrollView } from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';
import logoImg from "../../assets/images/logo.png";

import Icon from 'react-native-vector-icons/FontAwesome';


export default function ResetScreen({navigation}) {
    const [showPassword, setShowPassword] = useState(false);

    return (

      <View className="flex-1 bg-white relative">
  {/* Yellow Background - 32% Height */}
  <View className="absolute top-0 left-0 right-0 h-[32%] bg-[#FAB824] rounded-b-[50px] z-0" />

  {/* Logo and Header - Positioned on Top */}
    <View className="absolute top-16 left-0 right-0 z-20 items-center">
          <Image
            source={logoImg}
            className="h-28 w-28 mb-4 rounded-2xl"
            resizeMode="contain"
          />
       
        </View>

  {/* Scrollable Auth Form */}
  <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ paddingTop: 200, paddingBottom: 40 }}
    className="z-30"
  >
    <View className="mx-6 bg-white rounded-t-[40px] px-6 pt-14 pb-6">
      {/* Auth Tabs */}
      <View className="flex justify-center items-center mb-10 gap-6">
         <Text className="text-3xl text-[#FAB824]">Reset your password</Text>
         <Text className="text-sm px-1 text-center">Enter a new password to reset the password on your account. We’ll ask for this password whenever you log in.</Text>
      </View>
  <View className=" gap-10">
      {/* Input Fields */}
      <View className="">
        <TextInput
          placeholder="New Password"
          placeholderTextColor="#A3A3A3"
          className="bg-gray-100 px-4 py-3 rounded-lg text-lg"
        />
       
      </View>

       <View className=" gap-3">
        <View className = "flex-row gap-2">
         <Icon name="star" size={15} color="#FAB824" />
         <Text className="text-sm font-semibold text-gray-500">More than 6 characters</Text>
        </View>
        <View className = "flex-row gap-2">
         <Icon name="star" size={15} color="#FAB824" />
         <Text className="text-sm font-semibold text-gray-500">Must contain an uppercase and a lowercase Letter (A,z)</Text>
        </View>
        <View className = "flex-row gap-2">
         <Icon name="star" size={15} color="#FAB824" />
         <Text className="text-sm font-semibold text-gray-500">Must contain a number</Text>
        </View>
        <View className = "flex-row gap-2">
         <Icon name="star" size={15} color="#FAB824" />
         <Text className="text-sm font-semibold text-gray-500">Must contain a special character ( !,@,#,% )</Text>
        </View>
        
      </View>
       
        <TextInput
          placeholder="Confirm New Password"
          placeholderTextColor="#A3A3A3"
          className="bg-gray-100 px-4 py-3 rounded-lg text-lg"
        />
       
      </View>
      {/* Continue Button */}
      <TouchableOpacity className="bg-[#FAB824] mt-10 rounded-xl py-3 items-center">
        <Text className="text-lg font-semibold text-black">Reset Password</Text>
      </TouchableOpacity>

 
    </View>
  </ScrollView>
</View>

    );
}
