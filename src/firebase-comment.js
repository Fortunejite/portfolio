import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { collection, addDoc } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAizArBwgsgaDZR-0h6fmxriEjp8dH32n4',
  authDomain: 'talking-34f62.firebaseapp.com',
  projectId: 'talking-34f62',
  storageBucket: 'talking-34f62.appspot.com',
  messagingSenderId: '24426648864',
  appId: '1:24426648864:web:9b85eb96c9e788e0d87345',
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };
