import React from 'react';
import { Link, useLocation } from "react-router-dom";

const Item = ({ page, path }) => {
  const location = useLocation();

  return(
    <li className="nav-item">
      <Link to={path} className={location.pathname === path ? "nav-link active" : "nav-link"}>
        {page}
      </Link>
    </li>
  );
};

export default Item;