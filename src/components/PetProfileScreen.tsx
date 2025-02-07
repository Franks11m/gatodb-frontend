import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, ImageBackground } from 'react-native';

const PetProfileScreen: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
  // Recibir datos de la mascota seleccionada
  const { petId, petName } = route.params;

  // Datos simulados de latidos del corazón y pasos
  const [heartRate, setHeartRate] = useState(72); // Latidos por minuto
  const [steps, setSteps] = useState(2000); // Pasos

  // Actualizar datos cuando se selecciona una mascota
  const updatePetData = () => {
    if (petId === 1) {
      setHeartRate(80);
      setSteps(2500);
    } else if (petId === 2) {
      setHeartRate(70);
      setSteps(1800);
    } else {
      setHeartRate(85);
      setSteps(3000);
    }
  };

  // Llamar a la función para actualizar los datos
  React.useEffect(() => {
    updatePetData();
  }, [petId]);

  return (
    <View style={styles.container}>
      {/* Logo de la mascota en la parte superior */}
      <Image
        source={{ uri: 'https://i.pinimg.com/736x/60/7d/25/607d25e4fb5d358df2147f26ed72ea14.jpg' }}
        style={styles.logo}
      />

      <View style={styles.overlay}>
        <Text style={styles.title}>{petName}'s Profile</Text>

        {/* Mostrar datos de la mascota */}
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Heart Rate: {heartRate} BPM</Text>
          <Text style={styles.infoText}>Steps Taken: {steps}</Text>
        </View>

        {/* Botones de navegación */}
        <Button title="Go to Heart Rate" onPress={() => navigation.navigate('HeartRate')} />
        <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC', // Fondo crema
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75, // Para hacer el logo redondeado
    borderWidth: 3,
    borderColor: '#3E3B3B', // Bordes oscuros para destacar el logo
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo blanco con opacidad
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
    width: '85%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3E3B3B',
    marginBottom: 25,
    fontFamily: 'Roboto',
  },
  infoContainer: {
    marginBottom: 30,
    alignItems: 'center',
    backgroundColor: '#F5F5DC', // Color crema para el fondo de la información
    padding: 20,
    borderRadius: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  infoText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 12,
    fontFamily: 'Roboto',
  },
});

export default PetProfileScreen;
