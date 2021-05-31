import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';


// for firebase

import firebase from '../firebase/fire';
import 'firebase/firestore'

const db = firebase.firestore()

// end of firebase code

const courseSchema = yup.object({
  title: yup.string().required().min(1),
});

const CourseEdit = ({ navigation, route }) => {


  async function editCourse (course) {
    
    const courseRef = db.collection('courses');

    await courseRef.doc(route.params.id).update({
      name: course.title,
    });
    
    navigation.goBack();
  };

  return (
    
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: route.params.title }}
        validationSchema={courseSchema}
        onSubmit={(values, actions) => {
          // actions contain some methods to call on form
          //actions.resetForm();
          editCourse(values);
        }}>
        {/* Formik provides these props automatically (any name accepted) */}
        {(formikProps) => (
          <View>

            <Text>Enter a New Name for the Course.</Text>
            <TextInput
              style={globalStyles.input}
              placeholder='Name of Course'
              // this handles/changes the state behind the scenes for us
              onChangeText={formikProps.handleChange('title')}
              // this
              value={formikProps.values.title}
              onBlur={formikProps.handleBlur('title')}
            />
            <Text style={globalStyles.errorText}>{formikProps.touched.title && formikProps.errors.title}</Text>

            <FlatButton
              text='submit'
              //this runs the function 'onSubmit'
              onPress={formikProps.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default CourseEdit;
