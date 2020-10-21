import React from "react";
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Nav from "./components/Nav";
function App() {
  return (
    <BrowserRouter>
      <div className="card">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
