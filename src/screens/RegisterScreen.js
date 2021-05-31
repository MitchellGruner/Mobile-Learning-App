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
import Button2 from '../components/Button2'
import { nameValidator } from '../helpers/nameValidator'
import { userValidator } from '../helpers/userValidator'
import firebase from '../../firebase/fire';

const RegisterScreen = ({ navigation }) => {
  const[loggedIn, setLoggedIn] = React.useState({
    id: '',
    email: '',
    fname: '',
    lname: '',
    username: '',
    biography: '',
  });

  React.useEffect(() => {
    firebase.database().ref(`users/${firebase.auth().currentUser.uid}`).once('value', (snapshot) => {
      setLoggedIn({
        id: snapshot.val().uid,
        email: snapshot.val().email,
        fname: snapshot.val().fname,
        lname: snapshot.val().lname,
        username: snapshot.val().username,
        biography: snapshot.val().biography
      });
    });
  }, [])

  const [error, setError] = useState('');

  const handleUpdate = async() => {
    console.log("Handle Update is being called...");
    firebase.database().ref(`users/${firebase.auth().currentUser.uid}`).update({
      fname: loggedIn.fname,
      lname: loggedIn.lname,
      username: loggedIn.username,
      biography: loggedIn.biography,
    })
    .then(() => {
      console.log('User Updated!');
      
      try {
        register()
      } catch(error){
        console.log(error);
      }
    })
  }

  const [fname, setFirstName] = useState('');
  const [lname, setLastName] = useState('');
  const [username, setUserName] = useState('');

    const register = async () => {
      // const fnameError = nameValidator(fname.value)
      // const lnameError = nameValidator(lname.value)
      // const userError = userValidator(username.value)
    
      // if (fnameError || lnameError|| userError ) {
      //   setFirstName({...fname, error: fnameError})
      //   setLastName({...lname, error: lnameError})
      //   setUserName({...username, error: userError})
      //   return
      // }

      try {
        navigation.navigate('SuccessfulRegistrationScreen');
      } catch(error){
        console.log(error);
      }
    }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      {/* <Logo /> */}
      <View style={styles.row}>
        <Header>Create New Account</Header>
        
    </View>
    <Text style={styles.text}>Enter name and create username</Text>
    <TextInput
        label="First Name"
        returnKeyType="next"
        value={loggedIn ? loggedIn.fname : ''}
        onChangeText={(txt) => setLoggedIn({...loggedIn, fname: txt})}
        error={!!fname.error}
        errorText={fname.error}
      />
      <TextInput
        label="Last Name"
        returnKeyType="next"
        value={loggedIn ? loggedIn.lname : ''}
        onChangeText={(txt) => setLoggedIn({...loggedIn, lname: txt})}
        error={!!lname.error}
        errorText={lname.error}
      />
      <TextInput
        label="Username"
        returnKeyType="next"
        value={loggedIn ? loggedIn.username : ''}
        onChangeText={(txt) => setLoggedIn({...loggedIn, username: txt})}
        error={!!username.error}
        errorText={username.error}
      />

      {
            error ?
                <Text style={{ color: 'red' }}>{error}</Text>
                : null
        }


      <Button title="done" onPress={() => handleUpdate()}
        mode="contained"
        style={{ marginTop: 24 }}
      >
        Finish
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
    marginBottom: 9
  },
});

export default RegisterScreen;
