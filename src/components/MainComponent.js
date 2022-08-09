import React from 'react'

import HeaderComponent from './headerConponents/HeaderComponent';
import HomeComonent from './homeComponents/HomeComonent';
import ProjectComponent from './projectsComponents/ProjectComponent';

function MainComponent() {
  return (
    <>
      <HeaderComponent />
      <HomeComonent />
      <ProjectComponent />
    </>
  )
}

export default MainComponent