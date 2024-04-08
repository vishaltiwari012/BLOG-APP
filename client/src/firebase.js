// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-c2323.firebaseapp.com",
  projectId: "mern-blog-c2323",
  storageBucket: "mern-blog-c2323.appspot.com",
  messagingSenderId: "956294454822",
  appId: "1:956294454822:web:568595a22521c3552d10e7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);