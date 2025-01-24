import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import api from '../api/api'; // Asegúrate de que esta ruta sea correcta
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosError } from 'axios'; // Para manejar errores de Axios

const LoginScreen: React.FC = ({ navigation }: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }

    try {
      setLoading(true);
      const response = await api.post('/auth/login', { email, password });

      // Guardar el token en AsyncStorage
      if (response.data.token) {
        await AsyncStorage.setItem('userToken', response.data.token);
      }

      Alert.alert('Login exitoso', `Bienvenido, ${response.data.user.name}`);
      navigation.navigate('Home'); // Navegar a la pantalla principal
    } catch (error) {
      console.error('Error al iniciar sesión:', error);

      if (error instanceof AxiosError) {
        if (error.response) {
          Alert.alert('Error', error.response.data.message || 'No se pudo iniciar sesión');
        } else {
          Alert.alert('Error', 'Hubo un problema al conectar con el servidor.');
        }
      } else {
        Alert.alert('Error', 'Hubo un error inesperado.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Iniciar Sesión" onPress={handleLogin} />
      )}
      <TouchableOpacity
        style={[styles.button, styles.registerButton]}
        onPress={() => navigation.navigate('Register')} // Redirige a la pantalla de registro
      >
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  button: {
    marginTop: 16,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  registerButton: {
    backgroundColor: '#add8e6',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
