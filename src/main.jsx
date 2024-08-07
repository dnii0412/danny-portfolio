import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Hero from '../src/assets/Hero'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA-iiDQ2VHeHdAesR_nXApNIi6AtK05tj4",
//   authDomain: "danny-0412.firebaseapp.com",
//   projectId: "danny-0412",
//   storageBucket: "danny-0412.appspot.com",
//   messagingSenderId: "215294704854",
//   appId: "1:215294704854:web:ffde2e4f4d5f2b5bb81d77",
//   measurementId: "G-80STT49NWJ"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// react router DOM below 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
