import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to={process.env.PUBLIC_URL + "/"}>Home</Link> |{" "}
      <Link to={process.env.PUBLIC_URL + "/about"}>About</Link> |{" "}
      <Link to={process.env.PUBLIC_URL + "/portfolio"}>Portfolio</Link>
    </nav>
  )
}

export default Nav;