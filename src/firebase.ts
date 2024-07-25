import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,  } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvghf4tMbzjr36gnlLod6BEoHw6WJuxCQ",
  authDomain: "resume-and-onboarding.firebaseapp.com",
  projectId: "resume-and-onboarding",
  storageBucket: "resume-and-onboarding.appspot.com",
  messagingSenderId: "205927221464",
  appId: "1:205927221464:web:a71bf01da38551e9f12fad",
  measurementId: "G-VJHDQJPF7K"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth }