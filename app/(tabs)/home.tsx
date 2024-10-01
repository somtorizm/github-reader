import {View, Text, ScrollView} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import {MaterialIcons} from "@expo/vector-icons";

const UserCard = ({ iconName, title }) => {
    return (
        <View className="flex-1 h-28 bg-blue-50 rounded-lg flex items-start justify-center p-4">
            <View className="w-full h-16 flex items-start justify-top mb-2">
                <MaterialIcons name={iconName} size={20} style={{color: '#1E3A8A'}}/>
            </View>
            <Text className="text-black text-base font-semibold items-start">{title}</Text>
        </View>
    );
};

const Home = () => {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{
                height: '100%'
            }}>
                <View className="flex-row items-center justify-between w-full p-5">
                    <UserCard iconName="person-outline" title="Users" />
                    <View className="w-4"/>
                    <UserCard iconName="home" title="Repositories" />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;