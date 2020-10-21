import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import "firebase/analytics";
import App from "./App";

if (firebase.apps.length === 0) {
  const firebaseConfig = {
    apiKey: "AIzaSyDU1slL5h5Y8u1Eu5moBKr7WqD5JFq1G84",
    authDomain: "portfolio-292714.firebaseapp.com",
    databaseURL: "https://portfolio-292714.firebaseio.com",
    projectId: "portfolio-292714",
    storageBucket: "portfolio-292714.appspot.com",
    messagingSenderId: "760933184350",
    appId: "1:760933184350:web:b24037ced707b9cf4955cf",
    measurementId: "G-W4VT6PVSX8"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

ReactDOM.render(<App />, document.getElementById("root"));
