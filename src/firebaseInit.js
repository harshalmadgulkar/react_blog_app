// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH8nCLd_4PUsF2E2pqiAf2dJ7jdwvqCnw",
  authDomain: "blogging-app-7daf8.firebaseapp.com",
  projectId: "blogging-app-7daf8",
  storageBucket: "blogging-app-7daf8.appspot.com",
  messagingSenderId: "397814525383",
  appId: "1:397814525383:web:c4d33629dc0d8ddcca3de2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
