import React from "react";
import { useNavigate } from "react-router-dom";
import { NavbarStyles } from "./styled.navbar";

import logo from "../../assets/images/logo.svg";
import Button from "../Button/Button";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <NavbarStyles>
      <img src={logo} alt="" onClick={() => navigate("/")} />

      <ul className="links">
        <li>Events</li>
        <li>Museum</li>
        <li>Arts</li>
        <li>Gallaries</li>
        <Button>Login</Button>
        <Button inverted>Explore arts</Button>
      </ul>
    </NavbarStyles>
  );
};

export default Navbar;
