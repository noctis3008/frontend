import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProfileScreen from './Screens/ProfileScreen';
import React from 'react';
import EditProfileScreen from './Screens/EditProfileScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <EditProfileScreen></EditProfileScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
