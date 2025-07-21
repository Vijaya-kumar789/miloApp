import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure expo/vector-icons is installed
import walkthrough2 from "../../assets/images/walkthrough2.png";

const WalkthroughScreen2 = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate("Login");
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View className="flex-1">
      {/* Top Back Button */}
      <TouchableOpacity onPress={handleBack} className="absolute top-12 left-6 z-10">
        <Ionicons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>

      {/* Full Image */}
      <View className="flex-1">
        <Image source={walkthrough2} className="w-full h-full" resizeMode="cover" />
      </View>

      {/* Bottom Content Overlaid */}
      <View className="absolute bottom-8 left-0 right-0 p-6 rounded-t-3xl">
        <View className="flex justify-center items-center gap-8 mx-4">
          <Text className="text-3xl font-medium">Schedule Now. Ride Later</Text>
          <Text className="text-xl text-gray-600 px-3 text-center">
            From Tap to Trip — Your Ride in Seconds
          </Text>

          {/* Page Indicator */}
          <View className="flex flex-row gap-2 mt-2">
            <View className="w-3 h-3 rounded-full bg-black/80" />
            <View className="w-3 h-3 rounded-full bg-[#FAB824]" />
          </View>

          {/* Start Button */}
          <TouchableOpacity
            className="bg-[#FAB824] w-full py-4 rounded-2xl"
            onPress={handleNext}
          >
            <Text className="text-3xl font-semibold text-center">Let’s Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default WalkthroughScreen2;
