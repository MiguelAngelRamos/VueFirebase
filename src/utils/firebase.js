import { createUserWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDFBgVV2wtYD_8ToTTIzXqSDFfmYqVQPVI",
  authDomain: "vuefirebase-79843.firebaseapp.com",
  projectId: "vuefirebase-79843",
  storageBucket: "vuefirebase-79843.appspot.com",
  messagingSenderId: "211552696013",
  appId: "1:211552696013:web:c87ebc53e8659369f01b84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// Exportaciones
export {
  auth
};


// Funciones

// VAMOS A CREAR EL USUARIO EN FIREBASE
export const userCreated = ( email, password ) => {
  createUserWithEmailAndPassword(auth, email, password);
}

// PARA CERRAR LA SESIÓN
export const userSignOut = () => {
  signOut(auth);
}