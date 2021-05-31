import React, {useState} from 'react'
import {StyleSheet} from 'react-native'
import Background from '../src/components/Background'
import Logo from '../src/components/Logo'
import Header from '../src/components/Header'
import TextInput from '../src/components/TextInput'
import BackButton from '../src/components/BackButton'
import {theme} from '../src/core/theme'
import {Button, Text} from 'react-native-elements';
import firebase from '../firebase/fire';

const UpdateProfile = ({navigation}) => {
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
      navigation.navigate('Profile');
    })
  }

  return (
    <Background>
      <Logo />
      <Header>Update Account</Header>
      
      <TextInput
        label="First Name"
        returnKeyType="next"
        placeholder={loggedIn.fname}
        value={loggedIn ? loggedIn.fname : ''}
          onChangeText={(txt) => setLoggedIn({...loggedIn, fname: txt})}
      />
      <TextInput
        label="Last Name"
        returnKeyType="next"
        placeholder={loggedIn.lname}
        value={loggedIn ? loggedIn.lname : ''}
          onChangeText={(txt) => setLoggedIn({...loggedIn, lname: txt})}
      />
       <TextInput
        label="Username"
        returnKeyType="next"
        placeholder={loggedIn.username}
        value={loggedIn ? loggedIn.username : ''}
            onChangeText={(txt) => setLoggedIn({...loggedIn, username: txt})}
      />
      <TextInput
        label="Biography"
        returnKeyType="next"
        placeholder={loggedIn.biography}
        value={loggedIn ? loggedIn.biography : ''}
            onChangeText={(txt) => setLoggedIn({...loggedIn, biography: txt})}
      />

      <Button title="Update" onPress={handleUpdate}
          mode="contained"
          style={{ marginTop: 24 }}
        >Update
      </Button>
      {
            error ?
                <Text style={{ color: 'red' }}>{error}</Text>
                : null
      }
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.link,
  },
})

export default UpdateProfile;
