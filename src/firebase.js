import { initializeApp } from "firebase/app";
import { collection, addDoc, getDocs, getFirestore } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAizArBwgsgaDZR-0h6fmxriEjp8dH32n4",
    authDomain: "portfolio-site-8f088.firebaseapp.com",
    projectId: "portfolio-site-8f088",
    storageBucket: "portfolio-site-8f088.firebasestorage.app",
    messagingSenderId: "265606951624",
    appId: "1:265606951624:web:84d09f5a0392ee5767ebfd",
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };