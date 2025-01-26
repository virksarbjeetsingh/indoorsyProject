import React, { useState } from "react";
import "./Dropdown.css";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown-container">
      {/* Hamburger Icon */}
      <div className="hamburger-icon" onClick={() => setIsOpen(!isOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="dropdown-menu">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#projects">Projects</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact Us</a>
        </div>
      )}
    </div>
  );
}
