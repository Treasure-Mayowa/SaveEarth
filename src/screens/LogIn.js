import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from "react-native";
import Logo from '../../assets/save-earth-logo.jpg';
import { auth } from "../components/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LogIn ({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigation.navigate('Home')
        })
        .catch((error) => {
            error.code === 'auth/invalid-email'? setErrorMessage('Invalid Email'): null
            error.code === 'auth/invalid-login-credentials'? setErrorMessage('Invalid Login Credentials'): null
            console.error(`${error.code}, ${error.message}`)
        });
        }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Image source={Logo} style={{ height: "30%", aspectRatio: 1/1, }}/>
            <Text style={{ fontSize: 28, fontWeight: '500'}}>Log In</Text>
            <TextInput
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={(text) => {setEmail(text)}}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(text) => {setPassword(text)}}
                style={styles.input}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={{ fontSize: 15, color: "#fff" }}>Log In</Text>
            </TouchableOpacity>
            <Text style={{ color: '#FF0000', marginTop: 15, marginBottom: 12, fontSize: 20, display: errorMessage === ''? 'none': 'flex', }}>{errorMessage}</Text>
            <Text style={{ fontSize: 15}}>New user?
            <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
                <Text style={{ fontSize: 15, color: '#5eb240' }}> Create an account</Text>
            </TouchableOpacity></Text>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#fff"
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 10,
        borderRadius: 12,
        width: "80%",
        height: 32,
        fontSize: 18,
    }, 
    button: {
        borderRadius: 15,
        padding: 10,
        width: "80%",
        alignItems: 'center',
        backgroundColor: "#5eb240",
        marginBottom: 10,
        marginTop: 10,
    }
})