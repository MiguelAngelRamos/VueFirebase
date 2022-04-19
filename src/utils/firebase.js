import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClHJHSOG6TdmnPag1-XcB3SMcDIZaJRus",
  authDomain: "vuefirestore-683a2.firebaseapp.com",
  projectId: "vuefirestore-683a2",
  storageBucket: "vuefirestore-683a2.appspot.com",
  messagingSenderId: "489597646336",
  appId: "1:489597646336:web:5364bb1d67d54c44cc0ae5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const storage = firebase.storage();
const db = firebase.firestore();

// Exportaciones
export { auth, storage, db };
