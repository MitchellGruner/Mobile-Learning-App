import React, { useState, useEffect } from 'react';
//import { db } from '../src/config/config';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Modal, Button,
} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CourseForm from './courseForm';

// for firebase

import firebase from '../firebase/fire';
import 'firebase/firestore'

const db = firebase.firestore()

// end of firebase code

const Courses = ({ navigation }) => {
  const [modalOpen, setmodalOpen] = useState(false);
  var [values, setValues] = useState(0);                  // NOT USED

  const [course, setCourse] = useState([
   // { title: 'Physics 101', rating: 5, body: 'lorem ipsum', key: '1' },
   // { title: 'Strength of Materials', rating: 4, body: 'lorem ipsum', key: '2' },
   // { title: 'Class 3', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  const addCourse = (course) => {
    course.key = Math.random().toString();        // Later with Database, change how key is chosen
    setCourse((currentCourse) => {
      return [...currentCourse, course];
    });
    setmodalOpen(false);
    //console.log(course);
  };

  const hello = () => {
    console.log("hello called");
  }; 


  useEffect(() => {                                     // same as componentDidMount(), code runs before screen loads

    databaseRead()
          
  }, []);


  async function databaseRead(){      
    
    deleteOldStates();

    const fetchData = async() => {

      try {
          
        const courseRef = db.collection('courses');
        const snapshot = await courseRef.get();
        console.log("--Courses Read---");
        
        if (snapshot.empty) {
            console.log('No matching documents.');
            return;
        }  
        
        snapshot.forEach(doc => {

          const SME = firebase.auth().currentUser.uid;
          if(doc.get("SME") == SME){

            this.state={
              id: doc.id,
              title: doc.get("name")
            }
            addCourse(this.state);
           
          }
        });
        console.log("--End of Courses Read---\n");

        } catch(err) {
            console.error(err);
        }
  
    };
    fetchData();

  }


  async function createCourse(course) {
    
    const courseRef = db.collection('courses');
    const SME = firebase.auth().currentUser.uid;

    const res = await courseRef.add({
      name: course.title,
      SME: SME,
    });

    course.id = res.id;

    addCourse(course);
  };


  async function addChanges(course) {           // NOT USED

    var newTitle;

    const courseRef = db.collection('courses');
    const snapshot = await courseRef.get();

    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }  
    
    snapshot.forEach(doc => {
      if(doc.id == course.id){
        newTitle = doc.get("name");
      }
    });

    console.log(newTitle);
    
  }

  function deleteOldStates(){

    setCourse((currentCourse) => {
      return [];
    });
  
  }



  return (
    
    <ImageBackground /*source={require('../assets/game_bg.png')}*/ style={globalStyles.container}>

      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name='close'
              size={24}
              onPress={() => setmodalOpen(false)}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
            />
            <CourseForm createCourse={createCourse} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
 
      <FlatList
        data={course.sort((a, b) => a.title.localeCompare(b.title))}
        renderItem={({ item }) => (
          //touchableopacity is a wrapper to onPress/onClick
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Topics', item)}
          onLongPress={() =>  navigation.navigate('CourseEdit', item, deleteOldStates() )}>  
            {/* second argument is the data we want to pass as props. It can be an obj, or arr, or anything */}
              <Text style={globalStyles.titleText}>{item.title} </Text>
          </TouchableOpacity>
        )}
      />

      <MaterialIcons name='add' size={24} onPress={() => setmodalOpen(true)} style={styles.modalToggle} />

      <TouchableOpacity style={globalStyles.reload}
        onPress={() =>
          databaseRead()
        }
      >
        <Text style={globalStyles.titleText}>Reload</Text>
      </TouchableOpacity>
      
    </ImageBackground>
  );
};

export default Courses;

const styles = StyleSheet.create({
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
  item: {
    alignItems: 'center',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 100,
    backgroundColor: 'orange',  
  },
});
