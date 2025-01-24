// src/components/MainScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MainScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Principal</Text>
      <Button title="Cerrar sesión" onPress={() => alert('Cerrando sesión')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default MainScreen;
