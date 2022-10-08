import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import hamburger from "../../assets/images/hamburgerr.svg";
import close from "../../assets/images/close.png";
import { NavbarStyles } from "./styled.navbar";

import logo from "../../assets/images/logo.svg";
import Button from "../Button/Button";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);
  return (
    <NavbarStyles>
      <img src={logo} alt="" onClick={() => navigate("/")} className="logo" />

      <ul className="links">
        <li>Events</li>
        <li>Museum</li>
        <li>Arts</li>
        <li>Gallaries</li>
        <Button>Login</Button>
        <Button inverted>Explore arts</Button>
      </ul>

      <div className="logo-heading-mobile">
        <img src={logo} alt="" onClick={() => navigate("/")} />
        <img src={hamburger} alt="" onClick={toggleOpen} className="ham" />
      </div>
      {open && (
        <ul className="links-mobile" onClick={toggleOpen}>
          <img src={close} alt="" className="close" />
          <li>Events</li>
          <li>Museum</li>
          <li>Arts</li>
          <li>Gallaries</li>
          <Button>Login</Button>
          <Button inverted>Explore arts</Button>
        </ul>
      )}
    </NavbarStyles>
  );
};

export default Navbar;
