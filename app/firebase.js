// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4Krz7pmUHXvc3pGGNKM3bCnGSQUDRuXU",
  authDomain: "fir-app-59269.firebaseapp.com",
  projectId: "fir-app-59269",
  storageBucket: "fir-app-59269.appspot.com",
  messagingSenderId: "477232365642",
  appId: "1:477232365642:web:7ab5fb180bbb926a97a6b3",
  measurementId: "G-M1LVFM2YB5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
