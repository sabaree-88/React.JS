// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpdXcd0x0Di3MYYs42gtg1_TU4nKsAe_g",
  authDomain: "contact-app-b8473.firebaseapp.com",
  projectId: "contact-app-b8473",
  storageBucket: "contact-app-b8473.appspot.com",
  messagingSenderId: "633271935144",
  appId: "1:633271935144:web:d2d2e6345fe01051aea29d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
