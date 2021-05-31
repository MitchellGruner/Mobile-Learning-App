import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/global';

const About = () => {
  return (
    <ImageBackground /*source={require('../assets/game_bg.png')}*/ style={globalStyles.container}>
      <View>
        <Text>
          Mobile Learning App is a course management system (CMS) that supports online learning and teaching. It allows professors to post courses, lessons, topics, documents (e.g. assignments), videos, and assessments all online. Users of Mobile Learning App create condensed online course material in hopes to replace some of the traditional time spent in the classroom. While online and hybrid courses are clearly necessary for the scheduling of classes during and post pandemic, the evolution and distribution of online course material has given rise to mobile applications such as this.
        </Text>
      </View>
      <View>
        <Text>
          Mobile Learning App provides you with a password-protected, personalized online experience in which you will receive your work and communicate with your instructor. Your instructor uses the features provided by Mobile Learning App to create his or her own virtual classroom, so just as your traditional in-class courses may vary, so will your virtual courses. Becoming familiar with the Mobile Learning App environment is the first step to a successful online education when learning through the app .
        </Text>
      </View>
      <View>
        <Text>
          Mobile Learning App provides tools to support online learning in multiple ways. This can range from To-the-Point (TTP) video clips, to interactive online assessments. How a course is presented online depends on the content and complexity of the learning material, and the delivery methodology used by the instructor.
As with any classroom, it is a changing environment – expect each module to apply different tools and techniques.
        </Text>
      </View>
    </ImageBackground>
  );
};

export default About;

const styles = StyleSheet.create({});
