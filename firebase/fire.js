import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDJ60ovpzOlpVo9OhQuQ88otr97oJ0eGEY",
  authDomain: "react-native-chat-e1277.firebaseapp.com",
  projectId: "react-native-chat-e1277",
  storageBucket: "react-native-chat-e1277.appspot.com",
  messagingSenderId: "727415625285",
  appId: "1:727415625285:web:0b51b7dfc86ad70de9352c"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
