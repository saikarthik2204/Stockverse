import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#000000", borderBottom: "2px solid #333" }}>
      <div className="container p-2">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src="media/logo1.png" style={{ width: "120px", height:"60px" }} alt="logo" />
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ backgroundColor: "#fff", borderRadius: "5px" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/signup">Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/product">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/support">Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
