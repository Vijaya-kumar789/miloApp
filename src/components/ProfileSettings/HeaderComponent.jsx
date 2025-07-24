
import React from 'react';
import { Text, TouchableOpacity, View,Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

// Reusable Header Component
export const Header = ({ onBack, backgroundColor = '#FAB824', height = 230 }) => (
  <View className="pt-28 pb-20 rounded-b-[100px] items-center relative" style={{ backgroundColor, height }}>
    <TouchableOpacity onPress={onBack} className="absolute top-12 left-4 bg-white rounded-full w-10 h-10 items-center justify-center shadow-md">
      <Feather name="chevron-left" size={20} color="black" />
    </TouchableOpacity>
  </View>
);

// Reusable Header Component
export const HeaderLogo = ({ onBack, backgroundColor = '#FAB824', height = 230 }) => (
  <View className="pt-28 pb-20 rounded-b-[100px] items-center relative" style={{ backgroundColor, height }}>
    <TouchableOpacity onPress={onBack} className="absolute top-12 left-4 bg-white rounded-full w-10 h-10 items-center justify-center shadow-md">
      <Feather name="chevron-left" size={20} color="black" />
    </TouchableOpacity>
    <Image
                source={require('../../assets/images/logo.png')}
                className="w-28 h-20 mb-2"
                resizeMode="contain"
    />
  </View>
);

// Reusable Title Card Component
export const TitleCard = ({ title }) => (
  <View className="items-center mt-[-50px] mb-0">
    <View className="bg-white w-[85%] rounded-xl px-4 py-5">
      <Text className="text-[#FAB824] text-xl font-bold text-center">{title}</Text>
    </View>
  </View>
);




