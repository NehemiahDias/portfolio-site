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
              <li><span className='purple'>{">"} </span><a href='#projects'>Home</a></li>
              <li><span className='purple'>{">"} </span><a href='#projects-section'>Projects</a></li>
              <li><span className='purple'>{">"} </span><a href='#projects'>About</a></li>
              <li><span className='purple'>{">"} </span><a href='#projects'>Contact</a></li>
              <li><i className="fa-solid fa-sun"></i></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default HeaderComponent