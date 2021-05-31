import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Button2 from '../components/Button2'
import Paragraph from '../components/Paragraph'
import { View, StyleSheet } from 'react-native'
import { theme } from '../core/theme'
import { Text } from 'react-native-paper'

const StartScreen = ({ navigation }) => (
  <Background>
 
    {/* <Logo/> */}
    
    <Header>Mobile Learning App</Header>
    <View style={styles.space}>

    </View>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    
    <View style={styles.row}>
      <Text style={styles.text}>Don't have an account?</Text>
    </View>
 
    <Button2
      mode="contained"
      onPress={() => navigation.navigate('PasswordScreen')}
    >
      Create New Account
    </Button2>
  </Background>
)

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 4,
  },
  space: {
    paddingBottom: 75,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: theme.colors.text,
  },
})

export default StartScreen
