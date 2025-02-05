import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ImageBackground } from 'react-native';
import api from '../api/api'; // Asegúrate de importar la instancia de axios

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Verificamos si las credenciales no están vacías
    if (!username || !password) {
      alert('Por favor, ingresa tu usuario y contraseña');
      return;
    }

    // Hacemos la petición al backend
    api.post('/login', { username, password })
      .then((response) => {
        if (response.data.success) {
          // Si el login es exitoso, navegamos a Home
          navigation.navigate('Home');
        } else {
          alert('Credenciales incorrectas');
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Error al conectar con el servidor');
      });
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/60/7d/25/607d25e4fb5d358df2147f26ed72ea14.jpg' }}
      style={styles.container}
    >
      <Text style={styles.title}>Login Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
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
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 5,
  },
});

export default LoginScreen;
