import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Modal, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

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
  <View className="items-center mt-[-50px] mb-0">
    <View className="bg-white w-[85%] rounded-xl px-4 py-5">
      <Text className="text-[#FAB824] text-xl font-bold text-center">{title}</Text>
    </View>
  </View>
);

const SavedLocationScreen = () => {
  const navigation = useNavigation();
  const [editedLabel, setEditedLabel] = useState('');


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
  const [newLabel, setNewLabel] = useState('');
  const [newAddress, setNewAddress] = useState('');

  const openEditModal = (item) => {
    setCurrentItem(item);
    setEditedAddress(item.address);
     setEditedLabel(item.label);
    setEditModalVisible(true);
  };
  const saveEdit = () => {
  setSavedLocations((prev) =>
    prev.map((loc) =>
      loc.id === currentItem.id ? { ...loc, address: editedAddress, label: editedLabel } : loc
    )
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
    if (newLabel.trim() && newAddress.trim()) {
      const newLoc = {
        id: Date.now(),
        type: 'map-pin',
        label: newLabel.trim(),
        address: newAddress.trim(),
      };
      setSavedLocations([...savedLocations, newLoc]);
      setAddModalVisible(false);
      setNewLabel('');
      setNewAddress('');
    }
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 5 }} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <Header onBack={() => navigation.goBack()} />
        <TitleCard title="Saved Locations" />

        {/* Saved Location Cards */}
        {savedLocations.map((loc) => (
          <View key={loc.id} className="bg-white rounded-xl px-4 py-2 mx-4 mb-0">
            <View className="flex-row items-center">
              {/* Icon */}
              <View className="w-10 h-10 rounded-full bg-[#FAB824] items-center justify-center ml-4">
                <Feather name={loc.type} size={18} color="white" />
              </View>

              {/* Text and actions */}
              <View className="ml-4 flex-1">
                {/* Label + Edit/Delete in one row */}
                <View className="flex-row justify-between items-center">
                  <Text className="text-base font-semibold text-gray-800">{loc.label}</Text>
                  <View className="flex-row space-x-4">
                    <TouchableOpacity className="flex-row items-center mr-3" onPress={() => openEditModal(loc)}>
                      <Feather name="edit" size={16} color="#FB923C" />
                      <Text className="text-sm text-orange-500 ml-1">Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center mr-3" onPress={() => openDeleteModal(loc)}>
                      <Feather name="trash-2" size={16} color="#ec5526ff" />
                      <Text className="text-sm text-red-600 ml-1">Delete</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View className="mt-0 pr-[100px]">
                  <Text className="text-[12px] text-gray-600 mt-0">
                    {loc.address}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}

        {/* Add Location Button */}
        <TouchableOpacity onPress={() => setAddModalVisible(true)} className="bg-[#FAB824] mx-6 mt-4 mb-6 py-3 rounded-full flex-row items-center justify-center shadow-md">
          <Text className="text-white font-semibold ml-2">Add New Location</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Edit Modal */}
      <Modal transparent={true} visible={editModalVisible} animationType="fade">
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white rounded-xl p-6 w-[80%]">
            <Text className="text-lg font-semibold text-gray-800 mb-4">Edit Address</Text>
            <View className="border border-gray-300 rounded-md mb-4">
            <Picker
              selectedValue={editedLabel}
              onValueChange={(itemValue) => setEditedLabel(itemValue)}
              style={{ height: 50 }}
            >
              <Picker.Item label="Select label" value="" enabled={false} />
              <Picker.Item label="Home" value="Home" />
              <Picker.Item label="Office" value="Office" />
              <Picker.Item label="School" value="School" />
              <Picker.Item label="Other" value="Other" />
            </Picker>
          </View>

            <TextInput
              value={editedAddress}
              onChangeText={setEditedAddress}
              className="border border-gray-300 rounded-md px-3 py-2 mb-4 text-gray-800"
              placeholder="Enter new address"
            />
            <View className="flex-row justify-end space-x-4">
              <TouchableOpacity onPress={() => setEditModalVisible(false)} className="px-4 py-2 rounded-full border border-gray-300">
                <Text className="text-gray-600">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={saveEdit} className="bg-[#FAB824] px-4 py-2 rounded-full">
                <Text className="text-white font-semibold">Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Delete Modal */}
      <Modal transparent={true} visible={deleteModalVisible} animationType="fade">
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white rounded-xl p-6 w-[80%]">
            <Text className="text-lg font-semibold text-gray-800 mb-4">Delete Location</Text>
            <Text className="text-gray-600 mb-4">Are you sure you want to delete this location?</Text>
            <View className="flex-row justify-end space-x-4">
              <TouchableOpacity onPress={() => setDeleteModalVisible(false)} className="px-4 py-2 rounded-full border border-gray-300">
                <Text className="text-gray-600">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={confirmDelete} className="bg-red-600 px-4 py-2 rounded-full">
                <Text className="text-white font-semibold">Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Add Location Modal */}
      <Modal transparent={true} visible={addModalVisible} animationType="fade">
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white rounded-xl p-6 w-[85%]">
            <Text className="text-lg font-semibold text-gray-800 mb-4">Add New Location</Text>
            <View className="border border-gray-300 rounded-md mb-4">
            <Picker
              selectedValue={editedLabel}
              onValueChange={(itemValue) => setEditedLabel(itemValue)}
              style={{ height: 50 }}
            >
              <Picker.Item label="Select label" value="" enabled={false} />
              <Picker.Item label="Home" value="Home" />
              <Picker.Item label="Office" value="Office" />
              <Picker.Item label="School" value="School" />
              <Picker.Item label="Other" value="Other" />
            </Picker>
          </View>
            <TextInput
              value={newAddress}
              onChangeText={setNewAddress}
              className="border border-gray-300 rounded-md px-3 py-2 mb-4 text-gray-800"
              placeholder="Address"
            />
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
    </View>
  );
};

export default SavedLocationScreen;









// import React from 'react';
// import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
// import { Feather } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';

// // Header Component
// const Header = ({ onBack, backgroundColor = '#FAB824', height = 230 }) => (
//   <View
//     className="pt-28 pb-20 rounded-b-[100px] items-center relative"
//     style={{ backgroundColor, height }}
//   >
//     <TouchableOpacity
//       onPress={onBack}
//       className="absolute top-12 left-4 bg-white rounded-full w-10 h-10 items-center justify-center shadow-md"
//     >
//       <Feather name="chevron-left" size={20} color="black" />
//     </TouchableOpacity>
//   </View>
// );

// // Title Component
// const TitleCard = ({ title }) => (
//   <View className="items-center mt-[-50px] mb-5">
//     <View className="bg-white w-[85%] rounded-xl px-4 py-5">
//       <Text className="text-[#FAB824] text-xl font-bold text-center">{title}</Text>
//     </View>
//   </View>
// );

// const SavedLocationScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <View className="flex-1 bg-white">
//       <ScrollView
//         contentContainerStyle={{ flexGrow: 1, paddingBottom: 5 }}
//         keyboardShouldPersistTaps="handled"
//         showsVerticalScrollIndicator={false}
//       >
//         <Header onBack={() => navigation.goBack()} />
//         <TitleCard title="Saved Locations" />

//         {/* Saved Location Card */}
//         <View className="bg-white rounded-xl px-4 py-0 mx-4 mb-0">
//           <View className="flex-row justify-between items-center">

//             {/* Left Block: Icon, Home, Address (centered column) */}
//             <View className="flex-row items-center space-x-3 ml-5">
//               <View className="w-10 h-10 rounded-full bg-[#FAB824] items-center justify-center">
//                 <Feather name="home" size={18} color="white" />
//               </View>
//               <View className="ml-3">
//                 <Text className="text-base font-semibold text-gray-800">Home</Text>
//                 <Text className="text-sm text-gray-500">45, 3rd Cross, Vellore</Text>
//               </View>
//             </View>

//             {/* Right Actions */}
//             <View className="flex-row items-center space-x-0 mr-5">
//               <TouchableOpacity className="flex-row items-center">
//                 <Feather name="edit" size={16} color="#FB923C" />
//                 <Text className="text-sm text-orange-500 ml-1">Edit</Text>
//               </TouchableOpacity>

//               <TouchableOpacity className="flex-row items-center ml-2">
//                 <Feather name="trash-2" size={16} color="#ec5526ff" />
//                 <Text className="text-sm text-red-600 ml-1">Delete</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default SavedLocationScreen;







// import { Image, StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native'
// import { Feather } from '@expo/vector-icons';
// import React,{ useState } from 'react'


// const SavedLocationScreen = () => {
//   return (
//     <View >
//         <ScrollView
//                 className="flex:1 bg-white"
//                 contentContainerStyle={{ flexGrow: 1, paddingBottom: 5 }}
//                 keyboardShouldPersistTaps="handled"
//                 showsVerticalScrollIndicator={false}
//               >
//                 {/* Header */}
//                 <View className="bg-[#FAB824] h-64 pt-28 pb-20 rounded-b-[100px] items-center relative">
//                   <TouchableOpacity
//                     onPress={() => navigation.goBack()}
//                     className="absolute top-12 left-4 bg-white rounded-full w-10 h-10 items-center justify-center shadow-md"
//                   >
//                     <Feather name="chevron-left" size={20} color="black" />
//                   </TouchableOpacity>
//                 </View>
        
//                 {/* Main Content */}
//                 <View className="items-center mt-[-50px] mb-5">
//                   <View className="bg-white w-[85%] rounded-xl px-4 py-5">
//                     <Text className="text-[#FAB824] text-xl font-bold text-center">Saved Location</Text>
//                   </View>
//                 </View>
//         </ScrollView>
//     </View>
//   )
// }

// export default SavedLocationScreen
