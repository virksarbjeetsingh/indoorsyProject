import React from 'react'
import logo from  "../assets/image1.png";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='logo'>
        <img src={logo} />
        </div>
        <div className='icons'>       
        <span><i class="bi bi-facebook"></i></span>
        <span><i class="bi bi-instagram"></i></span>
        <span><i class="bi bi-twitter-x"></i></span>
        
        </div>
    </div>
  )
}
