// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuq4m8TVqS7N8J3J8ee6vvunpc9I0UoLY",
  authDomain: "ecommerce-engenium.firebaseapp.com",
  projectId: "ecommerce-engenium",
  storageBucket: "ecommerce-engenium.appspot.com",
  messagingSenderId: "1034190055019",
  appId: "1:1034190055019:web:c479f3172eaeebb23c732e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);

export default db