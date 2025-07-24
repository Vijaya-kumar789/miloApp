


// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Image,
//   TouchableOpacity,
//   Platform,
//   ScrollView,
//   KeyboardAvoidingView,
// } from 'react-native';
// import { Feather } from '@expo/vector-icons';
// import * as ImagePicker from 'expo-image-picker';
// import { Picker } from '@react-native-picker/picker';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';

// const ProfileSettings = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [dob, setDob] = useState(null);
//   const [joiningDate, setJoiningDate] = useState(null);
//   const [showDobPicker, setShowDobPicker] = useState(false);
//   const [showJoiningPicker, setShowJoiningPicker] = useState(false);
//   const [gender, setGender] = useState('');
//   const [accountStatus, setAccountStatus] = useState('');

//   const handleChoosePhoto = async () => {
//     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (!permissionResult.granted) {
//       alert('Permission to access gallery is required!');
//       return;
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       quality: 1,
//       allowsEditing: true,
//     });

//     if (!result.canceled) {
//       setSelectedImage(result.assets[0].uri);
//     }
//   };

//   const formatDate = (date) => {
//     if (!date) return '';
//     const d = new Date(date);
//     const day = String(d.getDate()).padStart(2, '0');
//     const month = String(d.getMonth() + 1).padStart(2, '0');
//     const year = d.getFullYear();
//     return `${day}-${month}-${year}`;
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//       style={{ flex: 1 }}
//     >
//       <ScrollView
//         className="bg-white"
//         contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}
//         keyboardShouldPersistTaps="handled"
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Header */}
//         <View className="bg-[#FAB824] pt-12 pb-16 rounded-b-[100px] items-center relative">
//           <TouchableOpacity className="absolute top-12 left-4 bg-white rounded-full w-10 h-10 items-center justify-center shadow-md">
//             <Feather name="chevron-left" size={20} color="black" />
//           </TouchableOpacity>

//           <Image
//             source={{
//               uri: selectedImage
//                 ? selectedImage
//                 : 'https://randomuser.me/api/portraits/women/44.jpg',
//             }}
//             className="w-24 h-24 rounded-full border-4 border-white"
//           />

//           <TouchableOpacity
//             onPress={handleChoosePhoto}
//             className="mt-2 px-4 py-2 bg-yellow-500 rounded-full"
//           >
//             <Text className="text-white font-semibold">Choose Photo</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Profile Summary Card */}
//         <View className="items-center mt-[-50px] mb-5">
//           <View className="bg-white w-[85%] rounded-xl px-4 py-5">
//             <Text className="text-[#FAB824] text-xl font-bold text-center mb-4">
//               My Profile
//             </Text>

//             <View className="flex-row justify-between">
//               {[
//                 { icon: 'star', label: '4.8', desc: 'Ratings' },
//                 { icon: 'truck', label: '40', desc: 'Trips' },
//                 { icon: 'user', label: '5', desc: 'Years' },
//               ].map((item, idx) => (
//                 <View key={idx} className="w-8 h-8 rounded-full bg-[#FAB824] items-center mb-0">
//                   <Feather name={item.icon} size={24} color="white" />
//                   <Text className="font-bold text-lg mt-1">{item.label}</Text>
//                   <Text className="text-xs text-gray-600">{item.desc}</Text>
//                 </View>
//               ))}
//             </View>
//           </View>
//         </View>

//         {/* Form Section */}
//         <View className="bg-white w-[90%] self-center rounded-xl pt-6 px-4 py-5 space-y-4 mb-10">
//           {['Full Name', 'Driver ID', 'Phone Number', 'E-mail Address'].map((label, index) => (
//             <View key={index}>
//               <Text className="text-gray-700 mb-1 font-medium">{label}</Text>
//               <TextInput
//                 placeholder={`Enter ${label}`}
//                 keyboardType={label.includes('Phone') ? 'numeric' : 'default'}
//                 className="bg-gray-100 border border-gray-300 rounded-md px-4 py-3 text-sm"
//               />
//             </View>
//           ))}

//           {/* Change Password */}
//           <TouchableOpacity className="flex-row justify-between items-center">
//             <Text className="text-yellow-500 font-semibold text-sm">Change Password</Text>
//             <Feather name="edit" size={16} color="orange" />
//           </TouchableOpacity>

//           {/* DOB */}
//           <View>
//             <Text className="text-gray-700 mb-1 font-medium">Date Of Birth</Text>
//             <TouchableOpacity
//               onPress={() => setShowDobPicker(true)}
//               className="bg-gray-100 border border-gray-300 rounded-md px-4 py-3 text-sm"
//             >
//               <Text>{dob ? formatDate(dob) : 'Enter DOB'}</Text>
//             </TouchableOpacity>
//             <DateTimePickerModal
//               isVisible={showDobPicker}
//               mode="date"
//               date={dob || new Date()}
//               onConfirm={(date) => {
//                 setDob(date);
//                 setShowDobPicker(false);
//               }}
//               onCancel={() => setShowDobPicker(false)}
//             />
//           </View>

//           {/* Gender Picker */}
//           <View>
//             <Text className="text-gray-700 mb-1 font-medium">Gender</Text>
//             <View className="bg-gray-100 border border-gray-300 rounded-md px-4 py-3">
//               <Picker
//                 selectedValue={gender}
//                 onValueChange={(itemValue) => setGender(itemValue)}
//               >
//                 <Picker.Item label="Select" value="" />
//                 <Picker.Item label="Male" value="male" />
//                 <Picker.Item label="Female" value="female" />
//                 <Picker.Item label="Other" value="other" />
//               </Picker>
//             </View>
//           </View>

//           {['Address', 'City', 'Pincode'].map((label, index) => (
//             <View key={index}>
//               <Text className="text-gray-700 mb-1 font-medium">{label}</Text>
//               <TextInput
//                 placeholder={`Enter ${label}`}
//                 keyboardType={label === 'Pincode' ? 'numeric' : 'default'}
//                 className="bg-gray-100 border border-gray-300 rounded-md px-4 py-3 text-sm"
//               />
//             </View>
//           ))}

//           {/* Joining Date */}
//           <View>
//             <Text className="text-gray-700 mb-1 font-medium">Joining Date</Text>
//             <TouchableOpacity
//               onPress={() => setShowJoiningPicker(true)}
//               className="bg-gray-100 border border-gray-300 rounded-md px-4 py-3 text-sm"
//             >
//               <Text>{joiningDate ? formatDate(joiningDate) : 'dd-mm-yyyy'}</Text>
//             </TouchableOpacity>
//             <DateTimePickerModal
//               isVisible={showJoiningPicker}
//               mode="date"
//               date={joiningDate || new Date()}
//               onConfirm={(date) => {
//                 setJoiningDate(date);
//                 setShowJoiningPicker(false);
//               }}
//               onCancel={() => setShowJoiningPicker(false)}
//             />
//           </View>

//           {/* Account Status Picker */}
//           <View>
//             <Text className="text-gray-700 mb-1 font-medium">Account Status</Text>
//             <View className="bg-gray-100 border border-gray-300 rounded-md px-4 py-3">
//               <Picker
//                 selectedValue={accountStatus}
//                 onValueChange={(itemValue) => setAccountStatus(itemValue)}
//               >
//                 <Picker.Item label="Select" value="" />
//                 <Picker.Item label="Active" value="active" />
//                 <Picker.Item label="Inactive" value="inactive" />
//                 <Picker.Item label="Pending" value="pending" />
//               </Picker>
//             </View>
//           </View>

//           {/* Links */}
//           <TouchableOpacity className="flex-row justify-between items-center mt-3">
//             <Text className="text-yellow-500 font-medium">View Documents</Text>
//             <Feather name="chevron-right" size={18} color="orange" />
//           </TouchableOpacity>

//           <TouchableOpacity className="flex-row justify-between items-center mt-3">
//             <Text className="text-yellow-500 font-medium">View Vehicles Documents</Text>
//             <Feather name="chevron-right" size={18} color="orange" />
//           </TouchableOpacity>

//           {/* Save Button */}
//           <TouchableOpacity className="bg-yellow-400 py-3 rounded-md mt-4">
//             <Text className="text-white font-semibold text-center text-base">Save Changes</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// export default ProfileSettings;














// import { Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
// import React, { useState } from 'react';
// import { Feather } from '@expo/vector-icons';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';

// const TripHistoryScreen = () => {
//   const navigation = useNavigation();
//   const [activeTab, setActiveTab] = useState('Upcoming');

//   const rideData = [
//     {
//       id: 1,
//       driver: 'John Doe',
//       car: 'Hyundai i20',
//       seats: 4,
//       pickup: 'MG Road',
//       drop: 'Anna Nagar',
//       tripType: 'One way Trip',
//       date: new Date(),
//       status: 'Upcoming',
//       image: require('../../assets/images/Car.png'),
//     },
//     {
    //   id: 2,
    //   driver: 'Priya Sharma',
    //   car: 'Tata Nexon',
    //   seats: 4,
    //   pickup: 'Velachery',
    //   drop: 'OMR',
    //   tripType: 'Round Trip',
    //   date: new Date(new Date().setDate(new Date().getDate() - 1)),
    //   status: 'Upcoming',
    //   image: require('../../assets/images/Car.png'),
    // },
    // {
    //   id: 3,
    //   driver: 'Amit Singh',
    //   car: 'Swift Dzire',
    //   seats: 4,
    //   pickup: 'Guindy',
    //   drop: 'T Nagar',
    //   tripType: 'One way Trip',
    //   date: new Date('2025-06-18T14:00:00'),
    //   status: 'Upcoming',
    //   image: require('../../assets/images/Car.png'),
    // },
//   ];

//   const isToday = (d) => {
//     const today = new Date();
//     return (
//       d.getDate() === today.getDate() &&
//       d.getMonth() === today.getMonth() &&
//       d.getFullYear() === today.getFullYear()
//     );
//   };

//   const isYesterday = (d) => {
//     const yesterday = new Date();
//     yesterday.setDate(yesterday.getDate() - 1);
//     return (
//       d.getDate() === yesterday.getDate() &&
//       d.getMonth() === yesterday.getMonth() &&
//       d.getFullYear() === yesterday.getFullYear()
//     );
//   };

//   const isLastMonth = (d) => {
//     const now = new Date();
//     const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
//     return (
//       d.getMonth() === lastMonth.getMonth() &&
//       d.getFullYear() === lastMonth.getFullYear()
//     );
//   };

//   const todayRides = rideData.filter((r) => isToday(r.date));
//   const yesterdayRides = rideData.filter((r) => isYesterday(r.date));
//   const lastMonthRides = rideData.filter((r) => isLastMonth(r.date));

//   const renderRideCard = (ride) => (
//     <View key={ride.id} className="flex-row ml-10 mr-10 bg-[#FFF6DF] p-3 rounded-xl shadow-xl mb-4 items-center h-50 space-x-4">
//       <View className="items-center justify-center space-y-2">
//         <Image
//           source={ride.image}
//           className="w-[115px] h-[65px] rounded-2xl shadow-md border border-gray-300"
//         />
//         <TouchableOpacity className="px-4 py-1 rounded-md mt-4">
//           <Text className="text-sm text-[#AD7704] font-semibold">{ride.status}</Text>
//         </TouchableOpacity>
//       </View>

//       <View className="flex-1 pl-2">
//         <Text className="text-sm font-medium text-gray-800">Driver: {ride.driver}</Text>
//         <View className="mb-0 flex-row items-center space-x-1">
//           <Text className="text-gray-800 text-sm font-medium">{ride.car}</Text>
//           <Text className="text-black text-xl pl-2">|</Text>
//           <Text className="text-gray-800 text-sm font-medium pl-2">{ride.seats} Seater</Text>
//         </View>
//         <View className="mb-1 flex-row items-center space-x-1">
//           <Text className="text-gray-800 text-sm font-medium">{ride.pickup}</Text>
//           <Feather name="arrow-right" size={16} color="#FFAE00" style={{ marginLeft: 8 }} />
//           <Text className="text-gray-800 text-sm font-medium pl-2">{ride.drop}</Text>
//         </View>
//         <View className="flex-row justify-between items-center mt-1">
//           <TouchableOpacity className="bg-white px-1 py-1 rounded-lg">
//             <Text className="text-xs text-[#BA8611] font-semibold">{ride.tripType}</Text>
//           </TouchableOpacity>
//         </View>
//         <View className="flex-row justify-end mt-1">
//           <Text className="text-xs text-gray-500">{ride.date.toLocaleString()}</Text>
//         </View>
//       </View>
//     </View>
//   );

//   return (
//     <View>
//       <ScrollView
//         className="flex:1 bg-white"
//         contentContainerStyle={{ flexGrow: 1, paddingBottom: 5 }}
//         keyboardShouldPersistTaps="handled"
//         showsVerticalScrollIndicator={false}
//       >
//         <View className="bg-[#FAB824] pt-28 pb-20 rounded-b-[100px] items-center relative">
//           <TouchableOpacity
//             onPress={() => navigation.goBack()}
//             className="absolute top-12 left-4 bg-white rounded-full w-10 h-10 items-center justify-center shadow-md"
//           >
//             <Feather name="chevron-left" size={20} color="black" />
//           </TouchableOpacity>
//           <View className="mb-2">
//             <Image
//               source={require('../../assets/images/logo.png')}
//               className="w-28 h-20"
//               resizeMode="contain"
//             />
//           </View>
//         </View>

//         <View className="items-center mt-[-50px] mb-5">
//           <View className=" bg-white w-[85%] rounded-xl px-4 py-5">
//             <Text className="text-[#FAB824] text-xl font-bold text-center mb-0">Ride History</Text>
//           </View>

//           <View className="flex-row justify-center mb-1">
//             {['Ride History', 'Upcoming', 'Scheduled'].map((tab) => (
//               <TouchableOpacity
//                 key={tab}
//                 onPress={() => setActiveTab(tab)}
//                 className={`px-3 py-2 rounded-full ${activeTab === tab ? 'bg-yellow-400' : 'bg-gray-50'}`}
//               >
//                 <Text className={`text-sm font-semibold ${activeTab === tab ? 'text-white' : 'text-gray-700'}`}>
//                   {tab}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           <View className="flex-row justify-end w-full px-6 mb-4 mr-6">
//             <TouchableOpacity
//               onPress={() => {
//                 alert('Filter options clicked');
//               }}
//               className="bg-white px-3 py-2 rounded-full flex-row items-center"
//             >
//               <MaterialCommunityIcons name="filter-variant" size={20} color="#FAB824" />
//               <Text className="ml-1 text-sm text-yellow-500 font-medium">Filter</Text>
//             </TouchableOpacity>
//           </View>

//           {/* Ride Groups by Date */}
//           {activeTab === 'Upcoming' ? (
//             <>
//               {todayRides.length > 0 && (
//                 <>
//                   <Text className="text-base font-bold text-gray-700 ml-10 mb-1">Today</Text>
//                   {todayRides.map((ride) => renderRideCard(ride))}
//                 </>
//               )}
//               {yesterdayRides.length > 0 && (
//                 <>
//                   <Text className="text-base font-bold text-gray-700 ml-10 mt-2 mb-1">Yesterday</Text>
//                   {yesterdayRides.map((ride) => renderRideCard(ride))}
//                 </>
//               )}
//               {lastMonthRides.length > 0 && (
//                 <>
//                   <Text className="text-base font-bold text-gray-700 ml-10 mt-2 mb-1">Last Month</Text>
//                   {lastMonthRides.map((ride) => renderRideCard(ride))}
//                 </>
//               )}
//             </>
//           ) : (
//             <View className="p-4 bg-[#f3f4f6] rounded-md">
//               <Text className="text-gray-800 text-center">Here are your past 10 trips.</Text>
//             </View>
//           )}
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default TripHistoryScreen;









// import { Image,Text, View,TouchableOpacity,ScrollView,} from 'react-native'
// import React, { useState } from 'react';
// import { Feather } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons';
// import { MaterialCommunityIcons } from '@expo/vector-icons'; 
// import { useNavigation } from '@react-navigation/native';
// const TripHistoryScreen = () => {
//   const navigation = useNavigation();
//   const [activeTab, setActiveTab] = useState('Upcoming');
//   const rideData = [
//   {
//     id: 1,
//     driver: 'John Doe',
//     car: 'Hyundai i20',
//     seats: 4,
//     pickup: 'MG Road',
//     drop: 'Anna Nagar',
//     tripType: 'One way Trip',
//     date: '12 Jul 2025, 4:30 PM',
//     status: 'Upcoming',
//     image: require('../../assets/images/Car.png'),
//   },
//   {
//     id: 2,
//     driver: 'Priya Sharma',
//     car: 'Tata Nexon',
//     seats: 4,
//     pickup: 'Velachery',
//     drop: 'OMR',
//     tripType: 'Round Trip',
//     date: '15 Jul 2025, 10:00 AM',
//     status: 'Upcoming',
//     image: require('../../assets/images/Car.png'),
//   },
// ];

//   return (
//     <View>
//        <ScrollView
//         className="flex:1 bg-white"
//         contentContainerStyle={{ flexGrow: 1,paddingBottom: 5 }}
//         keyboardShouldPersistTaps="handled"
//         showsVerticalScrollIndicator={false}
//       >
//           <View className="bg-[#FAB824] pt-28 pb-20 rounded-b-[100px] items-center relative">
//               <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-12 left-4 bg-white rounded-full w-10 h-10 items-center justify-center shadow-md">
//                 <Feather name="chevron-left" size={20} color="black" />
//               </TouchableOpacity>
//               <View className="mb-2">
//                       <Image
//                         source={require('../../assets/images/logo.png')}
//                         className="w-28 h-20"
//                         resizeMode="contain"
//                       />
//               </View>
//               </View>
//                 <View className="items-center mt-[-50px] mb-5">
//                   <View className=" bg-white w-[85%] rounded-xl px-4 py-5">
//                     <Text className="text-[#FAB824] text-xl font-bold text-center mb-0">Ride History</Text>
//                   </View>
//                   <View className="flex-row justify-center mb-1">
//               {['Ride History','Upcoming', 'Scheduled'].map((tab) => (
//                 <TouchableOpacity
//                   key={tab}
//                   onPress={() => setActiveTab(tab)}
//                   className={`px-3 py-2 rounded-full ${
//                     activeTab === tab
//                       ? 'bg-yellow-400'
//                       : 'bg-gray-50'
//                   }`}
//                 >
//                   <Text
//                     className={`text-sm font-semibold ${
//                       activeTab === tab ? 'text-white' : 'text-gray-700'
//                     }`}
//                   >
//                     {tab}
//                   </Text>
//                 </TouchableOpacity>
//               ))}
//                </View>
//               {/* Filter Button */}
//               <View className="flex-row justify-end w-full px-6 mb-4 mr-6">
//                 <TouchableOpacity
//                   onPress={() => {
//                     alert('Filter options clicked');
//                   }}
//                   className="bg-white px-3 py-2 rounded-full flex-row items-center"
//                 >
//                    <MaterialCommunityIcons name="filter-variant" size={20} color="#FAB824" />
//                   <Text className="ml-1 text-sm text-yellow-500 font-medium">Filter</Text>
//                 </TouchableOpacity>
//               </View>
//             {/* Conditional Content */}
//             {activeTab === 'Upcoming' ? (
//               rideData
//                 .filter((ride) => ride.status === 'Upcoming')
//                 .map((ride) => (
//                   <View key={ride.id} className="flex-row ml-10 mr-10 bg-[#FFF6DF] p-3 rounded-xl shadow-xl mb-4 items-center h-50 space-x-4">
//                     {/* Left: Image + Status */}
//                     <View className="items-center justify-center space-y-2">
//                       <Image
//                         source={ride.image}
//                         className="w-[115px] h-[65px] rounded-2xl shadow-md border border-gray-300"
//                       />
//                       <TouchableOpacity className="px-4 py-1 rounded-md mt-4">
//                         <Text className="text-sm text-[#AD7704] font-semibold">{ride.status}</Text>
//                       </TouchableOpacity>
//                     </View>

//                     {/* Right: Trip Details */}
//                     <View className="flex-1 pl-2">
//                       <View className="flex-row justify-between items-center mb-0">
//                         <Text className="text-sm font-medium text-gray-800">Driver: {ride.driver}</Text>
//                       </View>

//                       <View className="mb-0 flex-row items-center space-x-1">
//                         <Text className="text-gray-800 text-sm font-medium">{ride.car}</Text>
//                         <Text className="text-black text-xl pl-2">|</Text>
//                         <Text className="text-gray-800 text-sm font-medium pl-2">{ride.seats} Seater</Text>
//                       </View>

//                       <View className="mb-1 flex-row items-center space-x-1">
//                         <Text className="text-gray-800 text-sm font-medium">{ride.pickup}</Text>
//                         <Feather name="arrow-right" size={16} color="#FFAE00" style={{ marginLeft: 8 }} />
//                         <Text className="text-gray-800 text-sm font-medium pl-2">{ride.drop}</Text>
//                       </View>

//                       <View className="flex-row justify-between items-center mt-1">
//                         <TouchableOpacity className="bg-white px-1 py-1 rounded-lg">
//                           <Text className="text-xs text-[#BA8611] font-semibold">{ride.tripType}</Text>
//                         </TouchableOpacity>
//                       </View>

//                       <View className="flex-row justify-end mt-1">
//                         <Text className="text-xs text-gray-500">{ride.date}</Text>
//                       </View>
//                     </View>
//                   </View>
//                 ))
//             ) : (
//               <View className="p-4 bg-[#f3f4f6] rounded-md">
//                 <Text className="text-gray-800 text-center">Here are your past 10 trips.</Text>
//               </View>
//             )}
//           </View>   
//       </ScrollView>
//     </View>
//   )
// }
// export default TripHistoryScreen



 {
      id: 1,
      driver: 'John Doe',
      car: 'Hyundai i20',
      seats: 4,
      pickup: 'MG Road',
      drop: 'Anna Nagar',
      tripType: 'One way Trip',
      date: new Date(),
      status: 'Upcoming',
      image: require('../../assets/images/Car.png'),
    },
    {
      id: 2,
      driver: 'Priya Sharma',
      car: 'Tata Nexon',
      seats: 4,
      pickup: 'Velachery',
      drop: 'OMR',
      tripType: 'Round Trip',
      date: new Date(new Date().setDate(new Date().getDate() - 1)), // Yesterday
      status: 'Upcoming',
      image: require('../../assets/images/Car.png'),
    },
    {
      id: 3,
      driver: 'Amit Singh',
      car: 'Swift Dzire',
      seats: 4,
      pickup: 'Guindy',
      drop: 'T Nagar',
      tripType: 'One way Trip',
      date: new Date('2025-06-18T14:00:00'),
      status: 'Upcoming',
      image: require('../../assets/images/Car.png'),
    },
    {
      id: 4,
      driver: 'Neha Raj',
      car: 'Honda City',
      seats: 4,
      pickup: 'Airport',
      drop: 'Adyar',
      tripType: 'Round Trip',
      date: new Date(),
      status: 'Completed',
      image: require('../../assets/images/Car.png'),
    },
    {
      id: 5,
      driver: 'Rahul Kumar',
      car: 'Kia Seltos',
      seats: 4,
      pickup: 'Tambaram',
      drop: 'Ambattur',
      tripType: 'One way Trip',
      date: new Date(),
      status: 'Scheduled',
      image: require('../../assets/images/Car.png'),
    },
    {
      id: 6,
      driver: 'John Doe',
      car: 'Hyundai i20',
      seats: 4,
      pickup: 'MG Road',
      drop: 'Anna Nagar',
      tripType: 'One way Trip',
      date: new Date(),
      status: 'Completed',
      image: require('../../assets/images/Car.png'),
    },
    {
      id: 7,
      driver: 'Priya Sharma',
      car: 'Tata Nexon',
      seats: 4,
      pickup: 'Velachery',
      drop: 'OMR',
      tripType: 'Round Trip',
      date: new Date(new Date().setDate(new Date().getDate() - 1)), // Yesterday
      status: 'Completed',
      image: require('../../assets/images/Car.png'),
    },





    import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Modal, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

// Header Component
const Header = ({ onBack, backgroundColor = '#FAB824', height = 230 }) => (
  <View className="pt-28 pb-20 rounded-b-[100px] items-center relative" style={{ backgroundColor, height }}>
    <TouchableOpacity onPress={onBack} className="absolute top-12 left-4 bg-white rounded-full w-10 h-10 items-center justify-center shadow-md">
      <Feather name="chevron-left" size={20} color="black" />
    </TouchableOpacity>
  </View>
);

// Title Component
const TitleCard = ({ title }) => (
  <View className="items-center mt-[-50px] mb-5">
    <View className="bg-white w-[85%] rounded-xl px-4 py-5">
      <Text className="text-[#FAB824] text-xl font-bold text-center">{title}</Text>
    </View>
  </View>
);

const SavedLocationScreen = () => {
  const navigation = useNavigation();

  const [savedLocations, setSavedLocations] = useState([
    { id: 1, type: 'home', label: 'Home', address: '45, 3rd Cross, Vellore' },
    { id: 2, type: 'briefcase', label: 'Office', address: 'IT Park, Phase 2, Chennai' },
    { id: 3, type: 'book', label: 'School', address: 'ABC Public School, Katpadi' },
    { id: 4, type: 'map-pin', label: 'Other', address: 'XYZ Market, Gandhi Road' },
  ]);

  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);

  const [currentItem, setCurrentItem] = useState(null);
  const [editedAddress, setEditedAddress] = useState('');
  const [newLabel, setNewLabel] = useState('Home');
  const [newAddress, setNewAddress] = useState('');

  const iconMap = {
    Home: 'home',
    Office: 'briefcase',
    School: 'book',
    Other: 'map-pin',
  };

  const openEditModal = (item) => {
    setCurrentItem(item);
    setEditedAddress(item.address);
    setEditModalVisible(true);
  };

  const saveEdit = () => {
    setSavedLocations((prev) =>
      prev.map((loc) => (loc.id === currentItem.id ? { ...loc, address: editedAddress } : loc))
    );
    setEditModalVisible(false);
  };

  const openDeleteModal = (item) => {
    setCurrentItem(item);
    setDeleteModalVisible(true);
  };

  const confirmDelete = () => {
    setSavedLocations((prev) => prev.filter((loc) => loc.id !== currentItem.id));
    setDeleteModalVisible(false);
  };

  const addNewLocation = () => {
    if (newLabel && newAddress.trim()) {
      const newLoc = {
        id: Date.now(),
        type: iconMap[newLabel] || 'map-pin',
        label: newLabel,
        address: newAddress.trim(),
      };
      setSavedLocations([...savedLocations, newLoc]);
      setAddModalVisible(false);
      setNewLabel('Home');
      setNewAddress('');
    }
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 5 }} keyboardShouldPersistTaps="handled">
        <Header onBack={() => navigation.goBack()} />
        <TitleCard title="Saved Locations" />

        {savedLocations.map((loc) => (
          <View key={loc.id} className="bg-white rounded-xl px-4 py-0 mx-4 mb-3">
            <View className="flex-row justify-between items-center">
              <View className="flex-row items-center space-x-3 ml-5">
                <View className="w-10 h-10 rounded-full bg-[#FAB824] items-center justify-center">
                  <Feather name={loc.type} size={18} color="white" />
                </View>
                <View className="ml-3">
                  <Text className="text-base font-semibold text-gray-800">{loc.label}</Text>
                  <Text className="text-sm text-gray-500">{loc.address}</Text>
                </View>
              </View>

              <View className="flex-row items-center space-x-0 mr-5">
                <TouchableOpacity className="flex-row items-center" onPress={() => openEditModal(loc)}>
                  <Feather name="edit" size={16} color="#FB923C" />
                  <Text className="text-sm text-orange-500 ml-1">Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity className="flex-row items-center ml-2" onPress={() => openDeleteModal(loc)}>
                  <Feather name="trash-2" size={16} color="#ec5526ff" />
                  <Text className="text-sm text-red-600 ml-1">Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        {/* Add Location Button */}
        <TouchableOpacity onPress={() => setAddModalVisible(true)} className="bg-[#FAB824] mx-6 mt-4 mb-6 py-3 rounded-full flex-row items-center justify-center shadow-md">
          <Feather name="plus" size={18} color="white" />
          <Text className="text-white font-semibold ml-2">Add Location</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Add Location Modal with Dropdown */}
      <Modal transparent={true} visible={addModalVisible} animationType="fade">
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white rounded-xl p-6 w-[85%]">
            <Text className="text-lg font-semibold text-gray-800 mb-4">Add New Location</Text>

            {/* Dropdown Label */}
            <View className="border border-gray-300 rounded-md mb-4">
              <Picker
                selectedValue={newLabel}
                onValueChange={(itemValue) => setNewLabel(itemValue)}
                style={{ height: 45, color: 'black' }}
              >
                <Picker.Item label="Home" value="Home" />
                <Picker.Item label="Office" value="Office" />
                <Picker.Item label="School" value="School" />
                <Picker.Item label="Other" value="Other" />
              </Picker>
            </View>

            {/* Address Input */}
            <TextInput
              value={newAddress}
              onChangeText={setNewAddress}
              className="border border-gray-300 rounded-md px-3 py-2 mb-4 text-gray-800"
              placeholder="Address"
            />

            {/* Action Buttons */}
            <View className="flex-row justify-end space-x-4">
              <TouchableOpacity onPress={() => setAddModalVisible(false)} className="px-4 py-2 rounded-full border border-gray-300">
                <Text className="text-gray-600">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={addNewLocation} className="bg-[#FAB824] px-4 py-2 rounded-full">
                <Text className="text-white font-semibold">Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Edit + Delete modals (unchanged) */}
      {/* ... (same as before, include them as shown in earlier version) */}
    </View>
  );
};

export default SavedLocationScreen;


// // import { registerRootComponent } from 'expo';

// // import App from './App.jsx';

// // registerRootComponent(App);


// import express from 'express';
// import env from 'dotenv';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import Router from './src/routes/index.js';

// env.config();


// const app = express();

// app.use(express.json())
// app.use(bodyParser.json());

// //kaviya
// // app.use(cors({origin:"http://localhost:5173",credentials: true}));

// const allowedOrigins = [
//   'http://localhost:5173', // React Web
//   'http://localhost:19006', // React Native Expo Web Preview
//   'exp://127.0.0.1:19000', // React Native Expo (mobile)
// ];

// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true
// }));


// let PORT = process.env.PORT || 5000;

// app.use('/api/v1', Router);

// app.listen(PORT, () => console.log(`🚀 server is running on port ${PORT}`));

// app.use((err,req,res,next)=>{
    
//     const statusCode = err.statusCode || 500;
//     const message = err.message || '❌ Internal server Error';
//     return res.status(statusCode).json({
//         success : false,
//         statusCode,
//         message
//     })
// })


# const BASE_URL = "https://your-backend.com/api";
const BASE_URL = "http://192.168.1.10:8000/api/v1";


PORT = 8000
DB_URL = mongodb+srv://leastactioncompany:16aLBjIEvwrq0V64@cluster0.cw64cs8.mongodb.net
DB_NAME =milo
JWT_SECRET=welcomemilo
JWT_EXP=24D
EMAIL_USER=giridharan831@gmail.com
EMAIL_PASS=zzzs wegh uvch cliv