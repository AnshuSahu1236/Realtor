// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJD6zOxv2eWYd5XN75yKLekFdOfM6tq14",
  authDomain: "realtor-2375d.firebaseapp.com",
  projectId: "realtor-2375d",
  storageBucket: "realtor-2375d.appspot.com",
  messagingSenderId: "744884876637",
  appId: "1:744884876637:web:714ece587de734b287a4b4"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db= getFirestore()