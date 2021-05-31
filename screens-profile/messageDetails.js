import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Card from '../shared/card';
import { globalStyles, images } from '../styles/global';

const MessageDetails = ({ navigation, route }) => {
  // const pressHandler = () => {
  //   navigation.goBack();
  // };

  return (
    <View style={{flexDirection: 'row'}}>
        <View style={{ backgroundColor: '#FFFFFF'}} style={globalStyles.container} >
        <Card>
            <Text style={globalStyles.physicsProgress}>Physics 101</Text>
            <Text style={globalStyles.date}>March 31, 2020</Text>
            <Text style={globalStyles.time}>3:08 PM</Text>
            <Text style={globalStyles.messageParagraph}>Hi Professor, I was wondering if you could tell me what the difference between one-dimensional motion and t...</Text>
        </Card>
        <Card>
            <Text style={globalStyles.calculusProgress}>Calculus 2</Text>
            <Text style={globalStyles.date}>April 15, 2020</Text>
            <Text style={globalStyles.time}>11:06 PM</Text>
            <Text style={globalStyles.messageParagraph}>Professor Morgan, is there any way you can send me extra resources?  I didn't get one the first time and i...</Text>
        </Card>
        </View>
    </View>
  );
};

export default MessageDetails;

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
