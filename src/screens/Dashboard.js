import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

// THIS PAGE SHOULD NOT BE SEEN IN THE FINAL PRODUCT

const Dashboard = ({ navigation }) => (
  <Background>
    <Paragraph>
    NOTE: This page should not be seen in the final product, 
    and should only be visited for testing purposes if needed
    </Paragraph>
    <Paragraph>- Justin</Paragraph>
    <Logo />
    <Header>Home Page</Header>
    <Paragraph>
      Dashboard / Home Menu / User Profile Implementation Filler Page
    </Paragraph>
    <Button
      mode="outlined"
      onPress={() =>
        navigation.reset({
          index: 0,
          routes: [{ name: 'StartScreen' }],
        })
      }
    >
      Logout
    </Button>

    {/* Test Button below */}
    <Button
      mode="outlined"
      onPress={() =>
        navigation.reset({
          index: 0,
          routes: [{ name: 'LoginScreen' }],
        })
      }
    >
      Test: bring me to login page

    </Button>
    
  </Background>
)

export default Dashboard
