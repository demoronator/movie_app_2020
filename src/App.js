import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/performance";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

const App = () => {
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

  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
};

export default App;
