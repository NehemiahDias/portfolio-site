import React from 'react';
import './HeaderComponent.css';

function HeaderComponent() {
  return (
    <header>
        <nav id='navbar'>
            <h1>Nehemiah Dias</h1>
            <ul>
                <li>Home</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
                <li><i className="fa-solid fa-sun"></i></li>
            </ul>
        </nav>
    </header>
  )
}

export default HeaderComponent