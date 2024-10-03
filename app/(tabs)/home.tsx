import {View, Text, ScrollView, TouchableOpacity} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {MaterialIcons} from "@expo/vector-icons";
import {  router } from "expo-router";

const UserCard = ({ iconName, title, color, onPress}) => {
    return (
        <TouchableOpacity style={{ backgroundColor: `${color}` }} className="flex-1 h-30 rounded-lg flex items-start justify-center p-4" onPress={onPress} activeOpacity={0.7}>
            <View >
                <View className="w-full h-16 flex items-start justify-top mb-2">
                    <MaterialIcons
                        name={iconName}
                        size={20}
                        style={{ color: '#1E3A8A', width: 20, height: 20 }} // Ensure size consistency
                    />
                </View>
                <Text className="text-black text-base font-semibold items-start">{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const Home = () => {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{
                height: '100%'
            }}>
                <View className="flex-row items-center justify-between w-full p-5">
                    <UserCard iconName="person-outline" title="Users" color="#ECF5F8" onPress={() =>
                        router.push('//(tabs)/user')
                    }
                    />
                    <View className="w-4"/>
                    <UserCard
                        iconName="home"
                        title="Repositories"
                        color="#F6EDF8"
                        onPress={() =>
                            router.push('//(tabs)//(tabs)/search')
                        }
                    />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;