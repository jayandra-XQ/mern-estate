// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ee959.firebaseapp.com",
  projectId: "mern-estate-ee959",
  storageBucket: "mern-estate-ee959.appspot.com",
  messagingSenderId: "898009455178",
  appId: "1:898009455178:web:3757ef5efb0a732490a4b3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);