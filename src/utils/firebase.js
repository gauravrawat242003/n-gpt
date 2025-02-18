// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBlJJC7Q3bWpB5hcsTFXpotkhAEkUiJ5E",
  authDomain: "n-gpt-91d3f.firebaseapp.com",
  projectId: "n-gpt-91d3f",
  storageBucket: "n-gpt-91d3f.firebasestorage.app",
  messagingSenderId: "539455287621",
  appId: "1:539455287621:web:a7586f2aad599bde6d4e2c",
  measurementId: "G-F9BM1KR0CV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export default auth;