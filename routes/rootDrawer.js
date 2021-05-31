import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
//other navigators
import { CourseStack } from './courseStack';
import { AboutStack } from './aboutStack';
import { ProfileStack } from './profileStack';


// for firebase

import firebase from '../firebase/fire';
import 'firebase/firestore'

const db = firebase.firestore()

// end of firebase code



// const Drawer = createDrawerNavigator();
const { Navigator, Screen } = createDrawerNavigator();

var SME_privileges = "false";

function databaseRead(){      
    
  firebase.database().ref(`users/${firebase.auth().currentUser.uid}`).once('value', (snapshot) => {

    //console.log("SME: ", snapshot.val().SME);

    if(snapshot.val().SME){
      SME_privileges = snapshot.val().SME;
    }
    else{
      SME_privileges = "false";
    }

  });

}

export const RootDrawerNavigator = () => {

  //console.log("Root Drawer Loaded");

  databaseRead()

  // if(firebase.auth().currentUser.SME != null){
  //   console.log("First If");

  //   if(firebase.auth().currentUser.SME == "true"){
  //     SME_privileges = "true";   
  //   }

  // }
  

  if (SME_privileges == "true"){

    return (
      <Navigator initialRouteName='Courses'>
        <Screen name='Profile' component={ProfileStack} />
        <Screen name='Courses (SME)' component={CourseStack} />
        <Screen name='About' component={AboutStack} />
      </Navigator>
      
    );
  }

  else{

    return (
      <Navigator initialRouteName='Courses'>
        <Screen name='Profile' component={ProfileStack} />
        <Screen name='About' component={AboutStack} />
      </Navigator>
      
    );
  }
  
};
