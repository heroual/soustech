import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKRyvLcHJJhSnMCKbuSfIcNDP18m5P7-M",
  authDomain: "sitesouss.firebaseapp.com",
  projectId: "sitesouss",
  storageBucket: "sitesouss.appspot.com",
  messagingSenderId: "153336074562",
  appId: "1:153336074562:web:65e44cd6118ce2d80178db",
  measurementId: "G-M25FRYFR6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
