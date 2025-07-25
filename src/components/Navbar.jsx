import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        className={`navbar ${isSticky ? "sticky-navbar" : ""}`}
        style={{
          padding: "15px 20px",
          background: "#fff",
          boxShadow: isSticky ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
          position: isSticky ? "fixed" : "relative",
          top: 0,
          width: "100%",
          zIndex: 999,
        }}
      >
        <diLv className="navbar-left">
          <Link
            to="/home"
            className="navbar-left nav-link  "
            onClick={scrollToTop}
          >
            Counselor
          </Link>
        </diLv>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
          <NavLink
            to="/home"
            className="nav-link1"
            onClick={() => {
              scrollToTop();
              setMenuOpen(false);
            }}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="nav-link1"
            onClick={() => {
              scrollToTop();
              setMenuOpen(false);
            }}
          >
            About
          </NavLink>

          <NavLink
            to="/counselor"
            className="nav-link1"
            onClick={() => {
              scrollToTop();
              setMenuOpen(false);
            }}
          >
            Counselor
          </NavLink>
          <NavLink
            to="/services"
            className="nav-link1"
            onClick={() => {
              scrollToTop();
              setMenuOpen(false);
            }}
          >
            Services
          </NavLink>

          <NavLink
            to="/pricing"
            className="nav-link1"
            onClick={() => {
              scrollToTop();
              setMenuOpen(false);
            }}
          >
            Pricing
          </NavLink>

          <NavLink
            to="/blog"
            className="nav-link1"
            onClick={() => {
              scrollToTop();
              setMenuOpen(false);
            }}
          >
            Blog
          </NavLink>

          <NavLink
            to="/contacts"
            className="nav-link1"
            onClick={() => {
              scrollToTop();
              setMenuOpen(false);
            }}
          >
            Contacts
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
