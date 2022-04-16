// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4jMJTuiqjmEV582INz_IbekLmsp-pBL8",
    authDomain: "dental-care-5139c.firebaseapp.com",
    projectId: "dental-care-5139c",
    storageBucket: "dental-care-5139c.appspot.com",
    messagingSenderId: "505300270968",
    appId: "1:505300270968:web:4e5f403f9e08a55fbb528d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;