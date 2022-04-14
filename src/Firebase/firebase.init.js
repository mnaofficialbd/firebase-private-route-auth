// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbBvmSeD4F3wdXCWcQrAnl8yYS2s4v75E",
  authDomain: "fir-private-route-4d4b2.firebaseapp.com",
  projectId: "fir-private-route-4d4b2",
  storageBucket: "fir-private-route-4d4b2.appspot.com",
  messagingSenderId: "1061225377227",
  appId: "1:1061225377227:web:0f22f864865bbf33ed9a4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;