// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAemIxgdwAlmnTj9PjIV7uHFTIxoZjYsmY",
  authDomain: "signup-login-7c776.firebaseapp.com",
  projectId: "signup-login-7c776",
  storageBucket: "signup-login-7c776.appspot.com",
  messagingSenderId: "119117517650",
  appId: "1:119117517650:web:03acd501d728bcb30ee08b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Ensure you're passing the app instance here
export const db = getFirestore(app);

export default app;
