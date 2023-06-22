## Configure

Add a file `firebase-config.js` in `src` with following code:

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";


const firebaseConfig = {

  apiKey: "__API_KEY__",
  
  authDomain: "__AUTH_DOMAIN__",
  
  projectId: "__PROJECT_ID__",
  
  storageBucket: "__STORAGE_BUCKET__",
  
  messagingSenderId: "__SENDER_ID__",
  
  appId: "__APP_ID__",
  
  measurementId: "__MEASUREMENT_ID__",
  
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

