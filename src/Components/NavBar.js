import React from "react";
import { Link } from "react-router-dom";
import TMDB from "../Images/tmdbLogo.png";
import Search from "./Search";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="#">
          <img src={TMDB} className="img-thumbnail" alt="T M D B" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home <i className="fas fa-home"></i>
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <Search />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
