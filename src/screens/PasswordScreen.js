import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { Text } from 'react-native-elements';
import Button from '../components/Button'
import firebase from '../../firebase/fire';
import {AddUser} from '../../users/AddUser';
import { confirmPasswordValidator } from '../helpers/confirmPasswordValidator'

const PasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setFirstName] = useState('');
  const [lname, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [biography, setBiography] = useState('');
  const [confirmPassword, setConfPassword] = useState({value: '', error: '' })
  const [error, setError] = useState('');

  const next = async () => {

        try {
          firebase.auth().createUserWithEmailAndPassword(email, password)
          
            .then(() => {

              const confPasswordError= confirmPasswordValidator(confirmPassword, password)
              firebase.auth().currentUser.sendEmailVerification().then(function(){
                // Email sent
              }).catch(function(error) {
                // An error happened.
              });
  
              if (confPasswordError) {
                setConfPassword({...confirmPassword, error: confPasswordError})
                
                return
              }

              if(password == confirmPassword){
                let uid = firebase.auth().currentUser.uid;
                      AddUser(email, fname, lname, username, biography, uid)

                      navigation.navigate('RegisterScreen');
              } else {
                setError;
              }
            });

        } catch (err) {
            setError(err.message);
        }
    
        }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      {/* <Logo /> */}
      <Header>Create New Account</Header>
      <Text style={styles.text}>Please enter a valid email address and password. </Text>
  
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email}
        onChangeText={(emailValue) => {
          setEmail(emailValue)
          setFirstName("")
          setLastName("")
          setUserName("")
          setBiography("")
        }}
        error={!!email.error}
        errorText={email.error}
      />
      <TextInput
        label="Password"
        returnKeyType="next"
        value={password}
        onChangeText={(passwordValue) => {
          setPassword(passwordValue)
        }}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <TextInput
        label="Confirm Password"
        returnKeyType="done"
        value={confirmPassword.value}
        onChangeText={(confirmPasswordValue) => {
          setConfPassword(confirmPasswordValue)
        }}
        error={!!confirmPassword.error}
        errorText={confirmPassword.error}
        secureTextEntry
      />
      {
            error ?
                <Text style={{ color: 'red' }}>{error}</Text>
                : null
        }

      <Button title="Next" onPress={() => next()}
        mode="contained"
        style={{ marginTop: 24 }}
      >
        Next
      </Button>

      
    
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 4,
  },
  text: {
    color: theme.colors.text,
    paddingBottom: 30
  },
})

export default PasswordScreen
