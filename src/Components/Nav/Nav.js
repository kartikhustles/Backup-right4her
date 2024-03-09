import { Link } from "react-router-dom";
import React from "react";
import Logo from "../../Assets/Logo.png";

function Nav() {
  return (
    <div className="navbar bg-info px-20">
      <Link to="/" class="navbar-brand mx-3">
        <img src={Logo} className="h-36" />
      </Link>
      <div className="Nav">
        <Link
          to="/Resources"
          className="nav-link text-light font-weight-bold fs-6"
        >
          Legal Resources
        </Link>
        <Link to="/Case" className="nav-link text-light font-weight-bold fs-6">
          Case Studies
        </Link>
        <Link
          to="/Workshop"
          className="nav-link text-light font-weight-bold fs-6"
        >
          Empowerment workshop
        </Link>
        <Link
          to="/Actions"
          className="nav-link text-light font-weight-bold fs-6"
        >
          Legal Actons
        </Link>
        <Link to="/About" className="nav-link text-light font-weight-bold fs-6">
          About us
        </Link>
      </div>
    </div>
  );
}

export default Nav;
