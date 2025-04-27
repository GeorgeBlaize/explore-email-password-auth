// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA90yjnKaRN8zeF5DphjqCeX3ELLyVE5rU",
  authDomain: "explore-email-password-a-64749.firebaseapp.com",
  projectId: "explore-email-password-a-64749",
  storageBucket: "explore-email-password-a-64749.firebasestorage.app",
  messagingSenderId: "552737571828",
  appId: "1:552737571828:web:2530b39e0a1f5fab05efa1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);