// Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./css/header.css";

const Header = () => {
  return (
    <header className="heading">
      <div className="container mx-auto">
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/certificates">Certificates</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/more">More</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
