import React from 'react'

import HeaderComponent from './headerConponents/HeaderComponent';
import HomeComonent from './homeComponents/HomeComponent';
import ProjectComponent from './projectsComponents/ProjectComponent';
import AboutComponent from './aboutMeComponents/AboutComponent';
import ContactComponent from './contactComponents/ContactComponent';
import FooterComponent from './footerComponents/FooterComponent';

function MainComponent() {
  return (
    <>
      <HeaderComponent />
      <HomeComonent />
      <ProjectComponent />
      <AboutComponent />
      <ContactComponent />
      <FooterComponent />
    </>
  )
}

export default MainComponent