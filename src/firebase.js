// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLYgSEMGCl4l5EhlDZIdaQXJOl39nrnFM",
  authDomain: "react-try-a6de7.firebaseapp.com",
  projectId: "react-try-a6de7",
  storageBucket: "react-try-a6de7.appspot.com",
  messagingSenderId: "107723012131",
  appId: "1:107723012131:web:9d52d0834687b282379996",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
