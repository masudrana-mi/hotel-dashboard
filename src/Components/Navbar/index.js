import React, { Component } from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar navbar-dark navbar-expand-md bg-dark">
      {/* mobile togger */}
      <div className="d-md-none">
        {/* //mobile toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-mobile"
        >
          <i className="icon-tree5" />
        </button>
        <button
          className="navbar-toggler sidebar-mobile-main-toggle"
          type="button"
        >
          <i className="icon-paragraph-justify3" />
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbar-mobile">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              href="#"
              className="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block"
            >
              <i className="icon-paragraph-justify3" />
            </a>
          </li>
        </ul>

        <span className="navbar-text ml-md-3">
          <span className="badge badge-mark border-orange-300 mr-2" />
          Morning, Victoria!
        </span>
      </div>
      {/* navbar content */}
      <div className="collapse navbar-collapse" id="navbar-component">
        {/* left contect */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="navbar-nav-link">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="navbar-nav-link">
              Branches
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="navbar-nav-link">
              Request
            </a>
          </li>
        </ul>
        {/* right content */}
        <ul className="navbar-nav ml-md-auto">
          <li className="nav-item">
            <a href="#" className="navbar-nav-link">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="navbar-nav-link">
              Branches
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="navbar-nav-link">
              Request
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
