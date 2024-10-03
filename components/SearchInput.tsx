import {View, Text, TouchableOpacity, TextInput, Alert, Image} from "react-native";
import {router, usePathname} from "expo-router";
import React, {useState} from "react";
import icons from "@/constants/icons";
import axios from "axios";

type SearchInputProps = {
    setRepos: (args: Repo[]) => void,
    isLoading: boolean,
    setIsLoading: (value: boolean) => void
};

type Repo = {
    id: number;
    name: string;
    description: string;
    stargazers_count: number;
};


const SearchInput = ({ setRepos, isLoading, setIsLoading }: SearchInputProps) => {
    const [error, setError] = useState<string | null>(null);

        // Function to search GitHub repositories
        const searchRepos = async () => {
            if (!query) return;
            setIsLoading(true);
            setError(null);
    
            try {
                const response = await axios.get(
                    `https://api.github.com/search/repositories?q=${query}`
                );
                const mappedRepos: Repo[] = response.data.items.map((item: any) => ({
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    stargazers_count: item.stargazers_count,
                }));
    
                console.log(mappedRepos);
                setRepos(mappedRepos);
            } catch (err) {
                setError('Failed to fetch repositories. Try again.');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

    const pathname = usePathname();
    const [query, setQuery] = useState("");

    return (
        <View className="flex flex-row items-center space-x-4 w-full h-16 px-2 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary">
            <TextInput
                className="text-base text-white flex-1 font-pregular px-1.5"
                value={query}
                placeholder="Search for repositories"
                placeholderTextColor="#CDCDE0"
                onChangeText={(e) => setQuery(e)}
            />

            <TouchableOpacity
               disabled={isLoading}
                onPress={() => {

                    if (query === "") {
                        return Alert.alert(
                            "Missing Query",
                            "Please input something to search results across database"
                        );
                    } else {
                        searchRepos();
                    }

                }}
              className='p-5'>
                <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />

            </TouchableOpacity>

        </View>
    );
};

export default SearchInput;