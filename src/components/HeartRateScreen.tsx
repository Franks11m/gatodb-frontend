import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const HeartRateScreen: React.FC = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/236x/d0/99/6b/d0996b07bb13082d7c6042adfcf0fdce.jpg' }}
      style={styles.container}
    >
      <Text>Heart Rate Screen</Text>
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

export default HeartRateScreen;
