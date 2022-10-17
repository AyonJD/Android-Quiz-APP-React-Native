// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBWjFb1d6KPof69DA5IpnYnyI2HWPj1cyo",
  authDomain: "quizze-3714e.firebaseapp.com",
  projectId: "quizze-3714e",
  storageBucket: "quizze-3714e.appspot.com",
  messagingSenderId: "161259613343",
  appId: "1:161259613343:web:2a032f7fa7c853ea5486aa"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;