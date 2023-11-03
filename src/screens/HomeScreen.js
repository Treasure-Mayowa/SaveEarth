import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, SafeAreaView, Platform, FlatList } from "react-native";
import NavBar from "../components/NavBar";
import LessonCard from "../components/LessonCard";
import { lessons, facts } from "../components/data";


export default function HomeScreen ({ navigation }) {
    return (
        <SafeAreaView style={styles.main}>
            <View>
                <Text style={{ fontSize: 22, marginBottom: 15, }}>Save Earth</Text>
            </View>
            <View style={{ backgroundColor: "#5eb240", borderRadius: 5, padding: 10, shadowColor: '#000000', marginBottom: 20, marginTop: 10, }}>
                <Text style={{ fontStyle: 'italic'}}>Did you know?</Text>
                <Text style={{ fontWeight: 'bold'}}>{facts[(Math.floor(Math.random() * facts.length))]}</Text>
            </View>
            <Text>Learn</Text>
            <FlatList data={lessons}
                horizontal
                keyExtractor={( lesson ) => lesson.id}
                renderItem={({ item }) => (
                    <LessonCard key={item.id} title={item.title} description={item.description} image={item.image} onPress={()=> navigation.navigate(item.title)} />
                )} 
            />
            {Platform.OS == "ios"? <NavBar />: null }
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