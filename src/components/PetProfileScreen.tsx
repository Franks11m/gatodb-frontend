import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const PetProfileScreen: React.FC = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/ba/d2/5e/bad25eba2aa0fa1996c3dc3d3e4f53ed.jpg' }}
      style={styles.container}
    >
      <Text>Pet Profile Screen</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PetProfileScreen;
