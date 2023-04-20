// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ8XMdUBckBDfbJW-TKHo5oCmFxGXNkF8",
  authDomain: "crypto-portfolio-cbee2.firebaseapp.com",
  projectId: "crypto-portfolio-cbee2",
  storageBucket: "crypto-portfolio-cbee2.appspot.com",
  messagingSenderId: "553205657971",
  appId: "1:553205657971:web:d4daae4e10d2dd6a655506"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;