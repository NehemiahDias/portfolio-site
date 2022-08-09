import React from 'react';
import './HeaderComponent.css';

function HeaderComponent() {
  return (
    <header>
      <div id='header-nav'>
        <div className="nav-logo">
          <h1>ND</h1>
        </div>
        <nav id='navbar'>
          <ul className="sub-text">
              <li><span className='purple'>{">"} </span>Home</li>
              <li><span className='purple'>{">"} </span>Projects</li>
              <li><span className='purple'>{">"} </span>About</li>
              <li><span className='purple'>{">"} </span>Contact</li>
              <li><i className="fa-solid fa-sun"></i></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default HeaderComponent