import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from "react-native";
import Logo from '../../assets/save-earth-logo.jpg';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Register ({ navigation }) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleReg = () => {
        if (password === confirm && email != '' && password != '') {
            const auth = getAuth()
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                navigation.navigate('Home')
            })
            .catch((error) => {
                error.code === 'auth/invalid-email'? setErrorMessage('Invalid Email'): null
                error.code === 'auth/invalid-login-credentials'? setErrorMessage('Invalid Login Credentials'): null
                console.error(error.code, error.message)
            });
        } else if (password != confirm) {
            setErrorMessage('Password and password confirmation must match')
        } 
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Image source={Logo} style={{ height: "30%", aspectRatio: 1/1, }}/>
            <Text style={{ fontSize: 28, fontWeight: '500'}}>Create An Account</Text>
            <TextInput 
                placeholder="Username"
                value={username}
                onChangeText={(text)=> setUsername(text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(text)=> setPassword(text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Confirm Password"
                secureTextEntry
                value={confirm}
                onChangeText={(text) => setConfirm(text)}
                style={styles.input}
            />
            <TouchableOpacity style={styles.button} onPress={handleReg}>
                <Text style={{ fontSize: 15, color: "#fff" }}>Continue</Text>
            </TouchableOpacity>
            <Text style={{ color: '#FF0000', marginTop: 15, marginBottom: 12, fontSize: 20, display: errorMessage === ''? 'none': 'flex',}}>{errorMessage}</Text>
            <Text style={{ fontSize: 15}}>Have an account?
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                <Text style={{ fontSize: 15, color: '#5eb240' }}> Log In instead</Text>
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
        padding: 12,
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