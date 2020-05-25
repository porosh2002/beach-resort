import React, { Component } from "react";
import logo from "../Image/logo.png";
import { Link } from "react-router-dom";
import "./Navigation.css";
export default class Navigation extends Component {
  LinksClick = () => {
    const NavigationLinks = document.querySelector(".Nav_Links");
    NavigationLinks.classList.remove("NavLinks");
  };
  Toggle_FUNCTION = () => {
    const NavigationLinks = document.querySelector(".Nav_Links");
    NavigationLinks.classList.toggle("NavLinks");
  };

  render() {
    return (
      <nav className="Navigation">
        <div className="Logo_Bars">
          <Link to="/">
            <img className="logo" src={logo} alt="Logo" />
          </Link>
          <div className="bars" onClick={this.Toggle_FUNCTION}>
            <div className="bar bar_1"></div>
            <div className="bar bar_2"></div>
            <div className="bar"></div>
          </div>
        </div>
        <div className="Nav_Links">
          <li>
            <Link
              onClick={this.LinksClick}
              className="links_txt Home_Links"
              to="/"
            >
              {"Home"}
            </Link>
          </li>
          <li>
            <Link
              onClick={this.LinksClick}
              className="links_txt Rooms_Links"
              to="/Rooms"
            >
              {"Rooms"}
            </Link>
          </li>
          <li>
            <Link
              onClick={this.LinksClick}
              className="links_txt Client_links"
              to="/Login"
            >
              {"Client Area"}
            </Link>
          </li>
        </div>
      </nav>
    );
  }
}
