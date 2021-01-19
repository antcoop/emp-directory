import React from "react";
import Item from './Item';
function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.

  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        <Item page="Home" path="/" />
        <Item page="About" path="/about" />
        <Item page="Projects" path="/projects" />
        <Item page="Contact" path="/contact" />
      </ul>
    </div>
  );
}

export default NavTabs;
