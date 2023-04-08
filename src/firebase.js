import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDejmR58SSFIQSFkn1C4gaTNn7o22kisHM",
    authDomain: "react-blog-33554.firebaseapp.com",
    projectId: "react-blog-33554",
    storageBucket: "react-blog-33554.appspot.com",
    messagingSenderId: "772500337518",
    appId: "1:772500337518:web:29df99cca0ef0a2824077f"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };