import { NavigationContainer, StackActions, useLinkProps } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, View, 
  Image, 
  ImageBackground, 
  Button, 
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
} from 'react-native';
import Card from '../shared/card';
import { globalStyles, images } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import LessonForm from './lessonForm';
//import { db } from '../src/config/config';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import WebView from 'react-native-webview';

// for firebase

import firebase from '../firebase/fire';
import 'firebase/firestore';

const db = firebase.firestore();

// end of firebase code

const Lessons = ({ navigation, route }) => {
  // const pressHandler = () => {
  //   navigation.goBack();
  // };

  const [modalOpen, setmodalOpen] = useState(false);

  const [lesson, setLesson] = useState([
    //{ title: 'Lesson 1', key: '1' },
    //{ title: 'Lesson 2', key: '2' },

  ]);

  const addLesson = (lesson) => {
    lesson.course = route.params.course;
    lesson.course_id = route.params.course_id;
    lesson.topic = route.params.title;
    lesson.topic_id = route.params.id;
    lesson.key = Math.random().toString();           // Later with Database, change how key is chosen
    setLesson((currentLesson) => {
      return [...currentLesson, lesson];
    });
    setmodalOpen(false);
  };

  useEffect(() => {                                     // same as componentDidMount(), code runs before screen loads

    databaseRead()
          
  }, []);

  async function databaseRead(){ 

    deleteOldStates();

    const fetchData = async() => {

      try {
        //console.log("id: "+route.params.id);
        const lessonRef = db.collection('courses').doc(route.params.course_id).collection('topics')
                          .doc(route.params.id).collection('lessons');
        const snapshot = await lessonRef.get();

        console.log("--Lessons Read---");
        
        if (snapshot.empty) {
            console.log('No matching documents.');
            return;
        }  
        
        snapshot.forEach(doc => {
            
            this.state={
              id: doc.id,
              title: doc.get("name"),
              name: doc.get("name"),
              level: doc.get("level"),
              reading: doc.get("reading"),
              video: doc.get("video"),
              assessment: doc.get("assessment"),
              answer: doc.get("answer")
            }
            
            //console.log(this.state);
            addLesson(this.state);

        });
        console.log("--End of Lessons Read---\n");

        } catch(err) {
            console.error(err);
        }
  
    };
    fetchData();

  }

  async function createLesson(lesson) {

    if(lesson.video == null){
        lesson.video = "";
    }
    if(lesson.reading == null){
      lesson.reading = "";
    }
    if(lesson.assessment == null){
      lesson.assessment = "";
    }
    if (lesson.answer == null) {
      lesson.answer = "";
    }
    
    const lessonRef = db.collection('courses').doc(route.params.course_id).collection('topics')
                  .doc(route.params.id).collection('lessons');


    const res = await lessonRef.add({
      name: lesson.title,
      level: lesson.level,
      reading: lesson.reading,  
      video: lesson.video,
      assessment: lesson.assessment,
      answer: lesson.answer
    });


    lesson.id = res.id;
    lesson.name = lesson.title;             // "title" and "name" are the same field, some parts of code use "title", others use "name"
    addLesson(lesson);
  };

  function deleteOldStates(){

    setLesson((currentLesson) => {
      return [];
    });
  
  }


  return (
    <ImageBackground /*source={require('../assets/game_bg.png')}*/ style={globalStyles.container}>

      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView style ={{flex: 1}}>
          <View style={styles.modalContent}> 
            <MaterialIcons
              name='close'
              size={24}
              onPress={() => setmodalOpen(false)}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
            />
            <LessonForm createLesson={createLesson}/>
          </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </Modal>  

      <View style={styles.courseName}>
        <Text style={styles.boldText}>{route.params.course}</Text>
      </View>

      <View style={styles.topicName}>
        <Text style={globalStyles.titleText}>{route.params.title}</Text>
      </View>

      <FlatList 
        data={lesson.sort((a, b) => {return a.level - b.level;})}
        renderItem={({ item }) => (
          //touchableopacity is a wrapper to onPress/onClick
          <TouchableOpacity onPress={() => navigation.navigate('Segments', item)}
            onLongPress={() =>  navigation.navigate('LessonEdit', item, deleteOldStates() )}>
            {/* second argument is the data we want to pass as props. It can be an obj, or arr, or anything */}
            <Card style={styles.courseName}>
              <Text style={globalStyles.titleText}>{item.name}</Text>
            </Card>
                  
          </TouchableOpacity>
        )}
      />


      <MaterialIcons name='add' size={24} onPress={() => setmodalOpen(true)} style={styles.modalToggle} style={styles.modalToggle} />

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


export default Lessons;

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
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
  homeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  courseName: {
    alignItems: 'center',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 100,
    backgroundColor: 'orange',
    //padding: 5,
  },
  topicName: {
    alignItems: 'center',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 100,
    backgroundColor: 'white',
    //padding: 5,
  },
  lessonName: {
    alignItems: 'center',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 100,
    backgroundColor: 'white',
    //padding: 5,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  item: {
    alignItems: 'center',
    padding: 30,
    marginVertical: 8,
    marginHorizontal: 56,
    borderRadius: 100,
    backgroundColor: 'white',
  },
});


