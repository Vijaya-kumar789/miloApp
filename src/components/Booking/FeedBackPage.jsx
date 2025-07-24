import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Animated, { FadeInDown, ZoomIn } from 'react-native-reanimated';

const tags = [
  "Clean Car",
  "Friendly Driver",
  "On-Time",
  "Comfortable Ride",
  "Know the Route",
];

const FeedBackPage = () => {
  const [rating, setRating] = useState(0);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleSubmit = () => {
    Alert.alert("Thank you!", "Your feedback has been submitted.");
  };

  return (
    <ScrollView className="bg-yellow-200" contentContainerStyle={{ flexGrow: 1 }}>
      <View className="relative items-center justify-center py-10">

        {/* Ellipse Background */}
        <View className="absolute top-0 left-0 right-0 items-center z-[-1]">
          <View className="w-[400] h-[490] rounded-full bg-yellow-500 opacity-50 mt-[-30]" />
          <View className="w-[400] h-[490] rounded-full bg-yellow-600 opacity-50 mt-[-370]" />
          <View className="w-[380] h-[490] rounded-full bg-yellow-400 opacity-50 mt-[-380]" />
          <View className="w-[140] h-[140] rounded-full bg-yellow-400 opacity-50 mt-[-395]" />
        </View>

        {/* Feedback Card with Animation */}
        <Animated.View
          entering={ZoomIn.duration(700)}
          className="bg-white w-11/12 rounded-3xl p-6 shadow-md items-center mt-[400]"
        >
          <Text className="text-xl font-semibold text-yellow-600">Rate Your Ride Experience</Text>
          <Text className="text-sm text-gray-500 mt-2">How was your Ride?</Text>

          {/* Stars */}
          <View className="flex-row mt-4 gap-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity key={star} onPress={() => setRating(star)}>
                <FontAwesome
                  name="star"
                  size={30}
                  color={star <= rating ? '#FACC15' : '#D1D5DB'}
                />
              </TouchableOpacity>
            ))}
          </View>

          {/* Tags with selection */}
          <Text className="text-sm mt-6 mb-2 font-medium text-gray-700">Quick Feedback</Text>
          <View className="flex-row flex-wrap justify-center gap-2">
            {tags.map(tag => {
              const isSelected = selectedTags.includes(tag);
              return (
                <TouchableOpacity
                  key={tag}
                  onPress={() => handleTagClick(tag)}
                  className={`px-3 py-1 rounded-full border text-sm ${
                    isSelected
                      ? 'bg-yellow-400 text-white border-yellow-800'
                      : 'bg-[#FFEDC4] text-yellow-700 border-yellow-400'
                  }`}
                >
                  <Text className="text-sm">{tag}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            onPress={handleSubmit}
            className="mt-6 w-full bg-yellow-500 text-white py-3 rounded-full items-center"
          >
            <Text className="text-white text-sm font-semibold">Submit Feedback</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </ScrollView>
  );
};

export default FeedBackPage;




// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';

// const tags = [
//   "Clean Car",
//   "Friendly Driver",
//   "On-Time",
//   "Comfortable Ride",
//   "Know the Route",
// ];

// const FeedBackPage = () => {
//   const [rating, setRating] = useState(0);
//   const [selectedTags, setSelectedTags] = useState([]);

//   const handleTagClick = (tag) => {
//     setSelectedTags(prev =>
//       prev.includes(tag)
//         ? prev.filter(t => t !== tag)
//         : [...prev, tag]
//     );
//   };

//   const handleSubmit = () => {
//     Alert.alert("Thank you!", "Your feedback has been submitted.");
//   };

//   return (
//     <ScrollView className="bg-yellow-200" contentContainerStyle={{ flexGrow: 1 }}>
//       <View className="relative items-center justify-center py-10">

//         {/* Ellipse Background */}
//         <View className="absolute top-0 left-0 right-0 items-center">
//           <View className="w-[400] h-[490] rounded-full bg-yellow-500 opacity-50 mt-[-30]" /> 
//           <View className="w-[400] h-[490] rounded-full bg-yellow-600 opacity-50 mt-[-370]" /> 
//           <View className="w-[380] h-[490] rounded-full bg-yellow-400 opacity-50 mt-[-380]" /> 
//           <View className="w-[140] h-[140] rounded-full bg-yellow-400 opacity-50 mt-[-395]" /> 
//           {/* <View className="w-[440] h-[400] rounded-full bg-[#FAB824] opacity-50 mt-[-320]" />[#FFC543]  */}
//           {/* <View className="w-[370] h-[300] rounded-full bg-[#FFD474] opacity-50 mt-[-210]" />[#FAB824]  */}
//         </View>

//         {/* Feedback Card */}
//         <View className="bg-white w-12/12 rounded-3xl p-6 shadow-md items-center mt-[400]">
//           <Text className="text-xl font-semibold text-yellow-600">Rate Your Ride Experience</Text>
//           <Text className="text-sm text-gray-500 mt-2">How was your Ride?</Text>

//           {/* Stars */}
//           <View className="flex-row mt-4 space-x-2 gap-4">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <TouchableOpacity key={star} onPress={() => setRating(star)}>
//                 <FontAwesome
//                   name="star"
//                   size={30}
//                   color={star <= rating ? '#FACC15' : '#D1D5DB'}
//                 />
//               </TouchableOpacity>
//             ))}
//           </View>

//           {/* Tags */}
//           <Text className="text-sm mt-6 mb-2 font-medium text-gray-700">Quick Feedback</Text>
//           <View className="flex-row flex-wrap justify-center gap-2 ">
//             {tags.map(tag => (
//               <TouchableOpacity
//                 key={tag}
//                 onPress={() => handleTagClick(tag)}
//                 className={`px-3 py-1 rounded-full border text-sm bg-[#FFEDC4] ${
//                   selectedTags.includes(tag)
//                     ? "bg-yellow-800 text-white"
//                     : "border-yellow-400 text-yellow-700"
//                 }`}
//               >
//                 <Text className="">{tag}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           {/* Button */}
//           <TouchableOpacity
//             onPress={handleSubmit}
//             className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-full items-center"
//           >
//             <Text className="text-white text-sm px-4 font-semibold">Submit Feedback</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default FeedBackPage;


 {/* Ellipse Background */}
        // <View className="absolute top-0 left-0 right-0 items-center">
        //   <View className="w-[400] h-[400] rounded-full bg-yellow-300 opacity-40 mt-[-100]" />
        //   <View className="w-[200] h-[200] rounded-full bg-yellow-500 opacity-60 mt-[-200]" />
        //   <View className="w-[300] h-[300] rounded-full bg-yellow-400 opacity-50 mt-[-250]" />
        //   <View className="w-[200] h-[200] rounded-full bg-yellow-500 opacity-60 mt-[-200]" />
        // </View>