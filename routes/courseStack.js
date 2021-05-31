import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//Custom Components:
import Courses from '../screens/courses';
import Topics from '../screens/topics';
import Lessons from '../screens/lessons';
import Segments from '../screens/segments';
import { Header } from '../shared/header';
import { Header2 } from '../shared/header2';
import { ImageBackground } from 'react-native';
import CourseEdit from '../screens/courseEdit';
import TopicEdit from '../screens/topicEdit';
import LessonEdit from '../screens/lessonEdit';
import VideoSegment from '../screens/videoScreen';
import ReadingSegment from '../screens/readingScreen';
import AssessmentSegment from '../screens/AssessmentSegment';
import AnswerSegment from '../screens/answerSegment';

const { Navigator, Screen } = createStackNavigator();

export const CourseStack = ({ navigation }) => (
  <Navigator
    // headerMode='screen' //default option
    initialRouteName='Courses'
    screenOptions={{
      gestureEnabled: false,
      headerTintColor: '#444',
      headerStyle: { backgroundColor: '#7ccff7', height: 70 },
      headerTitleStyle: { fontWeight: 'bold' },
      headerTitleAlign: 'center',
    }}>
    <Screen
      name='Courses'
      component={Courses}
      options={{
        headerTitle: () => <Header title='Course Menu' navigation={navigation} />,
      }}
    />

    <Screen
      name='CourseEdit'
      component={CourseEdit}
      options={{
        title: 'Edit Course',
      }}
    />

    <Screen
      name='Topics'
      component={Topics}
      options={{
        //title: 'Table of Contents',
        headerTitle: () => <Header2 title='Course Topics' navigation={navigation} />,
      }}
    />

    <Screen
      name='TopicEdit'
      component={TopicEdit}
      options={{
        title: 'Edit Topic',
      }}
    />

    <Screen
      name='Lessons'
      component={Lessons}
      options={{
        headerTitle: () => <Header2 title='Topic Lessons' navigation={navigation} />,
      }}
    />

    <Screen
      name='LessonEdit'
      component={LessonEdit}
      options={{
        title: 'Edit Lesson',
      }}
    />

    <Screen
      name='Segments'
      component={Segments}
      options={{
        headerTitle: () => <Header2 title='Lesson Segments' navigation={navigation} />,
      }}
    />
    
    <Screen
      name='ReadingSegment'
      component={ReadingSegment}
      options={{
        headerTitle: () => <Header2 title='Lesson Segments' navigation={navigation} />,
      }}
    />
    <Screen
      name='VideoSegment'
      component={VideoSegment}
      options={{
        headerTitle: () => <Header2 title='Lesson Segments' navigation={navigation} />,
      }}
    />


    <Screen
      name='AssessmentSegment'
      component={AssessmentSegment}
      options={{
        headerTitle: () => <Header2 title='Lesson Segments' navigation={navigation} />,
      }}
    />

    <Screen
      name='AnswerSegment'
      component={AnswerSegment}
      options={{
        headerTitle: () => <Header2 title='Lesson Segments' navigation={navigation} />,
      }}
    />
  </Navigator>
);
