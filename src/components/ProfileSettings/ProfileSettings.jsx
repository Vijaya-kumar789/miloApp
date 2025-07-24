import { Image, StyleSheet, Text, View,TouchableOpacity,ScrollView,TextInput } from 'react-native'
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { KeyboardAvoidingView, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';


const schema = yup.object().shape({
  fullName: yup.string().required('Full Name is required'),
  driverId: yup.string().required('Driver ID is required'),
  phoneNumber: yup
    .string()
    .matches(/^\d{10}$/, 'Phone number must be 10 digits')
    .required('Phone Number is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  pincode: yup.string().matches(/^\d{6}$/, 'Pincode must be 6 digits'),
});

const ProfileSettings = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [dob, setDob] = useState(null);
  const [joiningDate, setJoiningDate] = useState(null);
  const [showDobPicker, setShowDobPicker] = useState(false);
  const [showJoiningPicker, setShowJoiningPicker] = useState(false);
  const [gender, setGender] = useState('');
  const [accountStatus, setAccountStatus] = useState('');
  const [genderOpen, setGenderOpen] = useState(false);
  const [genderValue, setGenderValue] = useState(null);
  const [genderItems, setGenderItems] = useState([
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ]);
  const [statusOpen, setStatusOpen] = useState(false);
  const [statusValue, setStatusValue] = useState(null);
  const [statusItems, setStatusItems] = useState([
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' },
    { label: 'Pending', value: 'pending' },
  ]);


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const formatDate = (date) => {
  if (!date) return '';
  const d = new Date(date);
  const day = (`0${d.getDate()}`).slice(-2);
  const month = (`0${d.getMonth() + 1}`).slice(-2); // Months start from 0
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
};  

   const handleChoosePhoto = async () => {
  const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (!permissionResult.granted) {
    alert('Permission to access gallery is required!');
    return;
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 1,
    allowsEditing: true,
  });

  if (!result.canceled) {
    setSelectedImage(result.assets[0].uri);
  }
};

const onSubmit = (data) => {
    console.log('Form Data:', data);
    Alert.alert('Profile Saved', 'Your profile has been updated successfully!');
  };

  return (
    <View>
       <ScrollView
        className="flex:1 bg-white"
        contentContainerStyle={{ flexGrow: 1,paddingBottom: 5 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
      <View className="bg-[#FAB824] pt-28 pb-20 rounded-b-[100px] items-center relative">
          <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-12 left-4 bg-white rounded-full w-10 h-10 items-center justify-center shadow-md">
             <Feather name="chevron-left" size={20} color="black" />
           </TouchableOpacity>
          <Image
            source={{
              uri: selectedImage
                ? selectedImage
                : 'https://randomuser.me/api/portraits/women/44.jpg',
            }}
            className="w-24 h-24 rounded-full mt-[-50px] border-4 border-white"/>
          <TouchableOpacity onPress={handleChoosePhoto}
            className="mt-2 px-4 py-2 bg-yellow-500 rounded-full">
            <Text className="text-black font-semibold">Choose Photo</Text>
          </TouchableOpacity>
        </View>


 {/* Profile Summary Card */} 
         <View className="items-center mt-[-50px] mb-5">
           <View className="bg-white w-[85%] rounded-xl px-4 py-5">
             <Text className="text-[#FAB824] text-xl font-bold text-center mb-4">
               My Profile
             </Text>
             <View className="flex-row justify-between mx-8">
              {[
                { icon: 'star', label: '4.8', desc: 'Ratings' },
                { icon: 'truck', label: '40', desc: 'Trips' },
                { icon: 'user', label: '5', desc: 'Years' },
              ].map((item, idx) => (
                <View key={idx} className="items-center w-1/1">
                  <View className="w-12 h-12 rounded-full bg-[#FAB824] items-center justify-center">
                    <Feather name={item.icon} size={20} color="white" />
                  </View>
                  <Text className="font-bold text-base mt-2">{item.label}</Text>
                  <Text className="text-xs text-gray-600 text-center">{item.desc}</Text>
                </View>
              ))}
            </View>

          {/* Form Section */}
         <View className="bg-white w-[90%] self-center rounded-xl pt-6 px-4 py-5 space-y-4 mb-10">
           {['Full Name', 'Driver ID', 'Phone Number', 'E-mail Address'].map((label, index) => (
             <View key={index}>
               <Text className="text-gray-700 mb-1 font-medium">{label}</Text>
               <TextInput
                 placeholder={`Enter ${label}`}
                 keyboardType={label.includes('Phone') ? 'numeric' : 'default'}
                 className="bg-[#F3F3F3] border border-gray-300 rounded-md px-4 py-3 mb-2 text-sm"
               />
             </View>
           ))}
           {/* Change Password */}
           <TouchableOpacity className="flex-row justify-between items-center">
             <Text className="text-yellow-500 font-semibold text-sm">Change Password</Text>
             <Feather name="edit" size={16} color="orange" />
           </TouchableOpacity>
           {/* DOB */}
           <View>
             <Text className="text-gray-700 mb-1 font-medium">Date Of Birth</Text>
             <TouchableOpacity
               onPress={() => setShowDobPicker(true)}
               className="bg-gray-100 border border-gray-300 rounded-md px-4 py-3 text-sm"
             >
               <Text>{dob ? formatDate(dob) : 'Enter DOB'}</Text>
             </TouchableOpacity>
             <DateTimePickerModal
               isVisible={showDobPicker}
               mode="date"
               date={dob || new Date()}
               onConfirm={(date) => {
                 setDob(date);
                 setShowDobPicker(false);
               }}
               onCancel={() => setShowDobPicker(false)}
             />
           </View>
          {/* Gender Dropdown */}
            <View style={{ zIndex: 1000, marginBottom: 16 }}>
              <Text className="text-gray-700 mb-1 font-medium">Gender</Text>
              <DropDownPicker
                open={genderOpen}
                value={genderValue}
                items={genderItems}
                setOpen={setGenderOpen}
                setValue={setGenderValue}
                setItems={setGenderItems}
                placeholder="Select"
                style={{
                  backgroundColor: '#f3f4f6',
                  borderColor: '#d1d5db',
                  minHeight: 40,
                }}
                dropDownContainerStyle={{
                  backgroundColor: '#f3f4f6',
                  borderColor: '#d1d5db',
                }}
                textStyle={{
                  fontSize: 14,
                }}
                listMode="SCROLLVIEW" 
                nestedScrollEnabled={true}
              />
            </View>
           {['Address', 'City', 'Pincode'].map((label, index) => (
             <View key={index}>
               <Text className="text-gray-700 mb-1 font-medium">{label}</Text>
               <TextInput
                 placeholder={`Enter ${label}`}
                 keyboardType={label === 'Pincode' ? 'numeric' : 'default'}
                 className="bg-gray-100 border border-gray-300 rounded-md px-4 py-3 text-sm"
               />
             </View>
           ))}

                      {/* Joining Date */}
           <View>
             <Text className="text-gray-700 mb-1 font-medium">Joining Date</Text>
             <TouchableOpacity
               onPress={() => setShowJoiningPicker(true)}
               className="bg-gray-100 border border-gray-300 rounded-md px-4 py-3 text-sm"
             >
               <Text>{joiningDate ? formatDate(joiningDate) : 'dd-mm-yyyy'}</Text>
             </TouchableOpacity>
             <DateTimePickerModal
               isVisible={showJoiningPicker}
               mode="date"
               date={joiningDate || new Date()}
               onConfirm={(date) => {
                 setJoiningDate(date);
                 setShowJoiningPicker(false);
               }}
               onCancel={() => setShowJoiningPicker(false)}
             />
           </View>

           {/* Account Status Picker */}
            <View style={{ zIndex: 500, marginBottom: 16 }}>
              <Text className="text-gray-700 mb-1 font-medium">Account Status</Text>
              <DropDownPicker
                open={statusOpen}
                value={statusValue}
                items={statusItems}
                setOpen={setStatusOpen}
                setValue={setStatusValue}
                setItems={setStatusItems}
                placeholder="Select"
                style={{
                  backgroundColor: '#f3f4f6',
                  borderColor: '#d1d5db',
                  minHeight: 40,
                }}
                dropDownContainerStyle={{
                  backgroundColor: '#f3f4f6',
                  borderColor: '#d1d5db',
                }}
                textStyle={{
                  fontSize: 14,
                }}
                listMode="SCROLLVIEW"
                nestedScrollEnabled={true}
              />
            </View>
           {/* Links */}
           <TouchableOpacity className="flex-row justify-between items-center mt-3">
             <Text className="text-yellow-500 font-medium">View Documents</Text>
             <Feather name="chevron-right" size={18} color="orange" />
           </TouchableOpacity>

           <TouchableOpacity className="flex-row justify-between items-center mt-3">
             <Text className="text-yellow-500 font-medium">View Vehicles Documents</Text>
             <Feather name="chevron-right" size={18} color="orange" />
           </TouchableOpacity>

           {/* Save Button */}
           <TouchableOpacity className="bg-yellow-400 py-3 rounded-md mt-4">
             <Text className="text-white font-semibold text-center text-base">Save Changes</Text>
           </TouchableOpacity>
          </View>
        </View>
      </View>
      </ScrollView>
    </View>
  )
}
export default ProfileSettings



