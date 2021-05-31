import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Card from '../shared/card';
import { globalStyles, images } from '../styles/global';

const CourseDetails = ({ navigation, route }) => {
  // const pressHandler = () => {
  //   navigation.goBack();
  // };

  return (
    <View style={{ backgroundColor: '#FFFFFF'}} style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.physics}>Physics 101</Text>
      </Card>
      <Card>
          <Text style={globalStyles.calculus}>Calculus 2</Text>
      </Card>
      <Card>
          <Text style={globalStyles.oop}>OO Programming in Java</Text>
      </Card>
    </View>
  );
};

export default CourseDetails;

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
