import React, {useContext} from 'react';
import Switch from 'react-switch';
import { ThemeContext } from '../MainComponent';
import './HeaderComponent.css';

function HeaderComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={theme ==='light' ? 'dark' : 'light'}>
      <div id='header-nav'>
        <div className="nav-logo">
          <h1>ND</h1>
        </div>
        <nav id='navbar'>
          <ul className="sub-text">
              <li><a href='/#'><span className='purple'>{">"} </span>Home</a></li>
              <li><a href='#projects-section'><span className='purple'>{">"} </span>Projects</a></li>
              <li><a href='#about-me'><span className='purple'>{">"} </span>About</a></li>
              <li><a href='#contact-section'><span className='purple'>{">"} </span>Contact</a></li>
              <li>{theme}<i className="fa-solid fa-sun"></i><Switch 
              onChange={toggleTheme} 
              checked={theme === 'dark'}
              uncheckedIcon={false}
              checkedIcon={false}
              onColor={'eee'}
              /></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default HeaderComponent