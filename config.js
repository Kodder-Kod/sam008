import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD9NPt5cIZhCKdyurfmsc-ptPtOMO_hqRE",
  authDomain: "sehwebsite002.firebaseapp.com",
  databaseURL: "https://sehwebsite002-default-rtdb.firebaseio.com",
  projectId: "sehwebsite002",
  storageBucket: "sehwebsite002.firebasestorage.app",
  messagingSenderId: "124227200969",
  appId: "1:124227200969:web:dba49ac7e75772e2d12a18",
  measurementId: "G-7CDVVQCCX5"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase services using the modular SDK
const db = getDatabase(app);

// Initialize Firebase Auth with React Native persistence
const auth = getAuth(app);

export { db, auth };


