import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
export const Header2 = ({ navigation, title }) => {
  //

  //
  return (
    <View style={styles.header}>
      <View style={styles.headerIcon}>
        <MaterialIcons size={28}
        onPress={() => navigation.dispatch(StackActions.pop())}
        style={styles.menuIcon} />
      </View>
      <View style={styles.headerTitle}>
        {/* 
        <Image source={require('../assets/heart_logo.png')} style={styles.headerLogo} />
        */}
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.headerIcon}>
        <MaterialIcons name='clear' size={28}
        onPress={() => navigation.dispatch(StackActions.popToTop())}
        style={styles.menuIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: Dimensions.get('window').width,
  },
  headerIcon: {
    width: '20%',
    paddingHorizontal: -10,
  },
  menuIcon: {
    paddingLeft: 20,
  },
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '60%',
  },
  headerLogo: {
    width: 26,
    height: 26,
    marginHorizontal: 8,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#444',
    letterSpacing: 1,
  },
});
