// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8G8RYciBSf4s58Cd6S2fMODIUWC_GeyE",
  authDomain: "photoappotp.firebaseapp.com",
  projectId: "photoappotp",
  storageBucket: "photoappotp.appspot.com",
  messagingSenderId: "1044003362441",
  appId: "1:1044003362441:web:21e5c9592f95901fb61858",
  measurementId: "G-7XJD31B1Y0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;