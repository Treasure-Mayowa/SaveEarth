import React from "react";
import { StyleSheet, Text, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation, useIsFocused } from "@react-navigation/native";

function NavBarContent ({ name, title, screenName, type }) {
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const handleNavigation = () => {
        navigation.navigate(screenName);
    };

    if (type === "fontawesome"){
        return (
            <TouchableOpacity style={{ padding: 12, alignItems: 'center'}} onPress={handleNavigation}>
                <FontAwesome name={name} color={isFocused && navigation.isFocused(screenName)? "#5eb240" : "#000000"} size={30} />
            </TouchableOpacity>
        )
    } else if (type === "ionicon"){
        return (
            <TouchableOpacity style={{ padding: 12, alignItems: 'center'}} onPress={handleNavigation}>
                <Ionicons name={name} color={isFocused && navigation.isFocused(screenName)? "#5eb240" : "#000000"} size={30} />
            </TouchableOpacity>
        )
    }
}

export default function NavBar (){
    return (
        <SafeAreaView style={styles.nav}>
            <NavBarContent name="home"  title="Home" type="fontawesome" screenName={"Home"}/>
            <NavBarContent name="globe" title="Actions" type="fontawesome" screenName={"Login"}/>
            <NavBarContent name="people" title="Chat" type="ionicon" screenName={"Register"} />
            <NavBarContent name="bell" title="Feed" type="fontawesome" screenName={"Feed"}/>
            <NavBarContent name="lightbulb-o" title="More" type="fontawesome" screenName={"Feed"}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({ 
    nav: {
        borderTopWidth: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 10,
        width: "100%",
        backgroundColor: "#ffffff",
        position: 'absolute',
        bottom: 0,
    }
})