import "./CSS_Files/Navbar.css";
import Button from "./Button";
import AboutMe from "./AboutMe";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import ProjectCardComponent from "./ProjectCardPage";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="navbar">
      <div className="nav-heading">
        <Link to="/">
          <h2
            style={{
              fontWeight: "600",
              fontFamily: "cursive",
              color: "white",
            }}
          >
            SB
          </h2>
        </Link>
      </div>

      <ul className={clicked ? "nav-menu-active" : "nav-menu-mobile"}>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">
            <a href={<AboutMe />}>ABOUT ME</a>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <a href={<ProjectCardComponent />}>PROJECTS</a>
          </Link>
        </li>

        <Link to="contactMe">
          <div className="menu-button">
            <Button
              text="Contact Me"
              padding="8px 20px"
              borderRadius="25px"
              fontSize="12px"
              backgroundColor="#e4b5cb"
              backgroundImage="linear-gradient(315deg, #e4b5cb 0%, #722ae6 74%)"
              border="none"
            />
          </div>
        </Link>
      </ul>
      <div
        className="Dropdown"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        {clicked ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
    </nav>
  );
};

export default Navbar;
