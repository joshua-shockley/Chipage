// this top section is for main library imports
import React from "react";
import { Route, Switch } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

// this is the fn-components import sect...
import Navlinks from "./components/Navlinks.js";
import Home from "./components/Home.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import NavbarContent from "./components/NavbarContent";
import Blog from './components/Blog.js';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="header-title">Amar Chiara V. L. Shockley</p>
      </header>
      <section className="main-content">
        <div className="container-left">
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/blog" component={Blog} />
        </div>
        <div className="container-right">
          <Navlinks />
          <NavbarContent />
        </div>
      </section>
      <footer className="bottom">
        <Footer />
        {/* //this is the footer.. needs to be setup cleaner */}
      </footer>
    </div>
  );
}

export default App;
