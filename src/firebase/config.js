import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
  apiKey: "AIzaSyD9OWClcxkkbW0u0vnOZhuK4jy9V3A4CGg",
  authDomain: "olx-clone2024.firebaseapp.com",
  projectId: "olx-clone2024",
  storageBucket: "olx-clone2024.appspot.com",
  messagingSenderId: "889508447452",
  appId: "1:889508447452:web:ae1898358f967f542aa019",
  measurementId: "G-2KLSTZ5Q7F"
};

export const Firebase = firebase.initializeApp(firebaseConfig)

