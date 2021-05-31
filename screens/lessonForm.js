import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';
import { ScrollView } from 'react-native-gesture-handler';

const lessonSchema = yup.object({
  title: yup.string().required().min(1),
  level: yup.number().required().integer(),
});

export default function LessonForm({ createLesson }) {

  return (
    
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', level: '', video: '', reading: '', assessment:'', answer: ''}}
        validationSchema={lessonSchema}
        onSubmit={(values, actions) => {
          // actions contain some methods to call on form
          actions.resetForm();
          createLesson(values);
        }}>
        {/* Formik provides these props automatically (any name accepted) */}
        {(formikProps) => (
          <ScrollView style ={{flex: 1}}>

            <Text>Enter a Name for the Lesson.</Text>
            <TextInput
              style={globalStyles.input}
              placeholder='Name of Lesson'
              // this handles/changes the state behind the scenes for us
              onChangeText={formikProps.handleChange('title')}
              // this
              value={formikProps.values.title}
              onBlur={formikProps.handleBlur('title')}
            />
            <Text style={globalStyles.errorText}>{formikProps.touched.title && formikProps.errors.title}</Text>

            <Text>Enter an integer as the level. Lower level lessons appear first.</Text>
            <TextInput
              style={globalStyles.input}
              placeholder='Integer'
              onChangeText={formikProps.handleChange('level')}
              value={formikProps.values.level}
              keyboardType='numeric'
              onBlur={formikProps.handleBlur('level')}
            />
            <Text style={globalStyles.errorText}>{formikProps.touched.level && formikProps.errors.level}</Text>

            <Text>Enter the "Share" URL for the Word Doc or PDF for the appropriate Reading. </Text>
            <Text>Sharing Priveleges on Google Drive should be set as follows: "Anyone on the internet with this link can view"</Text>
            <TextInput
              style={globalStyles.input}
              placeholder='Reading URL'
              onChangeText={formikProps.handleChange('reading')}
              value={formikProps.values.reading}
              onBlur={formikProps.handleBlur('reading')}
            />

            <Text>Enter YouTube URL for the appropriate Video.</Text>
            <TextInput
              style={globalStyles.input}
              placeholder='Video URL'
              onChangeText={formikProps.handleChange('video')}
              value={formikProps.values.video}
              onBlur={formikProps.handleBlur('video')}
            />

            <Text>Enter the "Share" URL for the Word Doc or PDF for the appropriate Assessment. </Text>
            <Text>Sharing Priveleges on Google Drive should be set as follows: "Anyone on the internet with this link can view"</Text>
            <TextInput
              style={globalStyles.input}
              placeholder='Assessment URL'
              onChangeText={formikProps.handleChange('assessment')}
              value={formikProps.values.assessment}
              onBlur={formikProps.handleBlur('assessment')}
            />
            
            <Text>Enter the "Share" URL for the Word Doc or PDF for the appropriate Assessment answer keys. </Text>
            <Text>Sharing Priveleges on Google Drive should be set as follows: "Anyone on the internet with this link can view"</Text>
            <TextInput
              style={globalStyles.input}
              placeholder='Assessment answer keys URL'
              onChangeText={formikProps.handleChange('answer')}
              value={formikProps.values.answer}
              onBlur={formikProps.handleBlur('answer')}
            />
            
            <FlatButton
              text='submit'
              //this runs the function 'onSubmit'
              onPress={formikProps.handleSubmit}
            />
          </ScrollView>
        )}
      </Formik>
    </View>
  );
}
