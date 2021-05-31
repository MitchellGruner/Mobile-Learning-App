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

const topicSchema = yup.object({
  title: yup.string().required().min(1),
  level: yup.number().required().integer(),
});

const TopicEdit = ({ navigation, route }) => {

    async function editTopic (topic) {

        const topicRef = db.collection('courses').doc(route.params.course_id).collection('topics');

        await topicRef.doc(route.params.id).update({
            name: topic.title,
            level: topic.level
        });

        console.log(topic);

        navigation.goBack();
    };

  return (
    
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: route.params.title, level: route.params.level}}
        validationSchema={topicSchema}
        onSubmit={(values, actions) => {
          // actions contain some methods to call on form
          //actions.resetForm();
          editTopic(values);
        }}>
        {/* Formik provides these props automatically (any name accepted) */}
        {(formikProps) => (
          <View>

            <Text>Enter a New Name for the Topic.</Text>
            <TextInput
              style={globalStyles.input}
              placeholder='Name of Topic'
              // this handles/changes the state behind the scenes for us
              onChangeText={formikProps.handleChange('title')}
              // this
              value={formikProps.values.title}
              onBlur={formikProps.handleBlur('title')}
            />
            <Text style={globalStyles.errorText}>{formikProps.touched.title && formikProps.errors.title}</Text>

            <Text>Enter an integer as the level. Lower level topics appear first.</Text>
            <TextInput
              style={globalStyles.input}
              placeholder='Integer'
              onChangeText={formikProps.handleChange('level')}
              value={formikProps.values.level}
              keyboardType='numeric'
              onBlur={formikProps.handleBlur('level')}
            />
            <Text style={globalStyles.errorText}>{formikProps.touched.level && formikProps.errors.level}</Text>

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


export default TopicEdit;
