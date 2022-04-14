import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const storage = firebase.storage();
const db = firebase.firestore();

// Exportaciones
export { auth, storage, db };
