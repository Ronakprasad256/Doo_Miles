// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTiX7TZprwQ90WwttsRgF1xsB4yyPgVpQ",
    authDomain: "doomiles.firebaseapp.com",
    projectId: "doomiles",
    storageBucket: "doomiles.firebasestorage.app",
    messagingSenderId: "662298611707",
    appId: "1:662298611707:web:19a8eedd2190dc1f80055e",
    measurementId: "G-0M23ENTWL6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };