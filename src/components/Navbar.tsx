import Logo from "../assets/logo.svg";

import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../styles/Navbar.css";
import { useState } from "react";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav>
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
        <div>
          <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
            <CustomeLink to="/">Home</CustomeLink>
            <CustomeLink to="/menu">Menu</CustomeLink>
            <CustomeLink to="/about">About</CustomeLink>
            <CustomeLink to="/contact">Contact</CustomeLink>
          </ul>
        </div>
        <div id="mobile" onClick={handleClick}>
          <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

function CustomeLink({ to, children}: any) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path : resolvedPath.pathname, end: true})
  return (
    <li>
      <Link to={to} className={isActive ? "active" : ""}>
        {children}
      </Link>
    </li>
  );
}
