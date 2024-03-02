import Logo from "../assets/logo.svg";

import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../styles/Navbar.css";
import { useState } from "react";

function Navbar({handleTheme}: any) {
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
            <div>
              <input type="checkbox" className="checkbox" id="checkbox" onClick={handleTheme}/>
              <label htmlFor="checkbox" className="checkbox-label">
                <i className="fas fa-moon"></i>
                <i className="fas fa-sun"></i>
                <span className="ball"></span>
              </label>
            </div>
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

function CustomeLink({ to, children }: any) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li>
      <Link to={to} className={isActive ? "active" : ""}>
        {children}
      </Link>
    </li>
  );
}
