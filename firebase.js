// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl2Ybf0XfPJCkNThYCMVdsN6NjICcQwYM",
  authDomain: "flashcardsaas-611fc.firebaseapp.com",
  projectId: "flashcardsaas-611fc",
  storageBucket: "flashcardsaas-611fc.appspot.com",
  messagingSenderId: "179346285042",
  appId: "1:179346285042:web:6adc919a169cc13dc8cb6b",
  measurementId: "G-JD7ZC78FTJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, analytics };