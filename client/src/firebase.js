// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "marn-auth.firebaseapp.com",
  projectId: "marn-auth",
  storageBucket: "marn-auth.appspot.com",
  messagingSenderId: "439259606417",
  appId: "1:439259606417:web:efac0a109aad224b1e3e30",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
