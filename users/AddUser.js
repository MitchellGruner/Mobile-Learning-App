import {Alert} from 'react-native'
import firebase from '../firebase/fire';

export const AddUser = async (email, fname, lname, username, biography, uid) => {
    try {
        return await firebase.database().ref(`users/${uid}`)
        .set({
            email: email,
            fname: fname,
            lname: lname,
            username: username,
            biography: biography,
            uid: uid,
        })
    } catch (err) {
        Alert.alert(err)
    }
}