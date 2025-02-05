import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ImageBackground } from 'react-native';
import api from '../api/api'; // Asegúrate de importar la instancia de axios

interface RegisterScreenProps {
  navigation: any;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Verificamos si las credenciales no están vacías
    if (!username || !password) {
      alert('Por favor, ingresa un usuario y una contraseña');
      return;
    }

    // Hacemos la petición al backend
    api.post('/register', { username, password })
      .then((response) => {
        if (response.data.success) {
          alert('Registro exitoso');
          navigation.navigate('Login');
        } else {
          alert('Error en el registro');
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Error al conectar con el servidor');
      });
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/fd/ae/54/fdae54bad75cdd811313b0e156fe0b9a.jpg' }}
      style={styles.container}
    >
      <Text style={styles.title}>Register Screen</Text>
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
      <Button title="Register" onPress={handleRegister} />
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
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

export default RegisterScreen;
