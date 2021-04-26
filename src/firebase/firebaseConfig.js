import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAYrc9ZviwaIgFUdofSTZeRO0TClvSNoFk",
    authDomain: "doc-review-green.firebaseapp.com",
    databaseURL: "https://doc-review-green-default-rtdb.firebaseio.com",
    projectId: "doc-review-green",
    storageBucket: "doc-review-green.appspot.com",
    messagingSenderId: "547793059896",
    appId: "1:547793059896:web:30ef8a63eb67adef7226cd",
    measurementId: "G-16F7TEY25H"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  export default firebaseApp