import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="navabar-ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/catfacts">CatFacts</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
