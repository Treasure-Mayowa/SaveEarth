import React from "react";
import { ScrollView, Text, Platform, SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from "react-native-webview";
import NavBar from "../components/NavBar";

export default function NewsFeed(){
    return (
        <SafeAreaView style={styles.main}>
            <Text>NewsFeed</Text>
            <WebView
                source={{ uri: "https://google.com/" }}
                style={{ flex: 1}}
                scalesPageToFit={true}
            />
            {Platform.OS === "ios"? <NavBar/> : null}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginHorizontal: 8,
    },
})