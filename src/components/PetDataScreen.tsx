import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const PetDataScreen: React.FC = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/236x/3d/f6/ea/3df6ea37eb1618bbcc56511daf8db49f.jpg' }}
      style={styles.container}
    >
      <Text>Pet Data Screen</Text>
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

export default PetDataScreen;
