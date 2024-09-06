// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvVhuUTXAqMSzWQY3FAwvPr6wOEqAT1ZE",
  authDomain: "trendsage-43f41.firebaseapp.com",
  projectId: "trendsage-43f41",
  storageBucket: "trendsage-43f41.appspot.com",
  messagingSenderId: "106795158960",
  appId: "1:106795158960:web:afe12f8a613f7c7b3ada75",
  measurementId: "G-PWHSJK6CL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };