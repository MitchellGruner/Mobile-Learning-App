import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { globalStyles } from '../styles/global';
import WebView from 'react-native-webview';
export default function AnswerSegment({ navigation, route }) {
    const { answer } = route.params
    return <WebView source={{ uri:answer }} />

}