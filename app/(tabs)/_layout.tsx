import {View, Text, Image} from "react-native";
import React from "react";
import {Tabs} from "expo-router";
import {icons} from '../../constants';

class TabIcon extends React.Component<{ icon: any, color: any, name: any, focused: any }> {
    render() {
        let {icon, color, name, focused} = this.props;
        return (
            <View className="items-center justify-center gap-2">
                <Image
                    source={icon}
                    resizeMode="contain"
                    tintColor={color}
                    className="w-6 h-6"
                />

                <Text className={`${focused ? 'font-pextrabold' : 'font-pregular'} text-xs`}
                      style={{color: color}}>
                    {name}
                </Text>
            </View>
        )
    }
}

const TabLayout = () => {
    return (
        <>
            <Tabs
             screenOptions={{
                 tabBarShowLabel: false,
                 tabBarActiveTintColor: '#FFA001',
                 tabBarInactiveTintColor: '#CDCDE0',
                 tabBarStyle: {
                     backgroundColor: '#161622',
                     borderTopWidth: 1,
                     borderTopColor: '#161622',
                 }
             }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        )
                    }}
                />

                <Tabs.Screen
                    name="search"
                    options={{
                        title: "Search",
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => (
                            <TabIcon
                                icon={icons.search}
                                color={color}
                                name="Search"
                                focused={focused}
                            />
                        )
                    }}
                />

                <Tabs.Screen
                    name="user"
                    options={{
                        title: "User",
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => (
                            <TabIcon
                                icon={icons.profile}
                                color={color}
                                name="User"
                                focused={focused}
                            />
                        )
                    }}
                />
            </Tabs>
        </>
    )
}

export default TabLayout;