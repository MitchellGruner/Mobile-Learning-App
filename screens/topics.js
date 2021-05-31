import { NavigationContainer, StackActions } from '@react-navigation/native';
import React, { useState, useEffect, cloneElement } from 'react';
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
import TopicForm from './topicForm';
//import { db } from '../src/config/config';

// for firebase

import firebase from '../firebase/fire';
import 'firebase/firestore';

const db = firebase.firestore();

// end of firebase code



const Topics = ({ navigation, route }) => {
  // const pressHandler = () => {
  //   navigation.goBack();
  // };

  const [modalOpen, setmodalOpen] = useState(false);

  const [topic, setTopic] = useState([
    //{ title: 'Topic 1', course: route.params.title, key: '1' },
    //{ title: 'Topic 2', course: route.params.title, key: '2' },

  ]);

  const addTopic = (topic) => {
    topic.course = route.params.title;
    topic.course_id = route.params.id; 
    topic.key = Math.random().toString();           // Later with Database, change how key is chosen
    setTopic((currentTopic) => {
      return [...currentTopic, topic];
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
        //subcollections -- non dynamic, needs to recompile
        const topicRef = db.collection('courses').doc(route.params.id).collection('topics');
        const snapshot = await topicRef.get();

        console.log("--Topics Read---");
        
        if (snapshot.empty) {
            console.log('No matching documents.');
            return;
        }  
        
        snapshot.forEach(doc => {
            
            this.state={
              id: doc.id,
              title: doc.get("name"),
              level: doc.get("level")
            }
            
            //console.log(this.state);
            addTopic(this.state);

        });
        console.log("--End of Topics Read---\n");

        } catch(err) {
            console.error(err);
        }
  
    };
    fetchData();

  }

  async function createTopic(topic) {
    
    const topicRef = db.collection('courses').doc(route.params.id).collection('topics');

    const res = await topicRef.add({
      name: topic.title,
      level: topic.level
    });

    topic.id = res.id;

    addTopic(topic);
  };
  
  function deleteOldStates(){

    setTopic((currentTopic) => {
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
            <TopicForm createTopic={createTopic} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>  

      <View style={styles.courseName}>
        <Text style={styles.boldText}>{route.params.title}</Text>
      </View>

      <FlatList 
        data={topic.sort((a, b) => {return a.level - b.level;})}
        renderItem={({ item }) => (
          //touchableopacity is a wrapper to onPress/onClick
          <TouchableOpacity onPress={() => navigation.navigate('Lessons', item)}
          onLongPress={() =>  navigation.navigate('TopicEdit', item, deleteOldStates() )}>
            {/* second argument is the data we want to pass as props. It can be an obj, or arr, or anything */}
            <Card style={styles.courseName}>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
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

export default Topics;

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
  boldText: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});
