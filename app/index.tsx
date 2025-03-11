import { Text, View, Image, TouchableOpacity, SafeAreaView } from "react-native";
import styles from "./style";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Screens/app/Home";
import Favorites from "./Screens/app/Favorites";
import Profile from "./Screens/app/Profile";
import { useState } from "react";
import SplashScreen from "./Screens/SplashScreen";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  
  return isSignedIn ? <Tabs /> : <SplashScreen/>;
}

const Tabs = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Favorites') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else {
              iconName = 'home-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Favorites' component={Favorites} />
        <Tab.Screen name='Profile' component={Profile} />
      </Tab.Navigator>
    </SafeAreaView>
  )
}