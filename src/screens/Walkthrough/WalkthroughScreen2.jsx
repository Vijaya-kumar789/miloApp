import { StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import walkthrough2 from "../../assets/images/walkthrough2.png";

const WalkthroughScreen2 = ({navigation}) => {

const handleNext = ()=>{
    console.log("pressed")
     navigation.navigate('walkthrough3')
  }

  return (
   <View >
        <Image source={walkthrough2}  />
        <View style={styles.contentBody} >
          <Text style={{fontSize:25}}>24/7 Rides, Just Tap Away</Text>
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

export default WalkthroughScreen2

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