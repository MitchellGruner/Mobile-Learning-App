import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  
  },
  container1: {
    flex: 1,
    width: '100%',
  },
  titleText: {
    fontFamily: 'CG-regular',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 10,
  },
  errorText: {
    marginBottom: 15,
    color: 'crimson',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  profile: {
    backgroundColor: '#FFFFFF',
    borderColor: '#1875AE',
    borderWidth: 5,
    padding: 5,
    height: 200,
  },
  profileParagraph: {
    color: 'black',
    fontFamily: 'CG-regular',
    fontSize: 22,
  },
  courses: {
    paddingTop:20,
    paddingBottom:20,
    color:'#fff',
    textAlign:'center',
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    fontSize: 20,
    marginBottom: 10,
  },
  physics: {
    color: 'purple',
    textAlign: 'center',
    padding: 10,
    fontSize: 18,
  },
  calculus: {
    color: 'red',
    textAlign: 'center',
    padding: 10,
    fontSize: 18,
  },
  oop: {
    color: 'green',
    textAlign: 'center',
    padding: 10,
    fontSize: 18,
  },
  physicsProgress: {
    color: 'purple',
    textAlign: 'left',
    fontSize: 20,
    padding: 10,
  },
  calculusProgress:{
    color: 'red',
    textAlign: 'left',
    fontSize: 20,
    padding: 10,
  },
  oopProgress: {
    color: 'green',
    textAlign: 'left',
    fontSize: 20,
    padding: 10,
  },
  completed: {
    fontSize: 15,
    color: 'green',
  },
  due: {
    fontSize: 10,
    color: 'red',
  },
  assignment: {
    fontSize: 15,
    color: 'blue',
  },
  date: {
    fontSize: 15,
    color: 'green',
  },
  time: {
    fontSize: 10,
    color: 'black'
  },
  emailImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  messageParagraph: {
    fontSize: 12,
    color: 'black',
  },
  profileName: {
    fontSize: 20,
    fontFamily: 'CG-regular',
    color: 'black',
  },
  label: {
    fontSize: 22,
    fontFamily: 'CG-regular',
    color: 'black',
    fontWeight: 'bold',
  },
  reload: {
    alignItems: 'center',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 28,
    borderRadius: 100,
    backgroundColor: 'white',
  },

  header: {
    fontSize: 30,
    color: '#1875AE',
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center'
  },
  profileButton: {
    flexDirection:"row",
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    margin: 12,
    padding: 10,
  },
  profileText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'CG-regular',
    lineHeight: 26,
    margin: 9,
    padding: 10,
    marginTop: 5
  },
});

export const images = {
  ratings: {
    1: require('../assets/rating-1.png'),
    2: require('../assets/rating-2.png'),
    3: require('../assets/rating-3.png'),
    4: require('../assets/rating-4.png'),
    5: require('../assets/rating-5.png'),
  },
};
