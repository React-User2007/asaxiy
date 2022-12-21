import * as firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAwmuZehHFGELFtUkzTW4J_vsbRJBDHW-Q",
    authDomain: "chat-cfa1b.firebaseapp.com",
    projectId: "chat-cfa1b",
    storageBucket: "chat-cfa1b.appspot.com",
    messagingSenderId: "607959732543",
    appId: "1:607959732543:web:0bff640c5c15095c53038a",
    measurementId: "G-3JWY08K8SW"
  };


const app = firebase.initializeApp(firebaseConfig)
const firestore = app.firestore()
const auth = app.auth()
export {firestore, auth}