import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/mainPage">Pagrindinis puslapis</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/predictionTable">Turnirinė lentelė</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/predictionPage">Dalyviu spejimai</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
