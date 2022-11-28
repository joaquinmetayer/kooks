import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvejg0CAvR43mvxraSTAntOKAMqAbRQOk",
  authDomain: "kooks-metayer.firebaseapp.com",
  projectId: "kooks-metayer",
  storageBucket: "kooks-metayer.appspot.com",
  messagingSenderId: "611366075529",
  appId: "1:611366075529:web:46a265407c10fc89925a58",
  measurementId: "G-1YDYVHSTV0",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
