import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyChH494F8OLlnWd7NBXeKSCcKrW7aWo4MY',
  authDomain: 'todo-list-a87c3.firebaseapp.com',
  databaseURL: 'https://todo-list-a87c3.firebaseio.com',
  projectId: 'todo-list-a87c3',
  storageBucket: 'todo-list-a87c3.appspot.com',
  messagingSenderId: '122049355000',
  appId: '1:122049355000:web:729b49badfe0e8e009ef0d',
  measurementId: 'G-X93SXSKXCT',
})

const db = firebaseApp.firestore()
export default db
