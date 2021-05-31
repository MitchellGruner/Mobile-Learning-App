import React, { useState } from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import { theme } from '../core/theme'
import {StyleSheet } from 'react-native'
import { Text } from 'react-native-elements';



const SuccessfulRegistrationScreen = ({ navigation }) => (
    <Background>
      {/* <Logo /> */}
      <Header>Thank you for registering! </Header>
      <Text style={styles.text}>An email will be sent to finish the registration process. </Text>
      <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
        Login Now
      </Button>

    </Background>
  )



  const styles = StyleSheet.create({
    text: {
      fontSize: 15,
      color: theme.colors.text,
      marginBottom: 20
    },
  })

  
  export default SuccessfulRegistrationScreen
  