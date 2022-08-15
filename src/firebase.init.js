// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArZrTUaQ5n3ztVs6MpvCANTV0_C2_D2nM",
    authDomain: "gyanangkur-wedding-photography.firebaseapp.com",
    projectId: "gyanangkur-wedding-photography",
    storageBucket: "gyanangkur-wedding-photography.appspot.com",
    messagingSenderId: "88552157569",
    appId: "1:88552157569:web:f4f842977e88fe41073880"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;