import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import WelcomeScreen from "../screens/WelcomeScreen";
import LogIn from "../screens/LogIn";
import Register from "../screens/Register";
import HomeScreen from "../screens/HomeScreen";
import NewsFeed from "../screens/NewsFeed";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
    <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Feed" component={NewsFeed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
