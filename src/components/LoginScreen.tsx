import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ImageBackground } from 'react-native';
import axios from 'axios';

interface RegisterScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log("sdfdsf");
    if (!email || !password) {
      alert('Por favor, ingresa tu correo electrónico y contraseña');
      return;
    }

    try {
      const response = await axios.post('http://10.0.7.9:3000/auth/login', { email, password });

      if (response.data.access_token) {
        alert('Login exitoso');
        navigation.navigate('Home');
      } else {
        alert('Credenciales incorrectas');
      }
    } catch (error) {
      console.error(error);
      alert('Error al conectar con el servidor');
    }
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://i.pinimg.com/736x/1b/d6/5b/1bd65b2c50c4b6226547a2408c0ec5d1.jpg' }} 
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={handleLogin} />
        <Button title="Go to Register" onPress={() => navigation.navigate('Register')} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  title: {
    fontSize: 24,
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
});

export default LoginScreen;
