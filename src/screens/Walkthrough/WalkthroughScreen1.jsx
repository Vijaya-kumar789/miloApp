
import { Image, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import walkthrough1 from "../../assets/images/walkthrough1.png";

const WalkthroughScreen1 = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate("Walkthrough2");
  };
  const handleSkip = () => {
 navigation.navigate("Login");
  }
  return (
    <View className="flex-1">
      <View className="flex-1">
        <Image
          source={walkthrough1}  />

      </View>

      {/* Bottom Content Overlaid */}
      <View className="absolute bottom-6 left-0 right-0 p-6 rounded-t-3xl">
        <View className="flex justify-center items-center gap-6 mx-4">
          <Text className="text-3xl font-medium">
            24/7 Rides. Just Tap And Go
          </Text>
          <Text className="text-xl text-gray-600 px-3 text-center">
            Effortless Ride Booking in Seconds—Just a Few Taps Away.
          </Text>
          
        <View className="flex flex-row gap-2 mt-2">
          <View className="w-3 h-3 rounded-full bg-[#FAB824]" />
          <View className="w-3 h-3 rounded-full bg-black/80" />
        </View>

          <TouchableOpacity onPress={handleSkip}>
            <Text className="text-4xl font-medium text-[#FAB824]">Skip</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-[#FAB824] w-full py-4 rounded-2xl"
            onPress={handleNext}
          >
            <Text className="text-4xl font-semibold text-center">Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default WalkthroughScreen1;
