// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiDYbz3y3X6jrssjiWv0y9WALXYNdD2co",
  authDomain: "linkedin-4a87a.firebaseapp.com",
  projectId: "linkedin-4a87a",
  storageBucket: "linkedin-4a87a.appspot.com",
  messagingSenderId: "27848508441",
  appId: "1:27848508441:web:3c48ba5a3e86cb6e9b9688",
  measurementId: "G-88KP3SNWH9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
