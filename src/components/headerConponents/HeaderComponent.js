import React, {useContext, useRef} from 'react';
import Switch from 'react-switch';
import { ThemeContext } from '../MainComponent';
import './HeaderComponent.css';

function HeaderComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  var navRef = useRef();
  const headerStyle = {
    common: {
      transition: 'all 1s ease'
    }
  }

  const themeStyle = {
    ...headerStyle.common,
  }

  const toggleNav = () => {
    navRef.current.classList.toggle('nav-active');
  }

  return (
    <header className={theme ==='dark' ? 'dark' : 'light'}>
      <div style={themeStyle} id='header-nav'>
        <div className="nav-logo">
          <h1>ND</h1>
        </div>
        <nav id='navbar' style={themeStyle} ref={navRef}>
          <ul className="sub-text">
              <li><a href='/#'><span className='purple'>{">"} </span>Home</a></li>
              <li><a href='#projects-section'><span className='purple'>{">"} </span>Projects</a></li>
              <li><a href='#about-me'><span className='purple'>{">"} </span>About</a></li>
              <li><a href='#contact-section'><span className='purple'>{">"} </span>Contact</a></li>
              <li><div className='switch-button'> {theme === 'dark' ? <i class="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
              <Switch
              onChange={toggleTheme} 
              checked={theme === 'dark'}
              onColor={'#ACA7CB'}
              offColor={'#3C3C3C'}
              checkedIcon={false}
              uncheckedIcon={false}
              /></div></li>
          </ul>
        </nav>
         <div className='burger' onClick={toggleNav}>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
          </div>
      </div>
    </header>
  )
  
}

export default HeaderComponent