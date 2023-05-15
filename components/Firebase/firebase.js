import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { getMessaging, isSupported } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTb6bljxqkQwwcKhmFfWkUSlysE_DbwR4",
  authDomain: "saudeapp-93c9f.firebaseapp.com",
  projectId: "saudeapp-93c9f",
  storageBucket: "saudeapp-93c9f.appspot.com",
  messagingSenderId: "377047844114",
  appId: "1:377047844114:web:c3298ed7c79c36ff171fcb"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
// Initialize Firebase Cloud Messaging and get a reference to the service
//Call bt await messaging () everytime a msg is needed!
const messaging = async () => await isSupported() && getMessaging(app);

export { app, db, auth, messaging }