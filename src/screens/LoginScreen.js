import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { Text } from 'react-native-elements';
import firebase from '../../firebase/fire';
import Button from '../components/Button'
import Button2 from '../components/Button2'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signIn = async () => {
          try {
              const response = await firebase.auth().signInWithEmailAndPassword(email, password);

              navigation.reset({
                index: 0,
                routes: [{name: 'HomeScreen'}],
              })
          } catch (err) {
              setError(err.message);
          }
      }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      {/* <Logo /> */}
      <Header>Account Login</Header>
   <View style={styles.row}>
      <Text style={styles.text}>Sign in with an existing account</Text>
    </View>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password}
        onChangeText={setPassword}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      {
            error ?
                <Text style={{ color: 'red' }}>{error}</Text>
                : null
        }
       
      <Button mode="contained" title="Sign In" onPress={() => signIn()}>
        Login
      </Button>

      <Button2
      mode="contained"
      onPress={() => navigation.navigate('PasswordScreen')}
    >
      Sign Up
    </Button2>

    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 1,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.text,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.link,
  },
  text: {
    fontSize: 16,
    color: theme.colors.text,
  },
})

export default LoginScreen
