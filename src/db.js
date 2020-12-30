import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBdBwV16nM-5sxqgYRdUfBalj5INshs-Q4",
    authDomain: "birthday-reminder-99b83.firebaseapp.com",
    projectId: "birthday-reminder-99b83",
    storageBucket: "birthday-reminder-99b83.appspot.com",
    messagingSenderId: "304573848380",
    appId: "1:304573848380:web:592c0daedb9f168b665c39"
  };

firebase.initializeApp(firebaseConfig);

export default firebase