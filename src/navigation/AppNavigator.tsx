import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../components/LoginScreen';
import RegisterScreen from '../components/RegisterScreen';
import HomeScreen from '../components/HomeScreen';
import PetProfileScreen from '../components/PetProfileScreen';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PetProfile" component={PetProfileScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
