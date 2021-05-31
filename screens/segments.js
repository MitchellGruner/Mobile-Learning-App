import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';
import { globalStyles } from '../styles/global';
import { Animated } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import WebView from 'react-native-webview';

//npm install react-native-webview
import SwipeRender from 'react-native-swipe-render'; //npm install--save react - native - swipe - render
import { SafeAreaView } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe"; //npm install react-native-youtube-iframe


//function to extract Youtube ID
export const getYoutubeVideoId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length == 11 ? match[2] : 'error'
}

export default function Segments({ navigation, route }) {
  
  const readingURL = route.params.reading;
  const noReadingURL = 'https://drive.google.com/file/d/1MSkIos09zMJcx2yxVmZ8FhEwMWvtjOvD/view?usp=sharing';
  
  const videoURL = route.params.video;

  const assessmentURL = route.params.assessment;
  const noAssessmentURL = 'https://drive.google.com/file/d/17VQGm0QAXF151tBB1sNEEgpnJFbkaeV_/view?usp=sharing';
  
  const answerURL = route.params.answer; //won't fetch data
  const noAnswerURL = "https://drive.google.com/file/d/1XkqwfV7od3q9zejeruh3MSRHQ3lLgPY5/view?usp=sharing";

  const badURL = "https://drive.google.com/file/d/1v-NKEXN2HHWVAQrzT0j3L_D1mKQRJb8Y/view?usp=sharing";

  
  // console.log(readingURL);
  // console.log(videoURL);
  // console.log(assessmentURL);
  // console.log(answerURL);
  // console.log("\n");

  //Extracting Youtube ID for embedd
  let vidID;
  if (videoURL) {
    vidID = getYoutubeVideoId(videoURL);
  }

  const getReading = (readingURL) => {
    //function to return reading url or if there is no reading url
    if (readingURL) {
      if (readingURL.startsWith('https://drive.google.com/file/') || readingURL.startsWith('https://docs.google.com/file/')) {
        return readingURL;
      }
      return badURL;
    }
    else {
      return noReadingURL;
    }
  }

  const getAssessment = (assessmentURL) => {
    //function to return assessment url or if there is no assessment url
    if (assessmentURL) {
      if (assessmentURL.startsWith('https://drive.google.com/file/') || assessmentURL.startsWith('https://docs.google.com/file/')) {
        return assessmentURL;
      }
      return badURL;
    }
    else {
      return noAssessmentURL;
    }
  }

  const getAnswer = (answerURL) => {
    
    //function to return answer url or if there is no answer url
    if (answerURL) {
      if (answerURL.startsWith('https://drive.google.com/file/') || answerURL.startsWith('https://docs.google.com/file/')) {
        return answerURL;
      }
      return badURL;
    }
    else {
      return noAnswerURL;
    }
  }

  const getVideo = (vidID) => { 
    //function to display a video not available message if there is no video url
    if(!vidID || vidID == ""){
      return <Text>The video for this topic currently is not available.</Text>
    }
  }


  if (readingURL || videoURL || assessmentURL || answerURL) {
    return (
      <SwipeRender
        // OPTIONAL PROP USAGE.
        index={0} // default 0
        loop={false} // default false
        loadMinimal={true} // default false
        loadMinimalSize={2}
        horizontal={true} // default true
        showsHorizontalScrollIndicator={false} //show horizontal bar
        showsPagination={true}
        enableAndroidViewPager={false} // default ScrollView
      // TO ENABLE AndroidViewPager:
      // react-native >= 0.60 - install @react-native-community/viewpager separately
      // react-native < 0.60 - ready to go!
      >

        <WebView //open up reading segment view
           source={{ uri: getReading(readingURL) }} />




        <SafeAreaView //open up video segment view
          style={{ flex: 1 }}>
            <YoutubePlayer height={250} videoId={vidID} />
            <View>
            <Text>{getVideo(vidID)}</Text>
            </View>
        </SafeAreaView>



        <WebView //open up assessment segment view
           source={{ uri: getAssessment(assessmentURL) }} />

        <WebView //open up amswer segment view
          source={{ uri: getAnswer(answerURL) }} />

      </SwipeRender>
    );
  } else {
    return (
      <View style = {{alignItems: 'center'}}>
        <Text style = {{fontSize : 30}}>
          Currently, there is no material for this topic.
      </Text>
      </View>
    );
  }




}


const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  display: {
    flex: 1
  },
  textDisplay: {
    width: '100%',
    height: '100%'
  },

  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 20,
  },
  modalContent: {
    flex: 1,
    padding: 50,
  },
  homeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  courseName: {
    alignItems: 'center',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 100,
    backgroundColor: 'orange',
    //padding: 5,
  },
  topicName: {
    alignItems: 'center',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 100,
    backgroundColor: 'white',
    //padding: 5,
  },
  lessonName: {
    alignItems: 'center',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 100,
    backgroundColor: 'white',
    //padding: 5,
  },
  segName: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 100,
    backgroundColor: 'white',
    //padding: 5,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 20,
  },

});


