import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const handleIsActive = ({ isActive }) => {
  return {
    fontWeight: isActive ? "600" : "100",
    // fontSize: isActive ? "20px" : "16px",
  };
};
function Header() {
  return (
    <div>
      <nav>
        <NavLink className="navlink" to="/" style={handleIsActive}>
          <i className="fa fa-home" title="home"></i> Home
        </NavLink>
        <NavLink className="navlink">Explore</NavLink>
        <NavLink className="navlink">
          <i class="fa fa-bookmark"></i>
          BookMarks
        </NavLink>
        <NavLink className="navlink">
          {" "}
          <i class="fa fa-solid fa-user"></i>Profile
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
