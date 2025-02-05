import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const ActivityScreen: React.FC = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/60/7d/25/607d25e4fb5d358df2147f26ed72ea14.jpg' }}
      style={styles.container}
    >
      <Text>Activity Screen</Text>
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

export default ActivityScreen;
