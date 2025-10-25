// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATRan5C-vba1HDHDRtl58WNTLEPT37BD8",
  authDomain: "notes-manager-79322.firebaseapp.com",
  projectId: "notes-manager-79322",
  storageBucket: "notes-manager-79322.firebasestorage.app",
  messagingSenderId: "946314639727",
  appId: "1:946314639727:web:b8b0294e4b09ca1f70909a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth  = getAuth(app);