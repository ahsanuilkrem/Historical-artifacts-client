// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkumGiJ7r9Y9wtwVEJGEM3UQifj9KSm2g",
  authDomain: "historical-artifacts-67135.firebaseapp.com",
  projectId: "historical-artifacts-67135",
  storageBucket: "historical-artifacts-67135.firebasestorage.app",
  messagingSenderId: "127706674314",
  appId: "1:127706674314:web:eefb51b33f8a2e1b99e973"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth