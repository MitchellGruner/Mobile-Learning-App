import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Card from '../shared/card';
import { globalStyles, images } from '../styles/global';

const EmailDetails = ({ navigation, route }) => {
  // const pressHandler = () => {
  //   navigation.goBack();
  // };

  return (
    <ImageBackground source={require('../assets/outlook.jpg')} style={globalStyles.emailImage}>
        
    </ImageBackground>
  );
};

export default EmailDetails;

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});
