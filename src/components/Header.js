import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";
import user from "../assets/user.svg";
import userList from "../assets/checklist.svg";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} className="logo" alt="logo" />
        <p>HRnet</p>
      </div>
      <div className="header__menu">
        <div className={`header__menu__create ${location.pathname === "/" ? "active" : ""}`}>
          <img src={user} alt="User icon" />
          <Link to="/" className="header__menu__item">Create Employee</Link>
        </div>
        <div className={`header__menu__list ${location.pathname === "/listEmployee" ? "active" : ""}`}>
          <img src={userList} alt="List icon" />
          <Link to="/listEmployee" className="header__menu__item">Employees List</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;