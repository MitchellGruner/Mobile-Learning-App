import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Card from '../shared/card';
import { globalStyles, images } from '../styles/global';

const ProgressDetails = ({ navigation, route }) => {
  // const pressHandler = () => {
  //   navigation.goBack();
  // };

  return (
    <View style={{ backgroundColor: '#FFFFFF'}} style={globalStyles.container} >
      <Card>
        <Text style={globalStyles.physicsProgress}>Physics 101</Text>
        <Text style={globalStyles.assignment}>Physics Assessment</Text>
        <Text style={globalStyles.completed}>Correct 3/3</Text>
        <Text style={globalStyles.due}>Due Date: March 2, 2021</Text>
      </Card>
      <Card>
          <Text style={globalStyles.calculusProgress}>Calculus 2</Text>
          <Text style={globalStyles.assignment}>Calculus 2 Assessment</Text>
          <Text style={globalStyles.completed}>Correct 2/3</Text>
      </Card>
      <Card>
          <Text style={globalStyles.oopProgress}>OO Programming in Java</Text>
          <Text style={globalStyles.assignment}>Assessment</Text>
          <Text style={globalStyles.due}>Due Date: March 8, 2021</Text>
      </Card>
    </View>
  );
};

export default ProgressDetails;

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
