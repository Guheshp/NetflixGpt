// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC1cjccaNBtFXlEheXpgrbcDC3VyQiXOo8",
    authDomain: "netflixgpt-e7316.firebaseapp.com",
    projectId: "netflixgpt-e7316",
    storageBucket: "netflixgpt-e7316.appspot.com",
    messagingSenderId: "933145402568",
    appId: "1:933145402568:web:1bb2448231fa52b5a519fd",
    measurementId: "G-XGTK6S5FW7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();