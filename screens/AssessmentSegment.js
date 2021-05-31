import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { globalStyles } from '../styles/global';
import WebView from 'react-native-webview';
export default function AssessmentSegment({ navigation, route }) {
  const { assessment } = route.params
  return <WebView source={{ uri: assessment }} />

}