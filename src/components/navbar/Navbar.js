import React from "react";
import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import "./style.css";

const Navbar = () => {
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLInk = "nav-list__link";

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Freelancer</strong> portfolio
          </NavLink>

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLInk
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLInk
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLInk
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
          <BtnDarkMode />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
