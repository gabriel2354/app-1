import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomTab from './Navigators/BottomNavigator';
import React from 'react';
import MainNavigator from './Navigators/MainNavigator';

export default function App() {
  return (
    <MainNavigator/>
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
