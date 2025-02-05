import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/60/7d/25/607d25e4fb5d358df2147f26ed72ea14.jpg' }}
      style={styles.container}
    >
      <Text>Home Screen</Text>
      <Button title="Go to Pet Profile" onPress={() => navigation.navigate('PetProfile')} />
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

export default HomeScreen;
