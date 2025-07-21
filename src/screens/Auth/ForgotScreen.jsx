import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Pressable,ScrollView } from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';
import logoImg from "../../assets/images/logo.png";

import Icon from 'react-native-vector-icons/FontAwesome';


export default function ForgotScreen({navigation}) {
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
         <Text className="text-3xl text-[#FAB824]">Forget Your Password</Text>
         <Text className="text-sm px-10 text-center">Please enter the phone number or email you’d like your password reset information sent to</Text>
      </View>

      {/* Input Fields */}
      <View className="gap-8">
        <TextInput
          placeholder="Enter phone Number Or Email"
          placeholderTextColor="#A3A3A3"
          className="bg-gray-100 px-4 py-3 rounded-lg text-lg"
        />
       
      </View>
       
      {/* Continue Button */}
      <TouchableOpacity className="bg-[#FAB824] mt-6 rounded-xl py-3 items-center mb-8">
        <Text className="text-lg font-semibold text-black">Continue</Text>
      </TouchableOpacity>

 
         <Text className="text-center text-3xl ">Verify Otp</Text>
   <View className = "flex-row gap-5 justify-between mx-10 mt-10">
        <TextInput
          
    placeholderTextColor="#A3A3A3"
    keyboardType="number-pad"
    maxLength={1}
    className="bg-gray-100 w-12 h-12 rounded-lg text-lg text-center"
        />
         <TextInput
         placeholderTextColor="#A3A3A3"
    keyboardType="number-pad"
    maxLength={1}
    className="bg-gray-100 w-12 h-12 rounded-lg text-lg text-center"
        />
        <TextInput
         placeholderTextColor="#A3A3A3"
    keyboardType="number-pad"
    maxLength={1}
    className="bg-gray-100 w-12 h-12 rounded-lg text-lg text-center"
        /> 
         <TextInput
        placeholderTextColor="#A3A3A3"
    keyboardType="number-pad"
    maxLength={1}
    className="bg-gray-100 w-12 h-12 rounded-lg text-lg text-center"
        />
        </View>


      {/* Consent Text */}
      <Text className="text-base text-center text-[#FAB824] mt-10 leading-6">
        Resend OTP via SMS in 00 : 23 </Text>
    </View>
  </ScrollView>
</View>

    );
}
