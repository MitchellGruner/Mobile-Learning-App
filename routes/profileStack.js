import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//Custom Components:
import Profile from '../screens-profile/profile';
import EmailDetails from '../screens-profile/emailDetails';
import ProgressDetails from '../screens-profile/progressDetails';
import MessageDetails from '../screens-profile/messageDetails';
import { Header } from '../shared/header';
import { Header2 } from '../shared/header2';
import UpdateProfile from '../screens-profile/updateProfile';

import Courses from '../student-view/courses';
import Topics from '../student-view/topics';
import Lessons from '../student-view/lessons';
import Segments from '../student-view/segments';
import VideoSegment from '../student-view/videoScreen';
import ReadingSegment from '../student-view/readingScreen';
import AssessmentSegment from '../student-view/AssessmentSegment';
import AnswerSegment from '../student-view/answerSegment';

const { Navigator, Screen } = createStackNavigator();

export const ProfileStack = ({ navigation }) => (
  <Navigator
    // headerMode='screen' //default option
    initialRouteName='Profile'
    screenOptions={{
      gestureEnabled: false,
      headerTintColor: '#444',
      headerStyle: { backgroundColor: '#18AE76', height: 70 },
      headerTitleStyle: { fontWeight: 'bold' },
      headerTitleAlign: 'center',
    }}>
    <Screen
      name='Profile'
      component={Profile}
      options={{
        headerTitle: () => <Header title='Profile' navigation={navigation} />,
      }}
    />

    {/* <Screen
      name='CoursesPage'
      component={CourseDetails}
      options={{
        title: 'Courses',
      }}
    /> */}

    <Screen
      name='EmailPage'
      component={EmailDetails}
      options={{
        title: 'Email',
      }}
    />

    <Screen
      name='ProgressPage'
      component={ProgressDetails}
      options={{
        title: 'Course Progress',
      }}
    />

    <Screen
      name='MessagesPage'
      component={MessageDetails}
      options={{
        title: 'Messaging',
      }}
    />

    <Screen
      name='UpdatingPage'
      component={UpdateProfile}
      options={{
        title: 'Update Profile',
      }}
    />


    <Screen
      name='Courses'
      component={Courses}
      options={{
        headerTitle: () => <Header2 title='Course Menu' navigation={navigation} />,
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
      name='Lessons'
      component={Lessons}
      options={{
        headerTitle: () => <Header2 title='Topic Lessons' navigation={navigation} />,
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
        headerTitle: () => <Header2 title='Lessons Segments' navigation={navigation} />,
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
