// this top section is for main library imports
import React from "react";
import logo from "./logo.svg";
import "./App.css";

// this is the fn-components import sect...
import Navlinks from "./components/Navlinks.js";
import Home from "./components/Home.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>this is in the header</p>
      </header>
      <section className="main-content">
        <div className="container-left">
          <p>
            this should be on the left with majority of the content. ipsum Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Ducimus, vel
            pariatur perferendis quas quos repudiandae ullam sint neque
            reiciendis. Exercitationem sed quia laudantium doloribus dolorem
            dolor nulla neque illo mollitia.
          </p>
          {/* <Home/>
          <Contact/> */}
        </div>
        <div className="container-right">
          <Navlinks />
          <div>
            <p>here is more shit below the navlinks</p>
          </div>
          <div>
            <p>
              more shit like links to favorite articles or blogs or local events
              or blah...blah...blah...
            </p>
          </div>
        </div>
      </section>
      <footer>this is the foooter of the page</footer>
    </div>
  );
}

export default App;
