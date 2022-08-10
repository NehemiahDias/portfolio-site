import React from 'react'

import HeaderComponent from './headerConponents/HeaderComponent';
import HomeComonent from './homeComponents/HomeComponent';
import ProjectComponent from './projectsComponents/ProjectComponent';
import AboutComponent from './aboutMeComponents/AboutComponent';

function MainComponent() {
  return (
    <>
      <HeaderComponent />
      <HomeComonent />
      <ProjectComponent />
      <AboutComponent />
    </>
  )
}

export default MainComponent