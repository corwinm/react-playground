import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from "./components/Home";
import About from './components/About';

export default function Router() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}
