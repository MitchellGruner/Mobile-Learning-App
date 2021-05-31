import React, { useState, useEffect, useCallback  } from 'react'
import { StatusBar, YellowBox } from 'react-native'
import * as Font from 'expo-font';
import { Provider } from 'react-native-paper'
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native'
import { RootDrawerNavigator } from './routes/rootDrawer.js';
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  SuccessfulRegistrationScreen,
  PasswordScreen
} from './src/screens'

///firebase stuff

import firebase from './firebase/fire';
import 'firebase/firestore'

const db = firebase.firestore();

YellowBox.ignoreWarnings(['Setting a timer for a long period of time'])

/// firebase stuff ends

StatusBar.setBarStyle('light-content')
const Stack = createStackNavigator()

const getFonts = () => {
  return Font.loadAsync({
    'CG-regular': require('./assets/fonts/CormorantGaramond-Regular.ttf'),
    'CG-bold': require('./assets/fonts/CormorantGaramond-Bold.ttf'),
  });
};


export default function App() {
  
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {                                     // same as componentDidMount(), code runs before screen loads

    const fetchData = async() => {

        try {
            
            // const citiesRef = db.collection('cities');
            // const snapshot = await citiesRef.get();
            console.log("App Loading");                 
            console.log("App Load Complete\n");         // console.log displays into terminal

          } catch(err) {  
              console.error(err);
          }
    
      };
      fetchData();
          
  });

  if (fontsLoaded) {
    return (
      <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="StartScreen" screenOptions={{headerShown: false,}}>
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
          <Stack.Screen name="SuccessfulRegistrationScreen" component={SuccessfulRegistrationScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}/>
          <Stack.Screen name="HomeScreen" component={RootDrawerNavigator}/>
         
          {/* <RootDrawerNavigator /> */}

        </Stack.Navigator>
      </NavigationContainer>
      
    </Provider>
    );
  } else {
    return <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />;
  }
}