import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import walkthrough1 from "../../assets/images/walkthrough1.png";

const WalkthroughScreen1 = ({navigation}) => {
  return (
    <View>
      <Image source={walkthrough1}  />
    </View>
  )
}

export default WalkthroughScreen1

const styles = StyleSheet.create({})