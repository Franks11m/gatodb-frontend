import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Image } from 'react-native';
import axios from 'axios';

interface RegisterScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log("sdfdsf")
    if (!email || !password) {
      alert('Por favor, ingresa tu correo electrónico y contraseña');
      return;
    }

    try {
      const response = await axios.post('http://10.0.2.130:3000/auth/login', { email, password });

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
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://i.pinimg.com/originals/a5/9a/4e/a59a4e3ab8f5f62c1b9b27159fc66c7d.png' }}
          style={styles.logo}
        />
      </View>

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5dc', // Color crema para el fondo
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    left: 20, // Logo alineado a la izquierda
    top: '30%', // Ajusta la posición vertical según lo que necesites
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain', // Mantener las proporciones del logo
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo blanco con transparencia para el formulario
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
