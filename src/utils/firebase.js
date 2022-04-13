import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYWHxpL62oxSCnURZz59BQvy9ccYktWC0",
  authDomain: "vue892.firebaseapp.com",
  projectId: "vue892",
  storageBucket: "vue892.appspot.com",
  messagingSenderId: "496566478287",
  appId: "1:496566478287:web:76247af13a1ec56f3e5eba"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const storage = firebase.storage();
const db = firebase.firestore();

// Exportaciones
export { auth, storage, db };
