import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <nav className="header">
      <div className="left-h">
        <h2>Account App</h2>
      </div>
      <div className="right-h">
        <ul>
          <li>
            <NavLink to="/">Accounts</NavLink>
          </li>
          <li>
            <NavLink to="/addaccount">Add Account</NavLink>
          </li>
          <li>
            <NavLink to="/edit-delete">Edit/Delete</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
