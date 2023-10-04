// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVhdzHPJ7GdF6DTywh6-rZdjKEI0xYMU8",
    authDomain: "react-dragon-news-auth-aditya.firebaseapp.com",
    projectId: "react-dragon-news-auth-aditya",
    storageBucket: "react-dragon-news-auth-aditya.appspot.com",
    messagingSenderId: "1061141916524",
    appId: "1:1061141916524:web:894d5fe2684f7bfa6ce149"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);