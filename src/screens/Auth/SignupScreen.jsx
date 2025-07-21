import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Pressable,ScrollView } from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';
import logoImg from "../../assets/images/logo.png";

import Icon from 'react-native-vector-icons/FontAwesome';


export default function SignupScreen({navigation}) {
    const [showPassword, setShowPassword] = useState(false);

    return (

          <View className="flex-1 bg-white relative">
      <View className="absolute top-0 left-0 right-0 h-[32%] bg-[#FAB824] rounded-b-[50px] z-0" />

      {/* Fixed Logo & Header */}
      <View className="absolute top-10 left-0 right-0 z-20 items-center">
        <Image
          source={logoImg}
          className="h-28 w-28 mb-4 rounded-2xl"
          resizeMode="contain"
        />
        <Text className="text-3xl font-semibold text-black ">
          Welcome To <Text className="font-bold text-white">Milo Cabs!</Text>
        </Text>
      </View>

      {/* Scrollable Auth Card */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 200, paddingBottom: 40 }}
        className="z-30"
      >
        <View className="bg-white mx-6 rounded-t-[40px] px-6 pt-14 pb-6">
          {/* Auth Tabs */}
        <View className="flex-row justify-center mb-10 gap-8">
                           <TouchableOpacity onPress={() => navigation.navigate('Login')}> 
                               <Text className="text-black text-2xl font-semibold pb-1 px-4 ml-4">
                                   Login
                               </Text>
                           </TouchableOpacity>
                           <TouchableOpacity >
                               <Text className=" text-[#FAB824] text-2xl  font-semibold border-b-2 border-[#FAB824] pb-1 px-2">
                                   Sign Up
                               </Text>
                           </TouchableOpacity>
                       </View>

          {/* Input Fields */}
          <View className="gap-5">
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="#A3A3A3"
              className="bg-gray-100 px-4 py-3 rounded-lg text-lg"
            />
            <TextInput
              placeholder="Enter Phone Number"
              placeholderTextColor="#A3A3A3"
              className="bg-gray-100 px-4 py-3 rounded-lg text-lg"
            />
            <TextInput
              placeholder="Enter Email"
              placeholderTextColor="#A3A3A3"
              className="bg-gray-100 px-4 py-3 rounded-lg text-lg"
            />
            <View className="bg-gray-100 px-4 py-1 rounded-lg flex-row items-center justify-between">
              <TextInput
                placeholder="Create Password"
                placeholderTextColor="#A3A3A3"
                secureTextEntry={!showPassword}
                className="flex-1 text-lg"
              />
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <EyeOff size={20} color="#555" />
                ) : (
                  <Eye size={20} color="#555" />
                )}
              </Pressable>
            </View>
            <View className="bg-gray-100 px-4 py-1 rounded-lg flex-row items-center justify-between">
              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor="#A3A3A3"
                secureTextEntry={!showPassword}
                className="flex-1 text-lg"
              />
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <EyeOff size={20} color="#555" />
                ) : (
                  <Eye size={20} color="#555" />
                )}
              </Pressable>
            </View>
          </View>

          {/* Continue Button */}
          <TouchableOpacity className="bg-[#FAB824] mt-6 rounded-xl py-3 items-center">
            <Text className="text-lg font-semibold text-black">Continue</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View className="flex-row items-center justify-center my-6">
            <View className="flex-1 h-px bg-gray-300" />
            <Text className="mx-2 text-lg text-gray-500">Or</Text>
            <View className="flex-1 h-px bg-gray-300" />
          </View>

          {/* Social Buttons */}
          <View className="gap-4">
            <TouchableOpacity className="bg-gray-100 rounded-lg py-3 flex-row items-center justify-center gap-3">
              <Icon name="google" size={20} color="#000" />
              <Text className="text-black text-base font-medium">
                Continue with Google
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-100 rounded-lg py-3 flex-row items-center justify-center gap-3">
              <Icon name="apple" size={20} color="#000" />
              <Text className="text-black text-base font-medium">
                Continue with Apple
              </Text>
            </TouchableOpacity>
          </View>

          {/* Consent Text */}
          <Text className="text-base text-gray-500 mt-6 leading-6">
            By proceeding, your consent to get calls, WhatsApp or SMS/RCS
            messages, including by automated means, from Milo Cabs and its
            affiliates to the number provided.
          </Text>
        </View>
      </ScrollView>
    </View>
    );
}
