import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import walkthrough1 from "../../assets/images/walkthrough1.png";

const WalkthroughScreen1 = ({navigation}) => {

  const handleNext = ()=>{
    console.log("pressed")
  }
  return (

    <View >
      <Image source={walkthrough1}  />
      <View style={styles.contentBody} >

        <Text  >Tap, Book, Go!</Text>
        <Text>Book Your Ride in Seconds with Just a Few Taps</Text>
        <Text>Skip</Text>
      <TouchableOpacity style={styles.btn} onPress={handleNext}>
        <Text style={styles.btnTxt}>Next</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default WalkthroughScreen1

const styles = StyleSheet.create({

  // contentBody:{
  //   flex:1,
  //   justifyContent:"center",
  //   alignItems:"center",
  //   gap:30
  // },
  btn:{
    
    padding:4,
    backgroundColor:"#FAB824",
    borderRadius:18,
    marginHorizontal:12
  },
  btnTxt:{
    fontSize:35,
    textAlign:"center",
    fontWeight:"600"
  },

})