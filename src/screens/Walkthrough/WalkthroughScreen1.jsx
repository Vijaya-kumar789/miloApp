import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import walkthrough1 from "../../assets/images/walkthrough1.png";

const WalkthroughScreen1 = ({navigation}) => {

  const handleNext = ()=>{
    console.log("pressed")
    navigation.navigate('walkthrough2')
  }
  return (

    <View >
      <Image source={walkthrough1}  />
      <View style={styles.contentBody} >
        <Text style={{fontSize:25}}>Tap, Book, Go!</Text>
        <Text style={{fontSize:17,color:"gray"}}>Book Your Ride in Seconds with Just a Few Taps.</Text>
       
          <TouchableOpacity  onPress={handleNext}>
        <Text style={{color:"#FAB824",fontSize:30,fontWeight:500}}>Skip</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={handleNext}>
        <Text style={styles.btnTxt}>Next</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default WalkthroughScreen1

const styles = StyleSheet.create({

  contentBody:{
    // flex:1,
    justifyContent:"center",
    alignItems:"center",
    gap:30
  },
  btn:{
    
    padding:4,
    backgroundColor:"#FAB824",
    borderRadius:18,
    marginHorizontal:1,
    width:"95%"

  },
  btnTxt:{
    fontSize:35,
    textAlign:"center",
    fontWeight:"600"
  },
skipBtn:{
  
},
})