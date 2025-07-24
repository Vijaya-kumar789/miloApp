import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, LayoutAnimation, Platform, UIManager } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { HeaderLogo, TitleCard } from '../ProfileSettings/HeaderComponent';

const faqData = [
  {
    question: 'Where can I see my past ride history?',
    answer: `You can view all your previous trips in the Ride History section of the app.\n\n• Open the app and go to Profile or Menu.\n• Tap on Ride History.\n• You’ll see a list of your Ride History, upcoming and scheduled rides along with trip details like date, fare, and driver information.`,
  },
  { question: 'I forgot my password. How can I reset it?', answer: 'Go to login screen → Tap “Forgot Password” → Follow instructions.' },
  { question: 'Can I schedule a ride in advance?', answer: 'Yes, use the “Schedule Ride” option from the home screen.' },
  { question: 'Can I update my phone number or email ID?', answer: 'Yes, go to Profile > Edit and update your contact info.' },
  { question: 'How do I book a cab?', answer: 'Choose your pickup/drop location and tap “Book Now” on the home screen.' },
];

// Enable layout animation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const HelpSupportScreen = () => {
  const navigation = useNavigation();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <View className="flex-1 bg-white">
      <HeaderLogo onBack={() => navigation.goBack()} />
      <TitleCard title="Help & Support" />

      <ScrollView contentContainerStyle={{ padding: 20, paddingHorizontal: 40 }}
      >
        <Text className="text-xl font-bold text-gray-800 mb-4">📒 FAQs</Text>

        {faqData.map((item, index) => (
          <View
            key={index}
            className={`rounded-xl mb-3 ${index === expandedIndex ? 'bg-[#FFF7E9] border border-[#FAB824]' : 'bg-gray-100'} p-3`}
          >
            <TouchableOpacity
              onPress={() => toggleExpand(index)}
              className="flex-row justify-between items-center"
            >
              <Text className="text-sm font-semibold text-gray-800 w-[92%]">{item.question}</Text>
              <Feather name={expandedIndex === index ? 'chevron-up' : 'chevron-down'} size={20} color="#444" />
            </TouchableOpacity>
            {expandedIndex === index && (
              <Text className="text-sm text-gray-600 mt-3 whitespace-pre-line">{item.answer}</Text>
            )}
          </View>
        ))}

        {/* Support Contact Section */}
        <Text className="text-center text-sm text-orange-500 mt-8 mb-2">
          Need help? Our support team is ready to assist you.
        </Text>
        <TouchableOpacity className="bg-[#FAB824] py-3 rounded-full items-center shadow-md">
          <Text className="text-white font-semibold">Contact Support</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default HelpSupportScreen;











// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { Feather } from '@expo/vector-icons';
// import { HeaderLogo, TitleCard } from '../ProfileSettings/HeaderComponent';

// const faqData = [
//   {
//     question: 'Where can I see my past ride history?',
//     answer: `You can view all your previous trips in the Ride History section of the app.\n\n• Open the app and go to Profile or Menu.\n• Tap on Ride History.\n• You’ll see a list of your Ride History, upcoming and scheduled rides along with trip details like date, fare, and driver information.`,
//   },
//   { question: 'I forgot my password. How can I reset it?', answer: 'Go to login screen → Tap “Forgot Password” → Follow instructions.' },
//   { question: 'Can I schedule a ride in advance?', answer: 'Yes, use the “Schedule Ride” option from the home screen.' },
//   { question: 'Can I update my phone number or email ID?', answer: 'Yes, go to Profile > Edit and update your contact info.' },
//   { question: 'How do I book a cab?', answer: 'Choose your pickup/drop location and tap “Book Now” on the home screen.' },
// ];

// const HelpSupportScreen = () => {
//   const navigation = useNavigation();
//   const [expandedIndex, setExpandedIndex] = useState(0);

//   const toggleExpand = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   return (
//     <View className="flex-1 bg-white">
//       <HeaderLogo onBack={() => navigation.goBack()} />
//       <TitleCard title="Help & Support" />

//       <ScrollView contentContainerStyle={{ padding: 20, paddingTop:-20,paddingLeft:40,paddingRight:40  }}>
//         <Text className="text-xl font-bold text-gray-800 mb-4">📒 FAQs</Text>

//         {faqData.map((item, index) => (
//           <View
//             key={index}
//             className={`rounded-xl mb-3 ${index === expandedIndex ? 'bg-[#FFF7E9] border border-[#FAB824]' : 'bg-gray-100'} p-3`}
//           >
//             <TouchableOpacity
//               onPress={() => toggleExpand(index)}
//               className="flex-row justify-between items-center"
//             >
//               <Text className="text-sm font-semibold text-gray-800 w-[92%]">{item.question}</Text>
//               <Feather name={expandedIndex === index ? 'chevron-up' : 'chevron-down'} size={20} color="#444" />
//             </TouchableOpacity>
//             {expandedIndex === index && (
//               <Text className="text-sm text-gray-600 mt-3 whitespace-pre-line">{item.answer}</Text>
//             )}
//           </View>
//         ))}

//         {/* Support Contact Section */}
//         <Text className="text-center text-sm text-orange-500 mt-8 mb-2">
//           Need help? Our support team is ready to assist you.
//         </Text>
//         <TouchableOpacity className="bg-[#FAB824] py-3 rounded-full items-center shadow-md">
//           <Text className="text-white font-semibold">Contact Support</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };

// export default HelpSupportScreen;



// import React from 'react';
// import { View, Text } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { HeaderLogo, TitleCard } from '../ProfileSettings/HeaderComponent';

// const HelpSupportScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <View className="flex-1 bg-white">
//       <HeaderLogo onBack={() => navigation.goBack()} />
//       <TitleCard title="Help & Support" />

//       <View className="p-6">
//         <Text className="text-gray-700 text-base">
//           How can we help you?
//         </Text>
//         {/* Add more support content here */}
//       </View>
//     </View>
//   );
// };

// export default HelpSupportScreen;


