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
              <li><a href='#projects'><span className='purple'>{">"} </span>Home</a></li>
              <li><a href='#projects-section'><span className='purple'>{">"} </span>Projects</a></li>
              <li><a href='#projects'><span className='purple'>{">"} </span>About</a></li>
              <li><a href='#projects'><span className='purple'>{">"} </span>Contact</a></li>
              <li><i className="fa-solid fa-sun"></i></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default HeaderComponent