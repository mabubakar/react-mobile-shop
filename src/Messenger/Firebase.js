import firebase from 'firebase'

const firebaseapp = firebase.initializeApp({
  apiKey: 'AIzaSyAGq8nh9cZWdfa7McsgcXAGDJTVjZSTFtI',
  authDomain: 'facebook-messenger-abubakar.firebaseapp.com',
  databaseURL: 'https://facebook-messenger-abubakar.firebaseio.com',
  projectId: 'facebook-messenger-abubakar',
  storageBucket: 'facebook-messenger-abubakar.appspot.com',
  messagingSenderId: '819597099240',
  appId: '1:819597099240:web:c98f74d1b60f02664a895d',
  measurementId: 'G-7KBBV51K2H',
})

const db = firebaseapp.firestore()
export default db
