import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import DropdownMenu from "../Dropdown/Dropdown.jsx";
import backgroundImage from "../assets/image.png"
import "./Webpage.css"

export default function 
() {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
      <DropdownMenu /> {/* Add DropdownMenu component */}
        <div
          className="background-image"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <div className="welcome-text">Welcome to Indoorsy</div>
      </div>
    </div>
  )
}
