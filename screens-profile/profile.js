import React, {useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  Dimensions, TouchableHighlight, ScrollView
} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import firebase from '../firebase/fire';
import Background from '../src/components/Background'

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);


const Profile = ({ navigation }) => {
  
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

  const [modalOpen, setmodalOpen] = useState(false);

  const [courses_page, setReviews1] = useState([
    { title: 'Courses', rating: 5, key: '1' },
  ]);

  // const [email_page, setReviews2] = useState([
  //   { title: 'Email', rating: 4, body: 'lorem ipsum', key: '2' },
  // ]);

  // const [class_progress_page, setReviews3] = useState([
  //   { title: 'Course Progress', rating: 3, body: 'lorem ipsum', key: '3' },
  // ]);

  // const [messaging_page, setReviews] = useState([
  //   { title: 'Messaging', rating: 3, body: 'lorem ipsum', key: '4' },
  // ]);

  const [updating_page, setReviews4] = useState([
    { title: 'Update Profile', rating: 3, body: 'lorem ipsum', key: '4' },
  ]);

  return ( 
  <Background>
    <ScrollView style={{ backgroundColor: '#18AE76'}} style={globalStyles.container}>
    <Text style={globalStyles.header}>Account Information</Text>

      <ScrollView style={globalStyles.profile}>
        <Text style={globalStyles.label}>Name:</Text>
          <Text style={globalStyles.profileName}>
           {loggedIn.fname} {loggedIn.lname}{"\n"}
          </Text>
          <Text style={globalStyles.label}>Bio:</Text>
          
          <Text style={globalStyles.profileParagraph}>
          {loggedIn.biography}
        </Text>
      </ScrollView>

      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent} style={globalStyles.courses}>
            <MaterialIcons
              name='close'
              size={24}
              onPress={() => setmodalOpen(false)}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
            />
            
          </View>
          <View style={styles.modalContent} style={globalStyles.courses}>
            <MaterialIcons
              name='close'
              size={24}
              onPress={() => setmodalOpen(false)}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
            />
            
          </View>
          <View style={styles.modalContent} style={globalStyles.courses}>
            <MaterialIcons
              name='close'
              size={24}
              onPress={() => setmodalOpen(false)}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
            />
            
          </View>
          <View style={styles.modalContent} style={globalStyles.courses}>
            <MaterialIcons
              name='close'
              size={24}
              onPress={() => setmodalOpen(false)}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
            />
            
          </View>
          <View style={styles.modalContent} style={globalStyles.courses}>
            <MaterialIcons
              name='close'
              size={24}
              onPress={() => setmodalOpen(false)}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
            />
            
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <View style={ globalStyles.profileButton, styles.row }>
    <FlatList
      data={courses_page}
      renderItem={({item}) => (
    
        <TouchableHighlight
      style = {{
        backgroundColor:'#a1b000',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      underlayColor = '#ccc'
      onPress = { () => navigation.navigate('Courses', item) }
    >

      <Text style={globalStyles.profileText}>Courses</Text>
    </TouchableHighlight>
      )}
      />
     </View>

      <View style={ globalStyles.profileButton, styles.row }>

      <FlatList
      data={updating_page}
      renderItem={({item}) => (
     
        <TouchableHighlight
      style = {{
        backgroundColor:'#1875AE',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      underlayColor = '#ccc'
      onPress = { () => navigation.navigate('UpdatingPage', item) }
    >
      <Text style={globalStyles.profileText}>Edit Profile</Text>
    </TouchableHighlight>
      )}
      />
      </View>
      <View style={ styles.filler }></View>

      <TouchableOpacity style={styles.logout}
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'Profile' }],
          })
        }
      >
            <Text style={globalStyles.titleText}>Refresh</Text>
          </TouchableOpacity>
      <TouchableOpacity style={styles.logout}
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        <Text style={globalStyles.titleText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
    </Background>
  );
};

export default Profile;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 4,
  },
  filler: {
    flexDirection: 'row',
    paddingTop: 50,
    marginBottom: 4,
  },
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 20,
  },
  modalContent: {
    flex: 1,
    padding: 50,
  },
  logout: {
    alignItems: 'center',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 56,
    borderRadius: 100,
    backgroundColor: 'white',
  },
  
});
