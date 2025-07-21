import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import splashImg from "../assets/images/splash.png";
import logoImg from "../assets/images/logo.png";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Walkthrough1");
    }, 2000);
  }, []);

  return (
    <View className = " bg-[#FAB824] flex-1 relative " >
      <Image className = "w-full absolute" source={splashImg} resizeMode="cover" />
      <View className = "flex-1 justify-center items-center">
        <Image className = "w-1/2" source={logoImg} resizeMode="contain" />
      </View>
    </View>
  );
};

export default Splash;

