// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCK2tUJNI9rWwA6q788tYiwlbXNJvxg50",
  authDomain: "nagib-blog.firebaseapp.com",
  projectId: "nagib-blog",
  storageBucket: "nagib-blog.appspot.com",
  messagingSenderId: "570255126585",
  appId: "1:570255126585:web:42673c0729351957a51de8",
  measurementId: "G-XRKTHJDJ6K"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Authentication object
const auth = getAuth(app);

export { auth }

export const db = getFirestore(app)