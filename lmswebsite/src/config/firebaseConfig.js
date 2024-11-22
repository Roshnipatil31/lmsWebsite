import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Firebase authentication
import { getStorage } from "firebase/storage"; // Firebase storage

const firebaseConfig = {
  apiKey: "AIzaSyDZF4e9nAL17nGTaTT9Tehmht9M73HsaR4",
  authDomain: "lmseducationplaform.firebaseapp.com",
  projectId: "lmseducationplaform",
  storageBucket: "lmseducationplaform.appspot.com",
  messagingSenderId: "791494608780",
  appId: "1:791494608780:web:19537fa099d9bf6f8238a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Export Firebase Auth instance
export const storage = getStorage(app); // Export Firebase Storage instance

export default app;