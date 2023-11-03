import { StyleSheet, Text, View, Image, TouchableOpacity,  } from 'react-native';
import Logo from '../../assets/save-earth-logo.jpg';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={{ height: '40%', aspectRatio: 1/1, }}/>

      <Text style={{ color: '#000000', fontSize: 22, fontWeight: 'bold', marginBottom: 10, }}>Save Earth</Text>

      <Text style={{ color: '#000000', fontSize: 18, fontStyle: 'italic', marginBottom: 30, }}>Do not play with nature</Text>

      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Register') }>
        <Text style={{ color: '#fff', fontSize: 16, }}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
        <Text style={{ fontSize: 16 }}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#5eb240',
    borderRadius: 18,
    padding: 10,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  }
});
