import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const courseSchema = yup.object({
  title: yup.string().required().min(1),
});

export default function CourseForm({ createCourse }) {

  return (
    
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '' }}
        validationSchema={courseSchema}
        onSubmit={(values, actions) => {
          // actions contain some methods to call on form
          actions.resetForm();
          createCourse(values);
        }}>
        {/* Formik provides these props automatically (any name accepted) */}
        {(formikProps) => (
          <View>

            <Text>Enter a Name for the Course.</Text> 
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
}
