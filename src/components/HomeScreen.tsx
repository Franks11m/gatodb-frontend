import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/c3/d6/fd/c3d6fda50eb87ef9d2e9b92fd013abf2.jpg' }}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Bienvenido al Perfil de Tu Mascota</Text>

        {/* Perfil de Mascotas */}
        <View style={styles.petContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('PetProfile', { petId: 1 })}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9uZG8lMjBkZSUyMHBhbnRhbGxhJTIwZGUlMjBwZXJyb3xlbnwwfHwwfHx8MA%3D%3D' }}
              style={styles.petImage}
            />
            <Text style={styles.petName}>Fido</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('PetProfile', { petId: 2 })}>
            <Image
              source={{ uri: 'https://plus.unsplash.com/premium_photo-1669277330818-c5cc14e5dfea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9uZG8lMjBkZSUyMHBhbnRhbGxhJTIwZGUlMjBwZXJyb3xlbnwwfHwwfHx8MA%3D%3D' }}
              style={styles.petImage}
            />
            <Text style={styles.petName}>Luna</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('PetProfile', { petId: 3 })}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1504826260979-242151ee45b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvbmRvJTIwZGUlMjBwYW50YWxsYSUyMGRlJTIwcGVycm98ZW58MHx8MHx8fDA%3D' }} // Aquí puedes colocar la URL de la imagen de perfil de tu mascota
              style={styles.petImage}
            />
            <Text style={styles.petName}>Max</Text>
          </TouchableOpacity>
        </View>

        <Button title="Go to Pet Profile" onPress={() => navigation.navigate('PetProfile')} />
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
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Fondo con transparencia para superponer el contenido
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  petContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  petImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  petName: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default HomeScreen;
