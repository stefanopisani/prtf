import { Switch, Route } from "react-router-dom";
import React, { useState } from "react";

import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Intro2 from "./components/intro2/Intro2.js";
import Contacts from "./components/contacts/Contacts";
import Card from "./components/Animations/Anim";

import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fade, setFade] = useState(false)

  return (
    <div className="App"  id="nav-start">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="App-body">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Intro2
                {...props}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                setFade={setFade}
              />
            )}
          />
        </Switch>
        {menuOpen && <About menuOpen={menuOpen} fade={fade}/> }
        {menuOpen && <Projects /> }
        {menuOpen &&  <Contacts/> }
        {/* {menuOpen &&  <Card/> } */}
       
          
      </div>
    </div>
  );
}

export default App;
