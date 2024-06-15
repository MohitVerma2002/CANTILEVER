import { initializeApp } from "firebase/app";
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC_y2quOODZKixBEyxCh-qhkKA9pxCrKL0",
    authDomain: "news-app-f096e.firebaseapp.com",
    projectId: "news-app-f096e",
    storageBucket: "news-app-f096e.appspot.com",
    messagingSenderId: "277331393172",
    appId: "1:277331393172:web:e4ae6abf4bb7774b7f1281"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signUpWithEmail = (email, password) => createUserWithEmailAndPassword(auth, email, password);
const signInWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);
const logOut = () => signOut(auth);
const onAuthStateChange = (callback) => onAuthStateChanged(auth, callback);

export { auth, signUpWithEmail, signInWithEmail, logOut, onAuthStateChange };
