import { Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const TripHistoryScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Ride History');

  const rideData = [
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
    {
      id: 8,
      driver: 'John Doe',
      car: 'Hyundai i20',
      seats: 4,
      pickup: 'MG Road',
      drop: 'Anna Nagar',
      tripType: 'One way Trip',
      date: new Date(),
      status: 'Scheduled',
      image: require('../../assets/images/Car.png'),
    },
    {
      id: 9,
      driver: 'Priya Sharma',
      car: 'Tata Nexon',
      seats: 4,
      pickup: 'Velachery',
      drop: 'OMR',
      tripType: 'Round Trip',
      date: new Date(new Date().setDate(new Date().getDate() - 1)), // Yesterday
      status: 'Scheduled',
      image: require('../../assets/images/Car.png'),
    },
     {
      id: 10,
      driver: 'Amit Singh',
      car: 'Swift Dzire',
      seats: 4,
      pickup: 'Guindy',
      drop: 'T Nagar',
      tripType: 'One way Trip',
      date: new Date('2025-06-18T14:00:00'),
      status: 'Completed',
      image: require('../../assets/images/Car.png'),
    },
    {
      id: 11,
      driver: 'Amit Singh',
      car: 'Swift Dzire',
      seats: 4,
      pickup: 'Guindy',
      drop: 'T Nagar',
      tripType: 'One way Trip',
      date: new Date('2025-06-18T14:00:00'),
      status: 'Completed',
      image: require('../../assets/images/Car.png'),
    },
  ];

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isYesterday = (date) => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return (
      date.getDate() === yesterday.getDate() &&
      date.getMonth() === yesterday.getMonth() &&
      date.getFullYear() === yesterday.getFullYear()
    );
  };

  const isLastMonth = (date) => {
    const now = new Date();
    const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    return (
      date.getMonth() === lastMonth.getMonth() &&
      date.getFullYear() === lastMonth.getFullYear()
    );
  };

  const getGroupedRides = (rides) => ({
    today: rides.filter((r) => isToday(r.date)),
    yesterday: rides.filter((r) => isYesterday(r.date)),
    lastMonth: rides.filter((r) => isLastMonth(r.date)),
  });

  const upcoming = getGroupedRides(rideData.filter((r) => r.status === 'Upcoming'));
  const completed = getGroupedRides(rideData.filter((r) => r.status === 'Completed'));
  const scheduled = getGroupedRides(rideData.filter((r) => r.status === 'Scheduled'));

  const renderRideCard = (ride) => (
    <View
      key={ride.id}
      className="flex-row ml-10 mr-10 bg-[#FFF6DF] p-3 rounded-xl shadow-xl mb-4 items-center h-50 space-x-4"
    >
      <View className="items-center justify-center space-y-2">
        <Image
          source={ride.image}
          className="w-[115px] h-[65px] rounded-2xl shadow-md border border-gray-300"
        />
        <TouchableOpacity className="px-4 py-1 rounded-md mt-4">
          <Text className="text-sm text-[#AD7704] font-semibold">{ride.status}</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-1 pl-2">
        <Text className="text-sm font-medium text-gray-800">Driver: {ride.driver}</Text>
        <View className="mb-0 flex-row items-center space-x-1">
          <Text className="text-gray-800 text-sm font-medium">{ride.car}</Text>
          <Text className="text-black text-xl pl-2">|</Text>
          <Text className="text-gray-800 text-sm font-medium pl-2">{ride.seats} Seater</Text>
        </View>
        <View className="mb-1 flex-row items-center space-x-1">
          <Text className="text-gray-800 text-sm font-medium">{ride.pickup}</Text>
          <Feather name="arrow-right" size={16} color="#FFAE00" style={{ marginLeft: 8 }} />
          <Text className="text-gray-800 text-sm font-medium pl-2">{ride.drop}</Text>
        </View>
        <View className="flex-row justify-between items-center mt-1">
          <TouchableOpacity className="bg-white px-1 py-1 rounded-lg">
            <Text className="text-xs text-[#BA8611] font-semibold">{ride.tripType}</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-end mt-1">
          <Text className="text-xs text-gray-500">
            {ride.date.toLocaleString('en-IN', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            })}
          </Text>
        </View>
      </View>
    </View>
  );
  const renderGroupedSection = (grouped) => (
  <>
    {/* Today Group with Filter */}
    {grouped.today.length > 0 && (
      <>
        <View className="flex-row justify-between items-center w-full px-6 mt-4 mb-1">
          <Text className="text-base font-bold text-gray-500 ml-5">Today</Text>
          <TouchableOpacity
            onPress={() => alert('Filter options clicked')}
            className="bg-white px-3 py-2 rounded-full flex-row items-center"
          >
            {/* <MaterialCommunityIcons name="filter-variant" size={20} color="#FAB824" /> */}
            {/* <Text className="ml-1 text-sm text-yellow-500 font-medium">Filter</Text> */}
          </TouchableOpacity>
        </View>
        {grouped.today.map(renderRideCard)}
      </>
    )}

    {/* Yesterday Group */}
    {grouped.yesterday.length > 0 && (
      <>
        <Text className="flex-row justify-between w-full text-base font-bold text-gray-500 ml-20 mt-2 mb-1">Yesterday</Text>
        {grouped.yesterday.map(renderRideCard)}
      </>
    )}

    {/* Last Month Group */}
    {grouped.lastMonth.length > 0 && (
      <>
        <Text className="flex-row justify-between w-full text-base font-bold text-gray-500 ml-20 mt-2 mb-1">Last Month</Text>
        {grouped.lastMonth.map(renderRideCard)}
      </>
    )}
  </>
);
  return (
    <View>
      <ScrollView
        className="flex:1 bg-white"
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 5 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="bg-[#FAB824] pt-28 pb-20 rounded-b-[100px] items-center relative">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-12 left-4 bg-white rounded-full w-10 h-10 items-center justify-center shadow-md"
          >
            <Feather name="chevron-left" size={20} color="black" />
          </TouchableOpacity>
          <Image
            source={require('../../assets/images/logo.png')}
            className="w-28 h-20 mb-2"
            resizeMode="contain"
          />
        </View>

        {/* Main Content */}
        <View className="items-center mt-[-50px] mb-5">
          <View className="bg-white w-[85%] rounded-xl px-4 py-5">
            <Text className="text-[#FAB824] text-xl font-bold text-center">Your Rides</Text>
          </View>

          {/* Tabs */}
          <View className="flex-row justify-center mb-1 mt-3">
            {['Ride History', 'Upcoming', 'Scheduled'].map((tab) => (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveTab(tab)}
                className={`px-3 py-2 rounded-full ${
                  activeTab === tab ? 'bg-yellow-400' : 'bg-gray-50'
                } mx-1`}
              >
                <Text
                  className={`text-sm font-semibold ${
                    activeTab === tab ? 'text-white' : 'text-gray-700'
                  }`}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Rides */}
          {activeTab === 'Upcoming' && renderGroupedSection(upcoming)}
          {activeTab === 'Ride History' && renderGroupedSection(completed)}
          {activeTab === 'Scheduled' && renderGroupedSection(scheduled)}
        </View>
      </ScrollView>
    </View>
  );
};

export default TripHistoryScreen;
