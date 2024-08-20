// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxmWPfVuou5aidnvLJ-T-OCgTOS9zapw0",
  authDomain: "danny-s-portfolio-412.firebaseapp.com",
  projectId: "danny-s-portfolio-412",
  storageBucket: "danny-s-portfolio-412.appspot.com",
  messagingSenderId: "884085720554",
  appId: "1:884085720554:web:3deec8054bbe916d341e93",
  measurementId: "G-TDWCJL19SQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);