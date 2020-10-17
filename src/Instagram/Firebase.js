import firebase from 'firebase/app'
import 'firebase/auth' // for authentication
import 'firebase/storage' // for storage
import 'firebase/firestore' // for cloud firestore

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCKkcCULYDlwegl1UBUrctsdbVsTIUb-DY',
  authDomain: 'abubakar-instagram-clone.firebaseapp.com',
  databaseURL: 'https://abubakar-instagram-clone.firebaseio.com',
  projectId: 'abubakar-instagram-clone',
  storageBucket: 'abubakar-instagram-clone.appspot.com',
  messagingSenderId: '203439995319',
  appId: '1:203439995319:web:35856492224241bef51032',
  measurementId: 'G-XSQ1D2E7GJ',
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export default db
export { auth, storage }
