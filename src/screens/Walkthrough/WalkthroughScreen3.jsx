import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import walkthrough3 from "../../assets/images/walkthrough3.png";

const WalkthroughScreen3 = ({navigation}) => {

const handleNext = ()=>{
    console.log("pressed")
     navigation.navigate('walkthrough4')
  }


  return (
    <View >
          <Image source={walkthrough3}  />
          <View style={styles.contentBody} >
            <Text style={{fontSize:25, textAlign:"center",paddingHorizontal:20}}>Schedule now, ride later — we’ll be ready.</Text>
            <Text style={{fontSize:17,color:"gray"}}>Instant Rides with Effortless Booking.</Text>
           
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

export default WalkthroughScreen3

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