import {FlatList, ScrollView, Text, View} from "react-native";
import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import SearchInput from "@/components/SearchInput";

type Repo = {
    id: number;
    name: string;
    description: string;
    stargazers_count: number;
};


const Search = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(false);

    const renderRepoItem = ({item}: {item: Repo}) => (
        <View className="bg-gray-800 p-4 mb-2 rounded-lg">
            <Text className="text-white font-bold text-lg">{item.name}</Text>
            <Text className="text-gray-300">{item.description || 'No description available'}</Text>
            <Text className="text-gray-400">⭐ {item.stargazers_count}</Text>
        </View>
    );

    return (
        <SafeAreaView className="bg-primary h-full">
                <View className="flex-1 w-full">
                <View className='p-2'>
                    <SearchInput
                        setRepos={setRepos}
                        isLoading={loading}
                        setIsLoading={setLoading}
                    />
                </View>

                    <FlatList
                        data={repos}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderRepoItem}
                        contentContainerStyle={{paddingVertical: 20}}
                    />

                <Text className='flex-1 text-white'>{loading ? 'Loading...': (repos[0]?.name || 'No repositories found')}</Text>
                </View>
        </SafeAreaView>
    );
};

export default Search;
