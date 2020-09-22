import React from 'react';
import "./App.css";
import { HashRouter, Route } from 'react-router-dom';
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>  
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );  
}

export default App;
