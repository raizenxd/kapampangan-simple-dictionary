// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7mw53ZpICjLQQVHFEb8wyOiBEZzhmFWQ",
  authDomain: "kapampangan-dictionary.firebaseapp.com",
  projectId: "kapampangan-dictionary",
  storageBucket: "kapampangan-dictionary.appspot.com",
  messagingSenderId: "269823102248",
  appId: "1:269823102248:web:e8d38c6721437ef085141d",
  measurementId: "G-NJXE8VWY5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);