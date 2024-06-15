import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrJJPs0WasAm4HCowkSFB6NPBcgnl-oc4",
  authDomain: "ecommerce-5330c.firebaseapp.com",
  projectId: "ecommerce-5330c",
  storageBucket: "ecommerce-5330c.appspot.com",
  messagingSenderId: "201623943374",
  appId: "1:201623943374:web:14b2e59caf5bfe58c2b89f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
