import React from 'react';
import { useState } from 'react';
import './MainComponent.css';

import HeaderComponent from './headerConponents/HeaderComponent';
import HomeComonent from './homeComponents/HomeComponent';
import ProjectComponent from './projectsComponents/ProjectComponent';
import AboutComponent from './aboutMeComponents/AboutComponent';
import ContactComponent from './contactComponents/ContactComponent';
import FooterComponent from './footerComponents/FooterComponent';

export const ThemeContext = React.createContext();

function MainComponent() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  const mainStyle = {
    common: {
      transition: 'all 1s ease'
    }
  }

  const themeStyle = {
    ...mainStyle.common,
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <main className={theme === 'light' ? 'dark' : 'light'} style={themeStyle}>
        <HeaderComponent />
        <HomeComonent />
        <ProjectComponent />
        <AboutComponent />
        <ContactComponent />
        <FooterComponent />
      </main>
    </ThemeContext.Provider>
  )
}

export default MainComponent