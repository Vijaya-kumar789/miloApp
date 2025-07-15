import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import splashImg from "../assets/images/splash.png";
import logoImg from "../assets/images/logo.png";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("walkthrough1");
    }, 200000);
  }, []);

  return (
    <View style={styles.body}>
      <Image source={splashImg} style={styles.splashImg} resizeMode="cover" />
      <View style={styles.logoContainer}>
        <Image source={logoImg} style={styles.logoImg} resizeMode="contain" />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#FAB824",
    position: "relative",
  },
  splashImg: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImg: {
    width: 200,
    height: 200,
  },
});
